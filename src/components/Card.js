import React from "react";
import { Link } from "react-router-dom";
import cardDetail from "../cardDetail";

const Card = () => {
  let data = cardDetail;
  return (
    <>
      {data.map((allData) => {
        return (
          <div className="max-w-96 mx-2 mt-10">
            <img src={allData.image} alt={allData.id} className="h-60" />
            <div className="bg-slate-50 p-5">
              <h2>{allData.title}</h2>
              <p>{allData.description.substring(0, 200)}...</p>
              <br />
              <Link
                to={`whychooseus/${allData.id}`}
                className="bg-slate-950 text-white p-3 hover:bg-orange-700 hover: cursor-pointer transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
