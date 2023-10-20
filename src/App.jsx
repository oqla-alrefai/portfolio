import "./App.css";
import {
  Home,
  ListMenu,
  Technologies,
  Contact,
  Footer,
  Services,
} from "./Components ";

import { useState, useEffect } from "react";

// 742px = 100vh
// 700px = ?vh
// 70000 / 742 = 94vh
// 100 + ( 100 - 94 ) vh

// ?px = 1vh
// 1px = ?vh
// 1px = 0.135vh
// 1vh = 7.42px

function App() {
  let heightChange = 0;

  function handleResize() {
    let innerHeight = window.innerHeight;
    let changeRate = ((innerHeight - 742) / 742);
    heightChange = 135 * ((changeRate * -1))
    console.log(changeRate);
    console.log(135 * (changeRate * -1));
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section style={{ "--heightChange": heightChange }}>
      <Home />
      <ListMenu />
      <Technologies />
      <Services />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
