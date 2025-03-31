import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import icon from "/vite.svg";
import MenuBurger from "../LogoComponents/MenuBurger";
import { CgClose } from "react-icons/cg";
import Contacts from "./Contacts";

export default function HeaderView(clicked) {
  const [menuClicked, setMenuClicked] = useState(clicked.clicked);
  function menuIconOnClick() {
    setMenuClicked(!menuClicked);
  }
  const menuList = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "Products",
    },
    {
      id: 3,
      name: "About",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];
  return (
    <>
      <div className={"sticky  top-0  shadow-md backdrop-blur-md "}>
        <div className=" flex justify-between px-5 py-2   w-full    items-center   ">
          <div>
            <img src={icon} alt="" width={40} />
          </div>
          <Contacts />
          <MenuItems menuList={menuList} />

          <div
            className=" sm:hidden cursor-pointer duration-500 transition-all"
            onClick={menuIconOnClick}
          >
            {!menuClicked ? <MenuBurger /> : <CgClose />}
          </div>
        </div>
      </div>
      {menuClicked && (
        <div
          className={`${
            menuClicked &&
            " translate-y-0.5 shadow-md fixed backdrop-blur-md duration-700 transition-transform  w-full "
          }`}
        >
          <div className="  text-center cursor-pointer justify-center px-5 py-4 space-y-3">
            {menuList.map((items) => (
              <li key={items.id} className="list-none">
                <div className="">{items.name}</div>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
