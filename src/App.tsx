import React from "react";
import "./App.css";
import Header from "./pages/Header";
import ScrollIndicator from "./components/ScrollIndicator";
import Main from "./pages/Main";
function App() {
  return (
    <>
      <Header />
      <ScrollIndicator />
      <Main />
    </>
  );
}

export default App;
