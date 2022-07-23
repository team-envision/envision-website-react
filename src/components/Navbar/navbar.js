import logo from "../../assets/images/envision.svg";
import Burger from "./burger";
import Menu from "./menu";
import React, { useState, useEffect } from "react";

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
      header.classList.toggle("shadow-xl", position > 50);
      header.classList.toggle("bg-[#ffffff90]", position > 50);
      header.classList.toggle("backdrop-blur-lg", position > 50);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="flex flex-row justify-between px-7 py-3 overflow-hidden z-20 md:fixed top-0 w-[100vw]">
      <div className="">
        <img src={logo} />
      </div>
      <div className="md:block hidden">
        <ul className="flex flex-row justify-between gap-x-10 mt-4 font-[roboto]">
          <li className="flex flex-row">
            <a
              href="#"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Home
            </a>
          </li>
          <li className="flex flex-row">
            <a
              href="#"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              About
            </a>
          </li>
          <li className="flex flex-row">
            <a
              href="#"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Divisions
            </a>
          </li>
          <li className="flex flex-row">
            <a
              href="#"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Projects
            </a>
          </li>
          <li className="flex flex-row">
            <a
              href="#"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Team
            </a>
          </li>
          <li className="flex flex-row">
            <a
              href="#"
              className="text-gray-600 hover:text-[#ef6522] transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden block overflow-hidden">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}
