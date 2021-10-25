import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as IoIcons from "react-icons/io";

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
        <Accordion.Body>
          <p>iletişim</p>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default AboutMe;
