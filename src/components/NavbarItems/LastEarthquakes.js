import { React } from "react";
import { Accordion } from "react-bootstrap";
import * as RiIcons from "react-icons/ri";
import { Button } from "react-bootstrap";

function LastEarthquakes(props) {
  async function requestEarthQuake() {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const res = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-02&endtime=${date}
      &minlatitude=40.165460682065535&maxlatitude=42.14093947168063&
      minlongitude=26.153955078125&maxlongitude=30.147499999999996&limit=1`
    );
    const json = await res.json();

    props.onSelectEarthquake(
      json.features[0].geometry.coordinates[0],
      json.features[0].geometry.coordinates[1]
    );

    props.setEarthQuake({
      latitude: json.features[0].geometry.coordinates[1],
      longitude: json.features[0].geometry.coordinates[0],
      id: json.features[0].id,
      detail: json.features[0].properties.detail,
      time: json.features[0].properties.time,
      mag: json.features[0].properties.mag,
      title: json.features[0].properties.title,
    });
  }

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>
        <div className="accordion-header-desc">
          <RiIcons.RiEarthquakeFill />
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
