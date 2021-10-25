import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";

function AboutMap() {
  return (
    <div>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span>
            <BsIcons.BsFillMapFill />
            Harita Hakkında
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <p>ibb</p>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default AboutMap;
