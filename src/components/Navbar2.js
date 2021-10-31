import { React } from "react";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Accordion, Button } from "react-bootstrap";
import AboutMe from "./NavbarItems/AboutMe";
import AboutMap from "./NavbarItems/AboutMap";
import AssemblyArea from "./NavbarItems/AssemblyArea";
import LastEarthquakes from "./NavbarItems/LastEarthquakes";
import HelpfulLinks from "./NavbarItems/HelpfulLinks";

import "./Navbar.css";

function Navbar({ setSidebarState, sidebar }) {
  const showSidebar = () => {
    setSidebarState(!sidebar);
  };

  if (sidebar === false) {
    return null;
  }
  return (
    <div>
      <IconContext.Provider value={{ color: "" }}>
        <div className={"nav-menu active"}>
          <Button className="navbar-toggle" onClick={showSidebar}>
            <AiIcons.AiOutlineClose />
          </Button>
          <Accordion className="nav-menu-accordion" defaultActiveKey="0">
            <AboutMap />
            <HelpfulLinks />
            <LastEarthquakes />
            <AssemblyArea />
            <AboutMe />
          </Accordion>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
