import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const FooterPage = () => {
  return (
    <footer id="footer">
      <div className="footer_tag">
        <p className="footer_tag-text">&copy;2020 Sait OOSD Program</p>
      </div>
      <div className="footer_links-wrap">
        <ul className="social-links">
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                size="lg"
                className="facebook_icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                color="white"
                size="lg"
                className="twitter_icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="white"
                size="lg"
                className="linkedin_icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faGithub}
                color="white"
                size="lg"
                className="github_icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterPage;
