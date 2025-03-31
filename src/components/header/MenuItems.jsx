import React from "react";
import CenterContent from "../CenterContent/CenterContent";
import { li } from "framer-motion/client";

export default function MenuItems(probs) {
  const { menuList } = probs;
  return (
    <ul className={"hidden sm:inline-flex md:flex-row   gap-10  px-10 "}>
      {menuList.map((items) => (
        <li key={items.id}>
          <a href="#">{items.name}</a>
        </li>
      ))}
    </ul>
  );
}
