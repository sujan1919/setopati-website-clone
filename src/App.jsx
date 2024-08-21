import React from "react";
import Header from './components/Header'
import UpperMenu from "./components/UpperMenu";
import News from "./components/News";

function App(){
  return(
    <>
    <UpperMenu></UpperMenu>
    <Header></Header>
    <News></News>
    </>
  )
}

export default App