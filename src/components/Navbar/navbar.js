import logo from "../../assets/images/envision.svg";
import Burger from "./burger";
import Menu from "./menu";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const ref = useRef(null);
  const handleScroll = () => {
    // const position = window.pageYOffset;
    // var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var doc = document.documentElement;
    var position = doc.scrollTop;
    // console.log(doc.scrollTop);
    // console.log(top);
    console.log(position);
    document.addEventListener("scroll", () => {
      var header = document.querySelector("header");
      header.classList.toggle("md:shadow-xl", position > 150);
      header.classList.toggle("md:bg-[#ffffff90]", position > 150);
      header.classList.toggle("md:backdrop-blur-lg", position > 150);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="flex flex-row justify-between px-7 py-3 overflow-hidden overflow-x-hidden z-20 md:fixed top-0 w-[100vw]">
      <div className="">
        <img src={logo} />
      </div>
      <div className="md:block hidden">
        <ul className="flex flex-row justify-between gap-x-10 mt-4 font-[roboto]">
          <li className="flex flex-row">
            <HashLink
              to="/#"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Home
            </HashLink>
          </li>
          <li className="flex flex-row">
            <HashLink
              to="/#about"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              About
            </HashLink>
          </li>
          <li className="flex flex-row">
            <HashLink
              to="/#divisions"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Divisions
            </HashLink>
          </li>
          <li className="flex flex-row">
            <HashLink
              to="/#featured"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Projects
            </HashLink>
          </li>
          <li className="flex flex-row">
            <Link
              to="/team"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Team
            </Link>
          </li>
          <li className="flex flex-row">
            <HashLink
              to="/#footer"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Contact Us
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="md:hidden block overflow-hidden"
        style={{overflowX:'hidden!important'}}
      >
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}
