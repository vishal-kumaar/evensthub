import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar(props) {
  const [input, setInput] = useState("");

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const searchInput = (key, arrOfObj) => {
    const searchResult = [];

    for (let obj of arrOfObj) {
      try {
        if (obj.name.toLowerCase().search(key.toLowerCase()) !== -1) {
          searchResult.push(obj);
        }
      } catch (error) {
        return searchResult;
      }
    }
    return searchResult;
  };

  useEffect(
    () => {
      props.setEventObj(searchInput(input, props.events));
    },
    // eslint-disable-next-line
    [input]
  );

  return (
    <nav className="sticky top-0 left-0 w-full text-center md:text-left md:flex md:justify-between md:items-center bg-gray-600/80 text-white py-4 px-4 md:px-10">
      <div className="mb-3 md:mb-0">
        <a href="#home">
          <img
            src={logo}
            alt="logo"
            className="w-44 md:w-40 rounded-md mx-auto mb-3 md:inline-block md:mb-0"
            onClick={scrollToTop}
          />
        </a>
        <a
          href="#home"
          className="mx-4 md:mx-0 md:ml-10 font-poppins text-lg md:text-base font-semibold py-1 px-2 rounded-md hover:bg-white hover:text-black"
          onClick={scrollToTop}
        >
          Home
        </a>
        <a
          href="#footer"
          className="mx-4 md:mx-0 md:ml-10 font-poppins text-lg md:text-base font-semibold py-1 px-2 rounded-md hover:bg-white hover:text-black"
        >
          Contact
        </a>
      </div>
      <input
        type="text"
        className="text-black font-signika px-3 py-2 rounded-md w-full md:w-80 outline-none"
        placeholder="Search Events..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </nav>
  );
}
