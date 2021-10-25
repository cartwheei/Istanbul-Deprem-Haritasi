import * as React from "react";
import { useState, useRef, useCallback } from "react";
import ReactMapGL from "react-map-gl";
import { Button } from "react-bootstrap";
import "./Map.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
import Legend from "./Legend";
import IbbLegend from "./IbbLegend";
import Navbar from "./Navbar2";

function Map() {
  const [viewport, setViewport] = useState({
    width: "fit",
    height: "100vh",
    latitude: 41.02031900050546,
    longitude: 29.084243774414062,
    zoom: 10,
  });

  const [sidebar, setSidebarState] = useState(false);

  const showSidebar = () => {
    console.log("alper");
    setSidebarState(!sidebar);
    console.log(sidebar);
  };

  const buttonStyleShow = {
    visibility: "visible",
  };

  const buttonStyleHidden = {
    visibility: "hidden",
  };

  const mapRef = useRef();
  console.log(mapRef, "mapref");

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <div className="map-wrapper">
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiY2FydHdoZWVsIiwiYSI6ImNranp4em5rczBjN2Qyb2syOHR2eWhhcGkifQ.JVVl04Dnmq0xIKJiER_C8A"
        }
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        style={{ top: 0, left: 0 }}
        mapStyle="mapbox://styles/cartwheel/ckulfthjs0eop17o744fi3sym"
      >
        <Geocoder
          className="geocoder"
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={
            "pk.eyJ1IjoiY2FydHdoZWVsIiwiYSI6ImNranp4em5rczBjN2Qyb2syOHR2eWhhcGkifQ.JVVl04Dnmq0xIKJiER_C8A"
          }
          position="top-right"
          placeholder="Arama"
          style={buttonStyleHidden}
        />
      </ReactMapGL>
      <Button
        onClick={showSidebar}
        className="collapse-menu-button"
        style={sidebar ? buttonStyleHidden : buttonStyleShow}
      >
        Menu
      </Button>
      <IbbLegend />
      <Legend />
      {sidebar && (
        <Navbar setSidebarState={setSidebarState} sidebar={sidebar}></Navbar>
      )}
    </div>
  );
}

export default Map;
