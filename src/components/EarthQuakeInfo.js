import React from "react";
import "./EarthQuakeInfo.css";

const EarthQuakeInfo = ({ earthQuake }) => {
  let earthquakeDate = new Date(earthQuake.time);
  let [month, day, year] = [
    earthquakeDate.getMonth(),
    earthquakeDate.getDate(),
    earthquakeDate.getFullYear(),
  ];
  return (
    <div className="earthQuakeInfo">
      <table>
        <tbody>
          <tr>
            <th>Adres:</th>
            <td>{earthQuake.title}</td>
          </tr>
          <tr>
            <th>Tarih:</th>
            <td>{`${day}/${month}/${year}`}</td>
          </tr>
          <tr>
            <th>Büyüklük:</th>
            <td>{earthQuake.mag}</td>
          </tr>
          <tr>
            <th>Enlem:</th>
            <td>{earthQuake.latitude}</td>
          </tr>
          <tr>
            <th>Boylam:</th>
            <td>{earthQuake.longitude}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EarthQuakeInfo;
