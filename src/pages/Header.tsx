import * as React from "react";
import styled from "styled-components";
// import background from "../images/background.png";

const { useEffect, useState } = React;

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 35px 100px;
  z-index: 1;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  .sticky {
    padding: 5px 100px;
    background: #000;
  }
`;
const HeaderBlock2 = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 20px 100px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  z-index: 1;
  .sticky {
    padding: 5px 100px;
    background: #000;
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

type HeaderProps = {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
};

function Header({ value1, value2, value3, value4 }: HeaderProps) {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const onScroll = () => {
    const winScroll: number = document.documentElement.scrollTop;
    setScrollValue(winScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {scrollValue > 100 ? (
        <HeaderBlock2>
          <LogoLink href="#">Logo</LogoLink>
          <NavUl>
            <NavLinks>
              <a href="#">{value1}</a>
            </NavLinks>
            <NavLinks>
              <a href="#">{value2}</a>
            </NavLinks>
            <NavLinks>
              <a href="#">{value3}</a>
            </NavLinks>
            <NavLinks>
              <a href="#">{value4}</a>
            </NavLinks>
          </NavUl>
        </HeaderBlock2>
      ) : (
        <HeaderBlock>
          <LogoLink href="#">Logo</LogoLink>
          <NavUl>
            <NavLinks>
              <a href="#">{value1}</a>
            </NavLinks>
            <NavLinks>
              <a href="#">{value2}</a>
            </NavLinks>
            <NavLinks>
              <a href="#">{value3}</a>
            </NavLinks>
            <NavLinks>
              <a href="#">{value4}</a>
            </NavLinks>
          </NavUl>
        </HeaderBlock>
      )}

      {/* <Background /> */}
    </>
  );
}
Header.defaultProps = {
  value1: "Main",
  value2: "About",
  value3: "Responsive",
  value4: "etc",
};
export default Header;
