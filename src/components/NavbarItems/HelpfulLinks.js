import { React } from "react";
import { Accordion, Button } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";

import "./HelpfulLinks.css";

function HelpfulLinks() {
  return (
    <Accordion.Item eventKey="5">
      <Accordion.Header>
        <div className="accordion-header-desc">
          <BsIcons.BsBookFill />
          Kaynakça
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="helpful-links">
          <Button
            className="helpful-link-button"
            variant="secondary"
            href="https://depremzemin.ibb.istanbul/"
            target="_blank"
          >
            <span className="helpful-link-button">
              Deprem Zemin İbb Web Sayfası
            </span>
          </Button>
          <Button
            className="helpful-link-button"
            variant="secondary"
            href="https://depremzemin.ibb.istanbul/wp-content/uploads/2020/11/Anadolu_Yonetici_Ozeti.pdf"
            target="_blank"
          >
            <span className="helpful-link-button">
              Anadolu Yakası Mikrobölgeleme Raporu
            </span>
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default HelpfulLinks;
