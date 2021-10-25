import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as IoIcons from "react-icons/io";

function AssemblyArea() {
  return (
    <div>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <span>
            <IoIcons.IoIosPeople />
            Toplanma Alanları
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <p>AFAD LNK</p>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default AssemblyArea;
