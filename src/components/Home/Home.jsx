import React from "react";
import { useState } from "react";
import HeaderView from "../header/HeaderView";
import HerosView from "../Heros/HerosView";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import CenterContent from "../CenterContent/CenterContent";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Home() {
  const [menuClicked, setMenuClicked] = useState(false);
  function menuIconOnClick() {
    setMenuClicked(!menuClicked);
    console.log(menuClicked);
  }

  return (
    <div>
      <HeaderView clicked={menuClicked} />

      <HerosView />
      <WhyChooseUs />
      <CenterContent />
      <Footer />
    </div>
  );
}
