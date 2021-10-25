import { React } from "react";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./NavbarData";
import { IconContext } from "react-icons";
import { Accordion } from "react-bootstrap";

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
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <NavLink to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <span>{item.icon}</span>
                        <span> {item.title}</span>
                      </Accordion.Header>
                      <Accordion.Body>{item.title}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
