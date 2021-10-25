import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as IoIcons from "react-icons/io";

function LastEarthquakes() {
  return (
    <div>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span>
            <IoIcons.IoIosContact />
            Son Depremler
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <p>link deprem</p>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default LastEarthquakes;
