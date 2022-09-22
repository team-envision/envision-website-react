import React from "react";
// import { StyledMenu } from "./menu.styled";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Menu = ({ open,setOpen }) => {
  return (
    <div open={open} className={styles.menu} style={{
      transform: `${open ? "translateX(0)" : "translateX(100%)"}`
      
    }}>
      <HashLink to="/#" onClick={()=>{setOpen(!open)}}>Home</HashLink>
      <HashLink to="/#about" onClick={()=>{setOpen(!open)}}>About</HashLink>
      <HashLink to="/#divisions" onClick={()=>{setOpen(!open)}}>Division</HashLink>
      <HashLink to="/#featured" onClick={()=>{setOpen(!open)}}>Projects</HashLink>
      <Link
        to="/team"
        className="text-gray-600 hover:text-[#ef6522] transition"
      >
        Team
      </Link>
      <HashLink to="/#footer">Contact</HashLink>
    </div>
  );
};
export default Menu;
