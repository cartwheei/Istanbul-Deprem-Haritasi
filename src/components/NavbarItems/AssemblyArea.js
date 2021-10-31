import { React } from "react";
import { Accordion, Button } from "react-bootstrap";
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
          <Button
            variant="secondary"
            href="https://www.turkiye.gov.tr/afet-ve-acil-durum-yonetimi-acil-toplanma-alani-sorgulama"
            target="_blank"
          >
            AFAD E-devlet Toplanma Alanları
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default AssemblyArea;
