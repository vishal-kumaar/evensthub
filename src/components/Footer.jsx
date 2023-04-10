import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-600 py-4 px-4 text-center text-white mt-14">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 mb-4">
          <h4 className="font-bold text-lg mb-2">Support</h4>
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4">
          <h4 className="font-bold text-lg mb-2">Legal</h4>
          <ul>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4">
          <h4 className="font-bold text-lg mb-2">Connect</h4>
          <ul>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
