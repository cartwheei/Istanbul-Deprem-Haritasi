import { React } from "react";
import { Accordion } from "react-bootstrap";
import { RiEarthquakeFill } from "react-icons/ri";
import { Button } from "react-bootstrap";

function LastEarthquakes(props) {
  async function requestEarthQuake() {
    const date = getDate();
    const earthQuakeData = await fetchEarthQuakeData(date);
    const feature = earthQuakeData.features[0];
    const coords = getEarthQuakeCoords(feature);
    const info = getEarthQuakeInfo(feature);

    props.onSelectEarthquake(coords.longitude, coords.latitude);
    props.setEarthQuake({
      ...coords,
      ...info,
    });
  }

  const fetchEarthQuakeData = async (date) => {
    const res = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-02&endtime=${date}
      &minlatitude=40.165460682065535&maxlatitude=42.14093947168063&
      minlongitude=26.153955078125&maxlongitude=30.147499999999996&limit=1`
    );
    return await res.json();
  };

  const getEarthQuakeInfo = (feature) => {
    const id = feature.id;
    const { detail, time, mag, title } = feature.properties;
    return {
      id,
      detail,
      time,
      mag,
      title,
    };
  };

  const getEarthQuakeCoords = (feature) => {
    return {
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  };

  const getDate = () => {
    const today = new Date();
    return today.toISOString().substring(0, 10);
  };

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>
        <div className="accordion-header-desc">
          <RiEarthquakeFill />
          Son Depremler
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="helpful-links">
          <Button
            className="helpful-link-button"
            variant="secondary"
            onClick={requestEarthQuake}
          >
            <span className="helpful-link-button">Son Büyük Depremler</span>
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default LastEarthquakes;
