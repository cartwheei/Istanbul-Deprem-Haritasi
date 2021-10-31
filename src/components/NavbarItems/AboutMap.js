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
          <div>
            <p className="ibb-map-description">
              İstanbul Anadolu Yakası yer sarsıntı haritası İstanbul Büyükşehir
              Belediyesi Deprem ve Zemin İnceleme Müdürlüğü'nün Anadolu Yakası
              (2009) Mikrobölgeleme Projeleri kapsamında üretilmiştir. Çalıştay
              sonrası üretilen harita, tekrar projekte edilerek uygulama
              oluşturulmuştur.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default AboutMap;
