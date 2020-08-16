import React from "react";
import styled from "styled-components";
import svg from "../svg/web_developer 1.svg";
import SvgControll from "../components/SvgControll";
const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;
const EmailWrapper = styled.div`
  width: 20%;
  margin: 8%;
  border: 4px solid #000;
`;
const SvgWrapper = styled.div`
  width: 60%;
  padding: 8%;
`;
function Main() {
  return (
    <MainWrapper>
      <EmailWrapper></EmailWrapper>
      <SvgWrapper>
        <SvgControll />
      </SvgWrapper>
    </MainWrapper>
  );
}

export default Main;
