import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import {
  PiBuildingOfficeDuotone,
  PiFacebookLogo,
  PiInstagramLogo,
  PiTwitterLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

export default function Footer() {
  const address = {
    doorNo: "3/24",
    street: "kamarajar Street",
    area: "Gandhipuram",
    district: "Coimbatore",
    state: "Tammilnadu",
    country: "India",
    pinCode: "641125",
  };
  return (
    <div className="bg-slate-800 text-white w-full h-1/2 py-12">
      <div className="container mx-auto ">
        <div className=" text-center justify-center">
          <h1 className="text-2xl underline underline-offset-8 ">Contact Us</h1>
          <div className="sm:flex w-full py-5 space-y-8 ">
            <div className="sm:w-1/2">
              <div className="flex justify-center">
                <div className="flex  gap-5 items-center">
                  <div className="text-4xl">
                    <PiBuildingOfficeDuotone />
                  </div>
                  <div className="text-justify">
                    <p>{address.doorNo}</p>
                    <p>{address.street}</p>
                    <p>{address.area}</p>
                    <p>{`${address.state} ${address.country} - ${address.pinCode}`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2">
              <div>
                <h1>Logo</h1>
                <div className="flex gap-8  py-5 justify-center text-2xl">
                  <PiFacebookLogo />
                  <PiInstagramLogo />
                  <PiTwitterLogo />
                  <PiYoutubeLogo />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-slate-400">
            Copyright 2025 <span className="text-yellow-100">| </span>
            <span className="text-slate-100">Design by Cubic</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
