import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Harita Hakkında",
    path: "/",
    icon: <BsIcons.BsFillMapFill />,
    cName: "nav-text",
  },
  {
    title: "Kaynaklar",
    path: "/",
    icon: <AiIcons.AiFillInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Son Depremler",
    path: "/",
    icon: <GiIcons.GiEarthCrack />,
    cName: "nav-text",
  },
  {
    title: "Toplanma Alanları",
    path: "/",
    icon: <IoIcons.IoIosPeople />,
    cName: "nav-text",
  },
  {
    title: "Hakkımda",
    path: "/",
    icon: <IoIcons.IoIosContact />,
    cName: "nav-text",
    compName: "AboutMe",
  },
];
