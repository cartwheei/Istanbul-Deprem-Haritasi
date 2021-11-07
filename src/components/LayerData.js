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

  maxzoom: 12,
  paint: {
    "fill-color": "black",
    "fill-opacity": 0.1,
  },
};

const anadolu_geojson_name = {
  id: "name",
  type: "symbol",
  maxzoom: 14,
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

export { anadolu_geojson_line, anadolu_geojson_name, anadolu_geojson_polygon };
