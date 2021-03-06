import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as Cgicons from "react-icons/cg";
import * as Gricons from "react-icons/gr";
import "./AboutMe.css";

function AboutMe() {
  return (
    <Accordion.Item eventKey="4">
      <Accordion.Header>
        <div className="accordion-header-desc">
          <IoIcons.IoIosContact />
          Hakkımda
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="aboutme-accordion-body-wrapper">
          <div className="aboutme-accordion-body">
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/alper-emek-362520159/"
              target="_blank"
              rel="noreferrer"
            >
              <BsIcons.BsLinkedin className="about-me-icon"></BsIcons.BsLinkedin>
            </a>
            <a
              title="Fork Me On Github!"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/cartwheei/Istanbul-Deprem-Haritasi"
            >
              <BsIcons.BsGithub className="about-me-icon"></BsIcons.BsGithub>
            </a>
            <a
              title="Portfolio"
              href="https://alperemek.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Cgicons.CgWebsite className="about-me-icon"></Cgicons.CgWebsite>
            </a>
            <a
              title="Twitter"
              href="https://twitter.com/AlperEmek"
              target="_blank"
              rel="noreferrer"
            >
              <BsIcons.BsTwitter className="about-me-icon"></BsIcons.BsTwitter>
            </a>
            <a
              title="recaialperemek@gmail.com"
              href="mailto:recaialperemek@gmail.com"
              rel="noreferrer"
            >
              <Gricons.GrMail className="about-me-icon"></Gricons.GrMail>
            </a>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default AboutMe;
