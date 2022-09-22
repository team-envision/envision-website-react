import React from "react";
import { StyledMenu } from "./menu.styled";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Menu = ({ open,setOpen }) => {
  return (
    <StyledMenu open={open}>
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
    </StyledMenu>
  );
};
export default Menu;
