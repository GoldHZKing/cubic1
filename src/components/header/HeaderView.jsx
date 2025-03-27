import React, { useState } from "react";
import MenuItems from "./MenuItems";
import icon from "/vite.svg";
import MenuBurger from "../LogoComponents/MenuBurger";

export default function HeaderView() {
  const [menuClicked, setMenuClicked] = useState(false);
  function menuIconOnClick() {
    setMenuClicked(!menuClicked);
  }
  return (
    <>
      <div className="sticky  top-0  shadow-md backdrop-blur-md">
        <div className=" flex justify-between px-5 py-2   w-full    items-center     ">
          <div>
            <img src={icon} alt="" width={40} />
          </div>

          <MenuItems />

          <div className=" sm:hidden cursor-pointer" onClick={menuIconOnClick}>
            <MenuBurger />
          </div>
        </div>
      </div>
    </>
  );
}
