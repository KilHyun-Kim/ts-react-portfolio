import * as React from "react";
import styled from "styled-components";

const { useEffect, useState } = React;

const ProgressMainWrapper = styled.div`
  background-color: white;
  height: 3px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
`;

const ProgressMainStyle = styled.div`
  height: 3px;
  background-color: #00cc83;
`;
function ScrollIndicator() {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const onScroll = () => {
    const winScroll: number = document.documentElement.scrollTop;
    const height: number =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled: number = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <ProgressMainWrapper>
      <ProgressMainStyle
        className="progressMainStyle"
        style={{ width: `${scrollTop}%` }}
      ></ProgressMainStyle>
    </ProgressMainWrapper>
  );
}

export default ScrollIndicator;
