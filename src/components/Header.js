import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <div className="bg-black p-2 sm:font flex flex-row py-4 px-20">
        <div className="pr-4">
          <span className="bg-orange-700 p-0.5 py-2 px-2 hover:bg-sky-600 hover: cursor-pointer transition-all">
            <FontAwesomeIcon
              icon={faInstagram}
              className=" text-white pl-1 text-xl"
            />
          </span>
          <span className="bg-orange-700 p-0.5 ml-0.5 py-2 px-2 hover:bg-sky-600 hover: cursor-pointer transition-all">
            <FontAwesomeIcon
              icon={faFacebook}
              className=" text-white pl-1 text-xl"
            />
          </span>
          <span className="bg-orange-700 p-0.5 ml-0.5 py-2 px-2 hover:bg-sky-600 hover: cursor-pointer transition-all">
            <FontAwesomeIcon
              icon={faTwitter}
              className="fa-brands fa-instagram text-white pl-1 text-xl"
            />
          </span>
        </div>
        <div className="pr-40">
          <p className="text-white text-sm">
            Have any questions? <Link to="contactus">Call Us Now!! </Link>
          </p>
        </div>
        <div className="text-white text-sm flex flex-row">
          <p> WhatsApp/Viber/WeChat :</p>
          <button className="bg-yellow-300 rounded-lg ml-2 px-4 hover:bg-orange-700 transition-all">
            +08097985555
          </button>
        </div>
      </div>
      <div className="flex flex-row py-4 px-20">
        <div className="mr-24">
          <Link to="">
            <img src={logo} alt="" className="h-24" />
          </Link>
        </div>
        <div className="flex flex-row mr-24">
          <span className="pt-9">
            <FontAwesomeIcon
              className="ml-2 px-4 text-4xl text-sky-500"
              aria-hidden="true"
              icon={faPhone}
            />
          </span>
          <div className="pt-5">
            <p>
              {" "}
              <Link to="/" className="hover:text-orange-700">
                kc.shamsher@gmail.com
              </Link>
            </p>

            <p>
              {" "}
              <Link to="/" className="hover:text-orange-700">
                +97714970091
              </Link>
            </p>

            <p>
              {" "}
              <Link to="/" className="hover:text-orange-700">
                infomanpowerjapan@gmail.com
              </Link>
            </p>
            <p>
              <Link to="/" className="hover:text-orange-700">
                +97714970091
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <span className="pt-9">
            <FontAwesomeIcon
              className="ml-2 px-4 text-4xl text-sky-500"
              aria-hidden="true"
              icon={faLocationCrosshairs}
            />
          </span>
          <div className="pt-5">
            <p>shibuya,</p>
            <p>tokyo 03, 12-20</p>
            <p>Japan</p>
          </div>
        </div>
      </div>
      {/* navbar start */}
      <nav className="bg-slate-800  mx-24">
        <ul className="flex space-x-4 text-white">
          <li className="hover:bg-orange-700 p-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <NavLink to="/" className="">
              Home
            </NavLink>
          </li>
          <li className="relative hover:bg-orange-700 p-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <button
              onMouseEnter={() => setDropdownOpen(!dropdownOpen)}
              className=""
            >
              Company Profile
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-7 bg-slate-800 text-white p-2 space-y-2">
                <li className="py-3 hover:bg-orange-700 hover:cursor-pointer">
                  <NavLink to="aboutus" className="p-3 hover:cursor-pointer">
                    About Us
                  </NavLink>
                </li>
                <li className="py-3 hover:bg-orange-700 hover:cursor-pointer">
                  <NavLink to="aboutnepal" className="p-3">
                    About Japan
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:bg-orange-700 py-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <NavLink to="recruitmentforeurope" className="hover: px-1">
              Recruitment For Europe
            </NavLink>
          </li>
          <li className="hover:bg-orange-700 py-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <NavLink to="recruitmentprocedure" className="hover: px-1">
              Recruitment Procedure
            </NavLink>
          </li>
          <li className="hover:bg-orange-700 py-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <NavLink to="clientlist" className="hover: px-1">
              Client List
            </NavLink>
          </li>
          <li className="hover:bg-orange-700 py-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <NavLink to="blog" className="hover: px-1">
              Blog
            </NavLink>
          </li>
          <li className="hover:bg-orange-700 py-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <NavLink to="faq" className="hover: px-1">
              FAQ
            </NavLink>
          </li>
          <li className="hover:bg-orange-700 py-7 transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
            <NavLink to="contactus" className="hover: px-1">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
