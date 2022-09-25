import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import AboutmeStyle from '../styles/Aboutme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

async function fetchinfo(url) {
  return fetch(url).then(res => res.json());
}

const Aboutme = () => {
  const { data, error } = useSWR('https://api.github.com/users/Kongthap-code', fetchinfo)

  if (!data)
    return (
      <>
      <style jsx>{AboutmeStyle}</style>
      <div className="Aboutmecontent">
        <img
          src="https://avatars.githubusercontent.com/u/70052450?v=4"
          alt="Profile Kongthap"
          className="profile"
        />
        <div>
          <div className="name">Kongthap phuengsang</div>
          {` @Kongthap-code`}
            <div className="icon">
              <FontAwesomeIcon icon={faFacebook} />
              <a href="https://www.facebook.com/profile.php?id=100009380508678">
              Facebook 
						</a>
              <FontAwesomeIcon icon={faGithub} />
						<a href="https://github.com/Kongthap-code">
              Github 
						</a>
              <FontAwesomeIcon icon={faTwitter} />
						<a href="#">
              Twitter 
						</a>
            </div>
          <div className="status">I'm a web developer i loves 🖥 Nvim and 💻 Macos.</div>
          <div className="block-start-1">🇹🇭 Thailand</div>

        </div>
      </div>
      </>
    );

  if (data)
    return (
      <>
      <style jsx>{AboutmeStyle}</style>
      <div className="Aboutmecontent">
        <img
          src="https://avatars.githubusercontent.com/u/70052450?v=4"
          alt="Profile Kongthap"
          className="profile"
        />
        <div>
          <div className="name">{data.name}</div>
          {`@${data.login}`}
          <div className="icon">
          <FontAwesomeIcon icon={faFacebook} />
						<a href="https://www.facebook.com/profile.php?id=100009380508678">
              Facebook 
						</a>
          <FontAwesomeIcon icon={faGithub} />
						<a href="https://github.com/Kongthap-code" >
              Github 
						</a>
          <FontAwesomeIcon icon={faTwitter} />
						<a href="#">
              Twitter 
						</a>
          </div>
          </div>
          <div className="status">{data.bio}</div>
          <div className="block-start-1">🇹🇭 {data.location}</div>
      </div>
      </>
    );
}

export default Aboutme;
