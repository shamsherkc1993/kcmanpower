import React from "react";
import SideBar from "../components/SideBar";
// import recProcImg from "../assets/procedureRec.jpg";

export const RecruitmentProcedure = () => {
  return (
    <div className="bg-slate-200 flex flex-row">
      <div className="">
        <br />
        <h2 className="bg-orange-700 p-5 mx-24 mb-5 text-white font-bold text-3xl">
          Recruitment procedure
        </h2>
        <div className="mx-24 pb-5">
          {/* <img src={recProcImg} alt={recProcImg} className="" /> */}
          <br />
          <div className="bg-slate-50 p-10">
            <p>
              Our Organization works with the dream that commitment within the
              work and services we offer to our appreciated clients and
              candidates. Landmark is dedicated to supply consistent and most
              trusty accomplishment service to the company determining itself as
              a trusty Recruiting agency in Nepal. Likewise, we have a tendency
              to guarantee reliable performance within the services we offer to
              our valuable purchasers and Candidates.
            </p>
            <br />

            <p>
              We have been pleasing the requirement of Human resource in Saudi
              Arabia, U.A.E, Qatar, Kuwait Israel, Bahrain, Singapore and much
              other Government authorized countries from 2008. Our customers are
              extremely pleased with our expert services. It is matter of
              tribute to be recognized as the flourishing Manpower agencies in
              Nepal.
            </p>
          </div>
        </div>
      </div>
      <div className="w-96">
        <SideBar />
      </div>
    </div>
  );
};
