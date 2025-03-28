import { useState } from "react";
import HeaderView from "./components/header/HeaderView";
import HerosView from "./components/Heros/HerosView";

import CenterContent from "./components/CenterContent/CenterContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <div className="w-full h-full   bg-backgroundImage_1  bg-no-repeat bg-fixed bg-cover ">
        <div className=" backdrop-blur-lg">
          <HeaderView />

          <HerosView />

          <CenterContent />
        </div>
      </div> */}
      <HeaderView />

      <HerosView />

      <CenterContent />
      <Footer />
    </>
  );
}

export default App;
