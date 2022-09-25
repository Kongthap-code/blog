import Openingupper from '../components/Openingupper.js';
import Container from '../components/Container.js';
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function Articlesall({ data }) {
  const all =
    data.articleall.length > 0
      ? data.articleall.map((articleaArray) => (
          <div key={articleaArray.fileName}>
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
            <Link href={`/treasury/[maintitle]`}
            as={`/treasury/${articleaArray.fileName}`}>
              <a>
                <li>{articleaArray.title}</li>
              </a>
            </Link>
          </div>
        ))
      : "ไม่มีข้อมูล";

  return <ul>{all}</ul>
  };

export default function Index(props) {
    return (
    <>
      <style jsx>{`
        .title{
            font-size: 22px;
            text-align: center;
          }

        .children{
            font-size: 16px;
          }
      `}</style>
      <Openingupper />
      <div className="title">Article about me🔥</div>
        <SyntaxHighlighter 
          language="javascript" 
          showLineNumbers={true}
      >
{`/*Hello developers, I'm a web developer.I like to learn new website technology.*/
    const information = 
      await fetch('https://api.github.com/users/Kongthap-code')
        .then(res => res.json())

    console.log("Let me introduce myself.My name is {information.name}.
      i listen to R&B music on a regular basis while working.
      i live in {information.location}")
/*Thank you for coming to visit my website.*/`}
    </SyntaxHighlighter>
      <div className="children">Repositories Articles 📌</div>
      <Articlesall data={props}/>
    </>
  );

}


export async function getStaticProps() {
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

  return{
    props:{
      articleall : articleslist,
      basedomain: process.env.baseDomain || null,
    }
  }
}
