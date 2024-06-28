import React from "react";
import Map from "./Map";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-[#3B3B3B] px-7 py-6 overflow-hidden">
      <Map />
      <div className=" flex flex-col justify-center  gap-5 text-white sm:flex-row sm:justify-around ">
        {/* <div className="space-y-1">
        <h1 className="font-semibold text-4xl text">Lets keep in touch!</h1>
        <p className="text-lg">Find us on any of these platforms, we respond 1-2 business days</p>
        <div className=" flex space-x-5 pt-4 text-xl ">
          <a href="" className="text-blue-500"><FaTwitter /></a>
          <a href="" className="text-green-500"><FaWhatsapp /></a>
          <a href="" className="text-red-300"><FaInstagram /></a>
        </div>
      </div> */}
        <div className="sm:pt-5">
          <a href="" className="font-semibold text-2xl md:text-3xl">
            SMART <span className="text-[#d8a31c]">HOST</span>
          </a>
          <p className="text-xs text-gray-300 md:text-base">Property Network</p>
        </div>
        <div className="flex space-x-28 sm:space-x-40">
          <div>
            <ul className=" text-sm md:text-base space-y-2">
              <li className="opacity-55 font-medium">Useful Links</li>
              <li>
                <a href="#about-us" className="cursor-pointer">About</a>
              </li>
              <li>
                <a href="#services" className="cursor-pointer">Services</a>
              </li>
              <li>
                <a href="#gallery" className="cursor-pointer">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="cursor-pointer">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-sm md:text-base space-y-2">
              <li className="opacity-55 font-medium">Other Resources</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>
                <a href="#contact" className="cursor-pointer">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-6 border-gray-500" />
      <div className="pt-3">
        <p className="text-xs text-center text-gray-200">
          &copy; {currentYear} SmartHouse Property Network Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
