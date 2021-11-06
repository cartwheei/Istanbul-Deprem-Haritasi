import { React, useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import { Button } from "react-bootstrap";

function LastEarthquakes(props) {
  const [earthQuake, setEarthQuake] = useState([]);

  useEffect(() => {
    requestEarthQuake();
  }, []);

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
      &minlatitude=40.065460682065535&maxlatitude=42.54093947168063&
      minlongitude=26.553955078125&maxlongitude=30.937499999999996`
    );
    const json = await res.json();

    setEarthQuake(json);

    console.log(earthQuake);
  }

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>
        <span>
          <IoIcons.IoIosContact />
          Son Depremler
        </span>
      </Accordion.Header>
      <Accordion.Body>
        <Button
          className="helpful-link-button"
          variant="secondary"
          onClick={requestEarthQuake}
          target="_blank"
        >
          <span className="helpful-link-button">Son Büyük Depremler</span>
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default LastEarthquakes;
