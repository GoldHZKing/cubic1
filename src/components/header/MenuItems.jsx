import React, { useRef } from "react";
import HerosView from "../Heros/HerosView";
// import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { HashLink as Link } from "react-router-hash-link";
export default function MenuItems(probs) {
  const { menuList } = probs;

  return (
    <ul className={"hidden md:inline-flex md:flex-row   gap-10  px-10 "}>
      {menuList.map((items) => (
        <li key={items.id}>
          {/* <a href="#">{items.name}</a> */}
          <Link smooth to={items.url}>
            {items.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
