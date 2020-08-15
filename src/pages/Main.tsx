import React from "react";
import styled from "styled-components";
import svg from "../svg/web_developer 1.svg";
const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const EmailWrapper = styled.div`
  width: 40%;
  margin: 8%;
  border: 4px solid #000;
`;
const SvgWrapper = styled.div`
  width: 60%;
  padding: 5%;
`;
function Main() {
  return (
    <MainWrapper>
      <EmailWrapper></EmailWrapper>
      <SvgWrapper>
        <img src={svg} alt="svg" />
      </SvgWrapper>
    </MainWrapper>
  );
}

export default Main;
