import * as React from "react";
import { useState, useRef, useCallback } from "react";
import MapGL, { Source, Layer, Popup } from "react-map-gl";
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
    id: "line",
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
      "fill-opacity": 0.5,
    },
  };

  const anadolu_geojson_name = {
    id: "name",
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
    width: "100vw",
    height: "100vh",
    latitude: 40.954492756949186,
    longitude: 29.266891479492188,
    zoom: 10,
  });

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY },
    } = event;

    const hoveredFeature = features && features[0];

    setHoverInfo(
      hoveredFeature
        ? {
            feature: hoveredFeature,
            x: offsetX,
            y: offsetY,
          }
        : null
    );
  }, []);

  const [sidebar, setSidebarState] = useState(false);

  const showSidebar = () => {
    setSidebarState(!sidebar);
  };

  const buttonStyleShow = {
    visibility: "visible",
  };

  const buttonStyleHidden = {
    visibility: "hidden",
  };

  const mapRef = useRef();

  const handleViewportChange = useCallback(
    (newViewport) =>
      setViewport({ newViewport: { ...newViewport, width: "fit" } }),
    []
  );

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
      <MapGL
        {...viewport}
        ref={mapRef}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiY2FydHdoZWVsIiwiYSI6ImNranp4em5rczBjN2Qyb2syOHR2eWhhcGkifQ.JVVl04Dnmq0xIKJiER_C8A"
        }
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

        {hoverInfo && (
          <div
            className="tooltip"
            style={{ left: hoverInfo.x, top: hoverInfo.y }}
          >
            <div>State: {hoverInfo.feature.properties.adi}</div>
            <div>alper emek</div>
            <div>
              Median Household Income:
              {hoverInfo.feature.properties.agir_yarali}
            </div>
          </div>
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
      </MapGL>
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
