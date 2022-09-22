import styled from "styled-components";

export const StyledMenu = styled.nav`
  overflow: hidden!important;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ef652220;
  backdrop-filter: blur(10px);
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100vw;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 1000;
  a {
    font-size: 1.4rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: #222222;
    text-decoration: none;
    transition: color 0.4s linear;

    &:hover {
      color: #ef6522;
    }
  }
`;
