import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-600 text-white">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 md:px-10 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <a href="mailto:mail@startuprr.com" className="hover:underline">
            suviaminfra@gmail.com
          </a>
          <span className="hidden md:block mx-4">|</span>
          <a href="tel:9403455280" className="hover:underline">
            9403455116
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-300 px-4 md:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-900 p-2 rounded-full">
            <i className="fas fa-hard-hat text-yellow-500 text-2xl">
              &#128104;
            </i>
          </div>
          <span className="font-bold text-xl"></span>
          <span className="text-sm text-gray-700">SUVIAM</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-black font-semibold">
          <button onClick={() => navigate("/")}>HOME</button>
          <button onClick={() => navigate("/aboutus")}>ABOUT</button>
          <button onClick={() => navigate("/product")}>PRODUCT</button>
          <button onClick={() => navigate("/project")}>PROJECTS</button>
          <button onClick={() => navigate("/gallery")}>GALLERY</button>
          <button onClick={() => navigate("/blog")}>BLOG</button>
          <button onClick={() => navigate("/contactus")}>CONTACT US</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-black text-white px-3 py-2 rounded-md"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-yellow-500 px-4 py-4 md:hidden space-y-4">
          <button
            onClick={() => {
              navigate("/");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            HOME
          </button>
          <button
            onClick={() => {
              navigate("/aboutus");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              navigate("/product");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            PRODUCT
          </button>
          <button
            onClick={() => {
              navigate("/projects");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            PROJECTS
          </button>
          <button
            onClick={() => {
              navigate("/gallery");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            GALLERY
          </button>
          <button
            onClick={() => {
              navigate("/blog");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            BLOG
          </button>
          <button
            onClick={() => {
              navigate("/contactus");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
