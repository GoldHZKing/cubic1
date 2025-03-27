import React from "react";
import CenterContent from "../CenterContent/CenterContent";

export default function MenuItems() {
  return (
    <ul className="hidden sm:inline-flex md:flex-row   gap-10  px-10 ">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="">Products</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
}
