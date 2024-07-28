import React from "react";
import { useParams } from "react-router-dom";
import cardDetail from "../cardDetail";

export const WhyChooseUs = () => {
  let whyChooseUsPagesDetail = cardDetail;
  const { id } = useParams();
  console.log(id);

  return id === id ? (
    <div className="bg-slate-200 flex flex-row">
      {whyChooseUsPagesDetail.map((detail) => {
        // return id === detail.id ? <p>succs</p> : <p>no</p>;
        return (
          <div>
            <br />
            <h2 className="bg-orange-700 p-5 mx-24 mb-5 text-white font-bold text-3xl">
              {detail.title}
            </h2>
            <div className="mx-24 pb-5">
              {/* <img src={recProcImg} alt={recProcImg} className="" /> */}
              <br />
              <div className="bg-slate-50 p-10">
                <p>{detail.description}</p>
                <br />
              </div>
            </div>
          </div>
        );
      })}

      <div className="w-96">{/* <SideBar /> */}</div>
    </div>
  ) : (
    <p>no</p>
  );
};
