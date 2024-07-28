import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-sky-700 flex flex-row py-4 px-20 text-white">
      <div className="max-w-md">
        <h4 className="font-medium text-xl pb-5">NAVIGATION MENU</h4>
        <p className="pb-3">
          KC HR Consultant is a team of experienced professionals offering range
          of human resource services to foreign countries as a Government
          authorized and relibale manpower company in Japan.
        </p>
        <ul>
          <li>
            <Link
              to="blog"
              className="hover:text-orange-700 hover: cursor-pointer transition-all"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" text-orange-700 mr-3 pl-1 text-xl"
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              tenetur ab nihil aperiam laboriosam vel.
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              className="hover:text-orange-700 hover: cursor-pointer transition-all"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-orange-700 mr-3 pl-1 text-xl"
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              tenetur ab nihil aperiam laboriosam vel.
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-w-md px-10">
        <h4 className="font-medium text-xl pb-5">KC MANPOWER SOLUTION</h4>
        <p className="pb-5">20-34 shibuya, Tokyo, Japan</p>
        <Link
          to="contactus"
          className="hover:text-orange-700 hover: cursor-pointer transition-all"
        >
          09876544567
        </Link>
        <br />
        <Link
          to="contactus"
          className="hover:text-orange-700 hover: cursor-pointer transition-all"
        >
          kcHR@gmail.com
        </Link>
        <br />
        <Link
          to="contactus"
          className="hover:text-orange-700 hover: cursor-pointer transition-all"
        >
          manpowersupplyjapan@gmail.com
        </Link>
        <br />

        <h4 className="pt-5">Follow us on</h4>
        <span>KCHRfacebook</span>
        <span>KCtwitter</span>
      </div>
      <div className="w-full max-w-xs">
        <form className=" ">
          <div className="mb-4">
            <input
              className="appearance-none   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="FullName"
            />
          </div>
          <div className="mb-6">
            <input
              className=" appearance-none   w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <input
              className=" appearance-none   w-full py-12 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="text"
              placeholder="Message"
            />
          </div>
        </form>
      </div>
    </footer>
  );
};
