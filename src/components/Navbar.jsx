import React from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="text-center md:text-left md:flex md:justify-between md:items-center bg-gray-600 text-white py-4 px-4 md:px-10">
      <div className="mb-3 md:mb-0">
        <a href="#home">
          <img src={logo} alt="logo" className="w-44 md:w-40 rounded-md mx-auto mb-3 md:inline-block md:mb-0" />
        </a>
        <a href="#home" className="mx-4 md:mx-0 md:ml-10 font-poppins text-lg md:text-base font-semibold">
          Home
        </a>
        <a href="#footer" className="mx-4 md:mx-0 md:ml-10 font-poppins text-lg md:text-base font-semibold">
          Contact
        </a>
      </div>
      <form>
        <input
          type="text"
          className="text-black font-signika px-3 py-2 rounded-md w-full md:w-80 outline-none"
          placeholder="Search Events..."
        />
      </form>
    </nav>
  );
}