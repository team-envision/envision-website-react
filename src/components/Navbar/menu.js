import React from "react";
import { StyledMenu } from "./menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Home</Link>
      <a href="/">About</a>
      <a href="/">Division</a>
      <a href="/">Projects</a>
      <Link
        to="/team"
        className="text-gray-600 hover:text-[#ef6522] transition"
      >
        Team
      </Link>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};
export default Menu;
