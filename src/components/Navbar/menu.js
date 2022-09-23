import React from "react";
// import { StyledMenu } from "./menu.styled";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Menu = ({ open, setOpen }) => {
  return (
    <div
      open={open}
      className={styles.menu + " transition duration-700"}
      style={{
        transform: `${open ? "translateX(0)" : "translateX(100%)"}`,
        display: `${open ? "flex" : "none"}`,
      }}
    >
      <HashLink
        to="/#"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Home
      </HashLink>
      <HashLink
        to="/#about"
        onClick={() => {
          setOpen(!open);
        }}
      >
        About
      </HashLink>
      <HashLink
        to="/#divisions"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Division
      </HashLink>
      <HashLink
        to="/#featured"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Projects
      </HashLink>
      <HashLink
        to="/team"
        className="text-gray-600 hover:text-[#ef6522] transition"
      >
        Team
      </HashLink>
      <HashLink to="/#footer">Contact</HashLink>
    </div>
  );
};
export default Menu;
