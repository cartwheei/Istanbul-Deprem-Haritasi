import { React } from "react";
import { Accordion, Button } from "react-bootstrap";
import * as IoIcons from "react-icons/io";

import "./AssemblyArea.css";

function AssemblyArea() {
  return (
    <Accordion.Item eventKey="3">
      <Accordion.Header>
        <span>
          <IoIcons.IoIosPeople />
          Toplanma Alanları
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <div className="helpful-links">
          <Button
            variant="secondary"
            href="https://www.turkiye.gov.tr/afet-ve-acil-durum-yonetimi-acil-toplanma-alani-sorgulama"
            target="_blank"
          >
            {" "}
            <span className="helpful-link-button">
              AFAD E-devlet Toplanma Alanları
            </span>
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default AssemblyArea;
