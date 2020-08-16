import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  ${({ padding }: { padding?: string }) => padding && `padding : ${padding};`}
  z-index: 1;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
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

type HeaderWrapperProps = {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  paddingValue: string;
};
function HeaderBlock({
  value1,
  value2,
  value3,
  value4,
  paddingValue,
}: HeaderWrapperProps) {
  return (
    <HeaderWrapper padding={paddingValue}>
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
    </HeaderWrapper>
  );
}

HeaderBlock.defaultProps = {
  value1: "Main",
  value2: "About",
  value3: "Responsive",
  value4: "etc",
};

export default HeaderBlock;
