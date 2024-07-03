import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/logoLight.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#020043] md:py-28 py-10 w-full gap-4 md:px-14 lg:mt-28 mt-5 px-5">
        <div className="w-full flex lg:flex-row md:flex-row md:justify-between flex-col gap-4 lg:justify-evenly">
          <div className="flex flex-col max-[450px]:items-center">
            <img className="w-20 mb-5" src={logo} alt="Logo" />
            <Link to="/">
              <div className="flex flex-col max-w-72 text-white lg:text-start md:items-start items-center p-0 ml-0">
                <h2 className="max-[450px]:text-xl">
                  123 Main Street Anytown, USA Postal Code: 12345
                </h2>
                <p className=" mt-5">
                  Support: support@oyolloo.com (Available: 10:00am to 07:00pm)
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-6 text-white max-[450px]:text-center ">
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/about" className="link link-hover">
              About us
            </Link>
            <Link to="/success" className="link link-hover">
              Success Page
            </Link>
            <Link to="/terms" className="link link-hover">
              Terms and condition
            </Link>
          </div>
          <div className="flex max-[450px]:text-center flex-col gap-3 mt-6  text-white ">
            <Link to="/" className="link link-hover">
              Services
            </Link>
            <Link to="/about" className="link link-hover">
              Scheduling
            </Link>
            <Link to="/success" className="link link-hover">
              Contact Us
            </Link>
            <Link to="/terms" className="link link-hover">
              Patient Portal
            </Link>
          </div>
          <div className="flex flex-col max-[450px]:text-center gap-2 mt-6 text-white">
            <h2>Follow Us</h2>
            <div className="grid grid-flow-col gap-4 justify-center">
              <a href="" aria-label="Facebook">
                <FaFacebook className="text-2xl text-blue-600" />
              </a>
              <a href="" aria-label="Instagram">
                <FaInstagram className="text-2xl text-red-600" />
              </a>
              <a href="" aria-label="Linkedin">
                <FaLinkedin className="text-2xl  text-blue-500" />
              </a>
              <a href="" aria-label="YouTube">
                <FaYoutube className="text-2xl text-red-600" />
              </a>
            </div>
            <h2 className="mt-10">@docplus 2024</h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
