import { useEffect, useState } from "react";
import HeaderView from "./components/header/HeaderView";
import HerosView from "./components/Heros/HerosView";

import CenterContent from "./components/CenterContent/CenterContent";
import Footer from "./components/Footer/Footer";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  // const myDiv = document.querySelector("#myDiv");
  // myDiv.addEventListener("click", menuIconOnClick);
  const [menuClicked, setMenuClicked] = useState(false);
  function menuIconOnClick() {
    console.log("hhhhhhhhhhhhhhhhhh");

    setMenuClicked(!menuClicked);
    console.log(menuClicked);
  }
  return (
    <>
      <HeaderView clicked={menuClicked} />

      <HerosView />

      <WhyChooseUs />

      <CenterContent />
      <Footer />
    </>
  );
}

export default App;
