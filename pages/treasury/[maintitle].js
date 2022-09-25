import ReactMarkdown from "react-markdown";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Openingupper from '../../components/Openingupper.js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function Articles(props) {
  return (
      <>
      <style jsx>{`
        a {
            text-decoration: none;
            color: black;
          }
        a:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        a:visited {
            color: #777;
          }
      `}</style>
        <Link href={"/"}>
          <a>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> <span>ย้อนกลับ</span>
          </a>
        </Link>
        <style jsx global>{`
        .imgmain {
          width: 100%;
          object-fit: contain;
          max-height: 450px;
        }
      `}</style>
         <ReactMarkdown
components={{
          code: function Code({children, className}) {
            const match = /language-(\w+)/.exec(className || '')
            return(
            <>
              <SyntaxHighlighter
              language={match[1]}
              >
              {children}
              </SyntaxHighlighter>
            </>
            )},
          img: function image({src ,alt}) {
            return(
              <>
                  <img
                    className="imgmain"
                      src={src}
                      alt={alt}
                  />
                </>
            )
          }
        }}
         >
        {`# ${props.title}\n\n\n${props.content}`}
         </ReactMarkdown>
      </>
  );
}

export async function getStaticProps({ params }) {
  const fs = require('fs');
  const fm = require('front-matter');
  const markdown = fm(
    fs.readFileSync(`./markdown/${params.maintitle}.md`, "utf8")
  );

  const title = markdown.attributes.title;
  const content = markdown.body;
  const image = markdown.attributes.image;
  const imageAlt = markdown.attributes.imageAlt;

  return {
    props: {
      content,
      title,
      image: image || null,
      imagealt: imageAlt || null,
      basedomain: process.env.baseDomain,
    }
  }
}

export async function getStaticPaths() {
  const fs = require('fs');
  const path = require('path');
  const fm = require('front-matter');
  const markdownlist = fs.readdirSync("./markdown");

  const articleslist = markdownlist.map((markdown) => {
    const file = fs.readFileSync(`./markdown/${markdown}`, "utf8");
    const contentlist = fm(file);
    return {
      fileName: path.parse(markdown).name,
      title: contentlist.attributes.title || null,
    };
  });
  const staticPaths = { paths: [], fallback: false };

  articleslist.forEach((markdown) => {
    staticPaths.paths.push({
      params: { maintitle: markdown.fileName},
    })
  });

  return staticPaths;
};

export default Articles
