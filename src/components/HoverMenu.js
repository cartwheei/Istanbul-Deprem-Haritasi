import React from "react";
import "./HoverMenu.css";

const HoverMenu = ({ hoverInfo }) => {
  return (
    <div className="tooltip" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
      <div>{hoverInfo.feature.properties.adi}</div>
      <br />
      <div className="tooltip-properties">
        <div className="tooltip-properties-human">
          <div>Can Kaybı :{hoverInfo.feature.properties.can_kaybi}</div>
          <div>Ağır Yaralı :{hoverInfo.feature.properties.agir_yarali}</div>
          <div>Hafif Yaralı :{hoverInfo.feature.properties.hafif_yarali}</div>
          <div>
            Hastanede Tedavi Edilecek Yaralı :
            {hoverInfo.feature.properties.hastane_tedavi_yarali}
          </div>
          <div>
            Barınma İhtiyacı Olacak Hane :
            {hoverInfo.feature.properties.barinma_ihtiyaci_hane_sayisi}
          </div>
        </div>

        <div className="tooltip-properties-building">
          <div>
            Çok Ağır Hasarlı Bina :
            {hoverInfo.feature.properties.bina_cok_agir_hasar}
          </div>
          <div>
            Ağır Hasarlı Bina :{hoverInfo.feature.properties.bina_agir_hasar}
          </div>

          <div>
            Orta Hasarlı Bina :{hoverInfo.feature.properties.bina_orta_hasar}
          </div>
          <div>
            Hafif Hasarlı Bina :{hoverInfo.feature.properties.bina_hafif_hasar}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
