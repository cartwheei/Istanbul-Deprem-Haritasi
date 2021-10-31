import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as Cgicons from "react-icons/cg";
import "./AboutMe.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <span>
            <IoIcons.IoIosContact />
            Hakkımda
          </span>
        </Accordion.Header>
        <Accordion.Body className="aboutme-accordion-body">
          <div></div>
          <Link
            title="LinkedIn"
            href="https://www.linkedin.com/in/alper-emek-362520159/"
            target="_blank"
          >
            <BsIcons.BsLinkedin className="about-me-icon"></BsIcons.BsLinkedin>
          </Link>
          <Link
            title="Github"
            href="https://github.com/cartwheei"
            target="_blank"
          >
            <BsIcons.BsGithub className="about-me-icon"></BsIcons.BsGithub>
          </Link>
          <Link
            title="Portfolio"
            href="https://alperemek.netlify.app/"
            target="_blank"
          >
            <Cgicons.CgWebsite className="about-me-icon"></Cgicons.CgWebsite>
          </Link>
          <Link
            title="Twitter"
            href="https://twitter.com/AlperEmek"
            target="_blank"
          >
            <BsIcons.BsTwitter className="about-me-icon"></BsIcons.BsTwitter>
          </Link>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default AboutMe;
