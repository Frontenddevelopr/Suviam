import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#4A5565] text-white py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Company */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT COMPANY</h3>
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 p-2 rounded-full">
              <i className="fas fa-hard-hat text-white">&#128104;</i>
            </div>
            <span className="text-xl font-bold ml-3">SUVIAM</span>
          </div>
          <p className="text-sm text-gray-400">
            Construct ipsum dolor sit consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-bold mb-4">RECENT POST</h3>
          {[20, 30, 31].map((date) => (
            <div className="mb-4" key={date}>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-3 text-center w-12">
                  <span className="block font-bold text-yellow-500">
                    {date}
                  </span>
                  <span className="block text-sm text-gray-400">MAR</span>
                </div>
                <div>
                  <p className="text-white font-medium">Blog title first</p>
                  <span className="text-sm text-gray-500">By Admin / 28</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
          <ul className="text-sm space-y-2">
            {[
              "Home",
              "About",
              "Product",
              "Project",
              "Gallery",
              "Blog",
              "Contact Us",
            ].map((link) => (
              <li key={link} className="hover:text-yellow-500">
                &gt; {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter and Social Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="p-2 flex-1 bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-yellow-500 px-4 text-black">➤</button>
          </div>
          <h3 className="text-lg font-bold mb-4">SOCIAL LINKS</h3>
          <div className="flex space-x-3 text-gray-400">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaRss />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="flex items-center">
          <IoLocationOutline size={24} className="text-yellow-500" />
          <span className="ml-4">
            Gat No. 211, At post: Savaki(Lo), Tal-Deola, Dist-Nashik.
          </span>
        </div>
        <div className="flex items-center">
          <IoCallOutline size={24} className="text-yellow-500" />
          <span className="ml-4">
            9403455116 <br />
            9403455280
          </span>
        </div>
        <div className="flex items-center">
          <MdOutlineEmail size={24} className="text-yellow-500" />
          <span className="ml-4">
            suviaminfra@gmail.com
            <br />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
