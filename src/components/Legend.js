import React from "react";
import "./Legend.css";

const Legend = () => {
  const layer = [
    { name: "Ags: Çok Yüksek Risk", color: "#ee1112" },
    { name: "Bgs: Yüksek Risk", color: "#deeb14" },
    { name: "Cgs: Orta Risk", color: "#19e641" },
  ];

  return (
    <div className="legend">
      <h4>Harita Lejandı</h4>
      {layer.map((layer, index) => (
        <div key={index}>
          <span
            id="risk"
            style={{ backgroundColor: layer.color }}
            key={layer.name}
          ></span>
          {layer.name}
        </div>
      ))}
    </div>
  );
};

export default Legend;
