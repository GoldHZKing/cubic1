import React from "react";
import image from "../../assets/camera/8.jpg";
import { FcOk } from "react-icons/fc";
import { li } from "framer-motion/client";
export default function WhyChooseUs() {
  const list = [
    {
      id: 1,
      title: "High-Quality Surveillance Solutions",
      desc: "We provide top-of-the-line CCTV cameras with HD resolution,night vision, and motion detection to ensure 24/7 security for your home or business.",
    },
    {
      id: 2,
      title: " Custom Security Solutions",
      desc: "Every property is different, and so are its security needs. Our experts assess your space and recommend the best camera setup to maximize coverage and protection.",
    },
    {
      id: 3,
      title: "Affordable Pricing & No Hidden Costs",
      desc: "We offer competitive pricing with transparent costs—no surprises, just reliable security solutions that fit your budget.",
    },
    {
      id: 4,
      title: "Remote Access & Smart Features",
      desc: "Monitor your property from anywhere using your smartphone, tablet, or computer. Get real-time alerts and stay in control of your security.",
    },
    {
      id: 5,
      title: "Trusted by Hundreds of Customers",
      desc: "We’ve helped businesses, homeowners, and organizations enhance their security with our state-of-the-art CCTV solutions.",
    },
  ];
  return (
    <>
      <section className="bg-gray-50 my-2">
        <div className="container  w-5/6 py-8 px-2  mx-auto md:flex">
          <div className="md:w-2/3 ">
            <h1 className=" font-semibold text-blue-600">
              Why Choose Us for Your CCTV Camera Needs?
            </h1>
            <div className="py-3 ">
              <div className="text-3xl  text-green-700 font-semibold flex justify-center">
                Reliable Security Solutions You Can Trust
              </div>
              <div className="py-2 ">
                We provide top-quality CCTV cameras with advanced features to
                ensure the safety of your home, business, or property. Our
                products are designed for 24/7 surveillance, offering
                high-definition clarity and night vision to keep you protected
                at all times.
              </div>

              <ul>
                {list.map((items) => (
                  <li key={items.id}>
                    <div className="flex items-center gap-3 font-semibold">
                      <FcOk />
                      <div>{items.title}</div>
                    </div>
                    <div className="text-slate-600">{items.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-auto md:w-1/3 ">
            <img src={image} alt="" className="rounded-lg " />
          </div>
        </div>
      </section>
    </>
  );
}
