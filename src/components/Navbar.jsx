import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2d3648] text-white px-6 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lg font-normal">CodeChef VIT-C</div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navbar Links */}
      <nav
        className={`absolute md:static top-14 left-0 w-full bg-[#2d3648] md:bg-transparent md:w-auto md:flex md:space-x-6 items-center px-6 md:px-0 py-3 md:py-0 transition-all duration-300 ease-in ${
          isOpen ? "flex flex-col" : "hidden md:flex"
        }`}
      >
        <a href="#" className="text-gray-300 hover:text-white border-b-5 border-transparent hover:border-yellow-600 pb-1">
          Contributions
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-5 border-transparent hover:border-yellow-600 pb-1">
          Dashboard
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-5 border-transparent hover:border-yellow-600 pb-1">
          Leaderboard
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-5 border-transparent hover:border-yellow-600 pb-1">
          Request
        </a>
        <a href="#" className="text-gray-300 hover:text-white border-b-5 border-transparent hover:border-yellow-600 pb-1">
          Signout
        </a>

        {/* Profile Icon - Always Visible */}
        <div className="mt-3 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <circle cx="12" cy="12" r="11" />
            <circle cx="12" cy="10" r="4" />
            <path d="M18 20a6 6 0 00-12 0" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
