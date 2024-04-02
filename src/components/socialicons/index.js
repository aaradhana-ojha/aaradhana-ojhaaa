import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        
        <li>
          <a href="https://github.com/aaradhana-ojha">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aaradhanaojha/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/aaradhana.ojha.7/">
            <FaFacebookF />
          </a>
        </li>
        
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
