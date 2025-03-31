import React from "react";
import { FcIphone } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
export default function Contacts() {
  const contacts = {
    mobile: "+91 9632558743",
    email: "azs@gmail.com",
    location: "Coimbatore",
  };
  return (
    <div className="md:flex gap-6 items-center">
      <div className="flex gap-1 items-center text-center  justify-center  ">
        <FcIphone />
        <p>{contacts.mobile}</p>
      </div>
      <div className="flex gap-1 items-center text-center  justify-center ">
        <h1 className="text-orange-600">@</h1>
        <p>{contacts.email}</p>
      </div>
      <div className="flex gap-1 items-center text-center  justify-center ">
        <div className="text-red-700">
          <IoLocationOutline />
        </div>
        <p>{contacts.email}</p>
      </div>
    </div>
  );
}
