import * as React from "react";
import { useState, useRef, useCallback } from "react";
import MapGL, {
  Source,
  Layer,
  FlyToInterpolator,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import { Button } from "react-bootstrap";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
import Legend from "./Legend";
import IbbLegend from "./IbbLegend";
import Navbar from "./Navbar";
import Pins from "./Pins";
import * as GiIcons from "react-icons/gi";
import HoverMenu from "./HoverMenu";
import {
  anadolu_geojson_line,
  anadolu_geojson_name,
  anadolu_geojson_polygon,
} from "./LayerData";
import { geojson } from "./anadolu_data";
import "./Map.css";

import mapboxgl from "mapbox-gl";

mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

require("dotenv").config();
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOXGL_TOKEN;

function Map() {
  const scaleControlStyle = {
    position: "absolute",
    bottom: 36,
    left: 0,
    padding: "10px",
  };

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    latitude: 40.954492756949186,
    longitude: 29.266891479492188,
    zoom: 10,
  });

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const {
      features,
      srcEvent: { offsetX, offsetY, target },
    } = event;

    const hoveredFeature = features && features[0];

    setHoverInfo(
      hoveredFeature && target.className === "overlays"
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
    (newViewport) => setViewport(newViewport),
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

  const [earthQuake, setEarthQuake] = useState({});

  const onSelectEarthquake = useCallback((longitude, latitude) => {
    setViewport({
      longitude,
      latitude,
      zoom: 13,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  }, []);

  return (
    <div className="map-wrapper">
      <MapGL
        {...viewport}
        className="mapboxgl-map"
        ref={mapRef}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/cartwheel/ckulfthjs0eop17o744fi3sym"
        interactiveLayerIds={["alan"]}
        onHover={onHover}
        width="100vw"
        height="100vh"
      >
        {earthQuake.id && (
          <Pins earthQuake={earthQuake} setEarthQuake={setEarthQuake} />
        )}

        <Source type="geojson" data={geojson}>
          <Layer {...anadolu_geojson_line} />
          <Layer {...anadolu_geojson_name} />
          <Layer {...anadolu_geojson_polygon} />
        </Source>

        {/*{hoverInfo && <HoverMenu hoverInfo={hoverInfo} />}*/}
        <Geocoder
          className="geocoder"
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
          placeholder="Arama"
        />
        <div className="map-control">
          <GeolocateControl className="geolocateStyle" />
          <FullscreenControl className="fullscreenControlStyle" />
          <NavigationControl className="navStyle" />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>
      </MapGL>

      <Button
        onClick={showSidebar}
        className="collapse-menu-button"
        style={sidebar ? buttonStyleHidden : buttonStyleShow}
      >
        <GiIcons.GiHamburgerMenu className="collapse-menu-button-span-svg" />
      </Button>
      {/*<IbbLegend />
      />*/}
      <Legend />
      {sidebar && (
        <Navbar
          setSidebarState={setSidebarState}
          sidebar={sidebar}
          onSelectEarthquake={onSelectEarthquake}
          setEarthQuake={setEarthQuake}
        ></Navbar>
      )}
    </div>
  );
}

export default Map;
