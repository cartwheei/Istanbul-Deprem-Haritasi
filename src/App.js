import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <Route path="/">
        <div className="total-app">
          <Map></Map>
        </div>
      </Route>
    </Router>
  );
}

export default App;
