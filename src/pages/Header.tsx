import * as React from "react";
import HeaderBlock from "../components/HeaderBlock";

const { useEffect, useState } = React;

function Header() {
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
        <HeaderBlock paddingValue="10px 100px" />
      ) : (
        <HeaderBlock paddingValue="30px 100px" />
      )}
    </>
  );
}

export default Header;
