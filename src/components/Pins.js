import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import EarthQuakeInfo from "./EarthQuakeInfo";
import "./Pins.css";

const Pins = ({ earthQuake, setEarthQuake }) => {
  const [popupInfo, setPopupInfo] = useState(true);

  console.log(earthQuake, "asd");

  const changePopupInfo = () => {
    setPopupInfo(!popupInfo);

    console.log(popupInfo, "popopinfo");
  };

  const changePopup = () => {
    setEarthQuake({});
  };

  const SIZE = 30;
  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

  return (
    <>
      <Marker
        latitude={earthQuake.latitude}
        longitude={earthQuake.longitude}
        key={earthQuake.id}
      >
        <svg
          height={SIZE}
          viewBox="0 0 24 24"
          style={{
            cursor: "pointer",
            fill: "#d00",
            stroke: "none",
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
          }}
          onClick={changePopupInfo}
        >
          <path d={ICON} />
        </svg>
      </Marker>
      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={earthQuake.longitude}
          latitude={earthQuake.latitude}
          closeOnClick={false}
          onClose={changePopup}
        >
          <EarthQuakeInfo earthQuake={earthQuake} />
        </Popup>
      )}
    </>
  );
};

export default React.memo(Pins);
