import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer_container">
      <a className="social_icon" href="https://github.com/HarryPrince-dev">
        <GitHubIcon />
      </a>
      <a
        className="social_icon"
        href="www.linkedin.com/in/harry-prince0"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default Footer;
