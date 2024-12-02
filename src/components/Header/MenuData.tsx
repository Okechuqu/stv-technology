import {
  FaHammer,
  FaHelmetSafety,
  FaHouse,
  FaKey,
  FaLaptopCode,
  FaNewspaper,
  FaSatelliteDish,
  FaServicestack,
  FaSolarPanel,
  FaUsers,
} from "react-icons/fa6";
import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    icon: <FaHouse />,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    icon: <FaNewspaper />,
    title: "Blogs",
    path: "/blog",
    newTab: false,
  },

  {
    id: 4,
    icon: <FaServicestack />,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        icon: <FaSatelliteDish />,
        title: "Information Technology",
        path: "/it",
        newTab: false,
      },
      {
        id: 42,
        icon: <FaKey />,
        title: "Hi-Tech Security",
        path: "/hi-tech",
        newTab: false,
      },
      {
        id: 43,
        icon: <FaSolarPanel />,
        title: "Renewable Power",
        path: "/solar",
        newTab: false,
      },
      {
        id: 44,
        icon: <FaHelmetSafety />,
        title: "Construction Management",
        path: "/cpm",
        newTab: false,
      },
      {
        id: 45,
        icon: <FaHammer />,
        title: "Mechanical and Electrical Engineering",
        path: "/mee",
        newTab: false,
      },
      {
        id: 46,
        icon: <FaLaptopCode />,
        title: "Web Design / Development",
        path: "/wdd",
        newTab: false,
      },
    ],
  },
];
export default menuData;
