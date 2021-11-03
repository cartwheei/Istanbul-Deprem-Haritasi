import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as Cgicons from "react-icons/cg";
import "./AboutMe.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <Accordion.Item eventKey="4">
      <Accordion.Header>
        <span>
          <IoIcons.IoIosContact />
          Hakkımda
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <div className="aboutme-accordion-body">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/alper-emek-362520159/"
            target="_blank"
          >
            <BsIcons.BsLinkedin className="about-me-icon"></BsIcons.BsLinkedin>
          </a>
          <a title="Github" target="_blank" href="https://github.com/cartwheei">
            <BsIcons.BsGithub className="about-me-icon"></BsIcons.BsGithub>
          </a>
          <a
            title="Portfolio"
            href="https://alperemek.netlify.app/"
            target="_blank"
          >
            <Cgicons.CgWebsite className="about-me-icon"></Cgicons.CgWebsite>
          </a>
          <a
            title="Twitter"
            href="https://twitter.com/AlperEmek"
            target="_blank"
          >
            <BsIcons.BsTwitter className="about-me-icon"></BsIcons.BsTwitter>
          </a>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default AboutMe;
