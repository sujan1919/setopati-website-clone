import React from "react";
import Header from "./components/Header";
import UpperMenu from "./components/UpperMenu";
import News from "./components/News";
import Ads from "./components/Ads";
import ThreeBoxNews from "./components/ThreeBoxNews";
import BigThumbnailTemplate from "./components/BigThumbnailTemplate";
import SectionTitle from "./components/SectionTitle";

function App() {
  return (
    <>
      <UpperMenu />
      <Header />
      <News />
      <Ads id={1} />
      <ThreeBoxNews />
      <BigThumbnailTemplate />
      <Ads id={2}/>
      <SectionTitle id={1} />
    </>
  );
}

export default App;
