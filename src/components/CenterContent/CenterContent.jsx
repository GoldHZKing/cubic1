import ServiceCard from "./ServiceCard";
import { FaComputer } from "react-icons/fa6";
import { LuCctv } from "react-icons/lu";
import { LuPrinter } from "react-icons/lu";
import { IoIosLaptop } from "react-icons/io";
export default function CenterContent() {
  const data = [
    {
      name: "CCTV",
      icon: <LuCctv />,
      desc: "providing reliable 24/7 security with clear, high-quality video, emphasizing features like remote access, motion detection.",
      bgColor: "bg-green-100",
      color: "text-green-500",
    },
    {
      name: "Laptops",
      icon: <IoIosLaptop />,
      desc: "Experience seamless performance and portability with this powerful laptop, featuring a blazing-fast processor.",
      bgColor: "bg-red-100",
      color: "text-red-500",
    },
    {
      name: "Computers",
      icon: <FaComputer />,
      desc: "Explore a world of computing solutions, from powerful desktops to sleek laptops, and everything in between. ",
      bgColor: "bg-blue-100",
      color: "text-blue-500",
    },
    {
      name: "Printers",
      icon: <LuPrinter />,
      desc: "devices that transfer text and images from a computer to a physical medium like paper or cards.",
      bgColor: "bg-pink-100",
      color: "text-pink-500",
    },
  ];
  return (
    <div id="products" className="container w-5/6  mx-auto py-12">
      <div className="">
        <div className="text-center">
          <p className="italic font-semibold"> Our Main Services</p>
          <h1 className="text-5xl text-teal-700 font-light">Sales & Service</h1>
        </div>
        <div className="sm:flex flex-wrap  text-wrap w-full sm:justify-around py-10">
          {data.map((items) => (
            <div key={items.name} className="  flex  justify-center py-5">
              <ServiceCard data={items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
