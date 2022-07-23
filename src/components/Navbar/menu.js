import React from "react";
import { StyledMenu } from "./menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Division</a>
      <a href="/">Projects</a>
      <a href="/">Team</a>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};
export default Menu;
