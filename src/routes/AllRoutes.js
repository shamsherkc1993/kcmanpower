// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {
  Blog,
  Home,
  AboutUs,
  ClientList,
  ContactUs,
  AboutNepal,
  Faq,
  RecruitmentForEurope,
  RecruitmentProcedure,
  PageNotFound,
  WhyChooseUs,
} from "../pages/index";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="aboutnepal" element={<AboutNepal />} />
        <Route path="clientlist" element={<ClientList />} />
        <Route path="faq" element={<Faq />} />
        <Route path="recruitmentforeurope" element={<RecruitmentForEurope />} />
        <Route path="recruitmentprocedure" element={<RecruitmentProcedure />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="/whychooseus/:id" element={<WhyChooseUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
