import React from "react";
import Header from "./components/Header";
import UpperMenu from "./components/UpperMenu";
import News from "./components/News";
import Ads from "./components/Ads";
import ThreeBoxNews from "./components/ThreeBoxNews";

function App() {
  return (
    <>
      <UpperMenu />
      <Header />
      <News />
      <Ads />
      <ThreeBoxNews />
    </>
  );
}

export default App;
