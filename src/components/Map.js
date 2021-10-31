import * as React from "react";
import { useState, useRef, useCallback } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";
import { Button } from "react-bootstrap";
import "./Map.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
import Legend from "./Legend";
import IbbLegend from "./IbbLegend";
import Navbar from "./Navbar2";

function Map() {
  const data_url = "anadolu_projects.json";

  const anadolu_geojson_line = {
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "black",
      "line-width": 2,
    },
  };

  const anadolu_geojson_polygon = {
    id: "alan",
    type: "fill",
    paint: {
      "fill-color": "black",
      "fill-opacity": 0.2,
    },
  };

  const anadolu_geojson_name = {
    type: "symbol",
    layout: {
      "text-field": ["get", "adi"],
      "text-radial-offset": 0.5,
      "text-justify": "auto",
      "icon-image": ["concat", ["get", "icon"], "-15"],
      "text-size": 14,
    },
    paint: {
      "text-halo-width": 2,
      "text-halo-color": "white",
      "text-color": "black",
    },
  };

  const [viewport, setViewport] = useState({
    width: "fit",
    height: "100vh",
    latitude: 40.954492756949186,
    longitude: 29.266891479492188,
    zoom: 10,
  });

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    if (event.features.length > 1) {
      const county = event.features && event.features[0].properties;
      setHoverInfo({
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
        countyName: county && county.adi,
      });
    } else {
    }
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.countyName) || "";

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
  // console.log(mapRef, "mapref");

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
        // onViewportChange={(nextViewport) => setViewport(nextViewport)}
        style={{ top: 0, left: 0 }}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/cartwheel/ckulfthjs0eop17o744fi3sym"
        interactiveLayerIds={["alan"]}
        onHover={onHover}
      >
        <Source type="geojson" data={data_url}>
          <Layer {...anadolu_geojson_line} />
          <Layer {...anadolu_geojson_name} />
          <Layer {...anadolu_geojson_polygon} />
        </Source>

        {selectedCounty && (
          <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            closeButton={false}
            className="county-info"
          >
            {selectedCounty}
          </Popup>
        )}

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
