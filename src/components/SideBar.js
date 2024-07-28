import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="">
        <ul className="bg-slate-50 p-5 mt-36 mr-24">
          <li className="flex flex-col">
            <Link
              to=""
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all w-56 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="aboutus"
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="recruitmentforeurope"
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all hover:text-white"
            >
              Recruitment For Europe
            </Link>
            <Link
              to="recruitmentprocess"
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all hover:text-white"
            >
              Recruitment Process
            </Link>
            <Link
              to="clientlist"
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all hover:text-white"
            >
              Client List
            </Link>
            <Link
              to="blog"
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all hover:text-white"
            >
              Blog
            </Link>
            <Link
              to="faq"
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all hover:text-white"
            >
              Faq
            </Link>
            <Link
              to="contactus"
              className="hover:bg-orange-700 px-5 py-2 hover: cursor-pointer transition-all hover:text-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <br />
      </div>
    </>
  );
};

export default SideBar;
