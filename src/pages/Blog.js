import React from "react";
import SideBar from "../components/SideBar";

export const Blog = () => {
  return (
    <div className="bg-slate-200 flex flex-row">
      <div className="">
        <br />
        <h2 className="bg-orange-700 p-5 mx-24 mb-5 text-white font-bold text-3xl">
          Client List
        </h2>
      </div>
      <div className="w-96">
        <SideBar />
      </div>
    </div>
  );
};
