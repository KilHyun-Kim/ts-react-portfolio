import React from "react";
import styled from "styled-components";
import background from "../images/background.png";

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
  z-index: 100000;
  .sticky {
    padding: 5px 100px;
    background: #fff;
  }
`;
const LogoLink = styled.a`
  position: relative;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 2px;
  transition: 0.6s;
`;

const NavUl = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavLinks = styled.li`
  position: relative;
  a {
    position: relative;
    margin: 0 15px;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 500px;
    transition: 0.6s;
  }
`;

const Background = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${background});
  /* background-size: cover; */
`;

function Header() {
  window.addEventListener("scroll", function () {
    HeaderBlock.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <>
      <HeaderBlock>
        <LogoLink href="#">Logo</LogoLink>
        <NavUl>
          <NavLinks>
            <a href="#">Main</a>
          </NavLinks>
          <NavLinks>
            <a href="#">Main</a>
          </NavLinks>
          <NavLinks>
            <a href="#">Main</a>
          </NavLinks>
          <NavLinks>
            <a href="#">Main</a>
          </NavLinks>
        </NavUl>
      </HeaderBlock>
      <Background />
    </>
  );
}

export default Header;
