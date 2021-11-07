import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import "./AboutMap.css";

function AboutMap() {
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>
        <div className="accordion-header-desc">
          <BsIcons.BsFillMapFill />
          Harita Hakkında
        </div>
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
          <p className="ibb-map-description">
            Harita üzerinde gezinerek 7.5 şiddetindeki deprem senaryosundaki
            olası can ve mal kayıpları görüntülenebilir.
          </p>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default AboutMap;
