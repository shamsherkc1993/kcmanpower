import React from "react";
import { Link } from "react-router-dom";
import mainimage from "../assets/main.png";
import Card from "../components/Card";
import Slider from "react-slick";
import cardDetail from "../cardDetail";
import { WhyChooseUs } from "./WhyChooseUs";

export const Home = () => {
  let carouselList = cardDetail;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="bg-sky-700 flex flex-row py-10 px-20">
        <div className=" text-white max-w-4xl pr-10">
          <h2 className="text-3xl pb-5">
            Best Manpower Recruitment Agency in Japan - Quality Manpower Supply
          </h2>
          <p>
            Welcome to our KC Manpower Solution, the leading manpower
            recruitment agency in Tokyo! We are a leading manpower agency in
            Japan providing comprehensive recruitment solutions to businesses
            across various industries. As a top recruiting agency, we take pride
            in our ability to deliver qualified candidates who meet the unique
            needs of our clients. Our team of experts at our manpower company in
            Japan work tirelessly to provide efficient and effective recruitment
            services, ensuring that we match the right candidate to the right
            job. Our services include recruitment, training, and development,
            payroll, and outsourcing services. We understand the importance of
            finding the right talent for your organization, and our goal is to
            make the process as easy and hassle-free as possible.
          </p>
          <p>
            We are registered under Government license number, Contact us today
            to learn more about how our recruitment agency in Japan can help you
            find the right candidate for your organization.
          </p>
          <br />
          <Link
            to="blog"
            className="bg-slate-950 p-2 hover:bg-orange-700 transition-all"
          >
            Know More
          </Link>
        </div>
        <form className=" w-full max-w-xs bg-orange-700 p-10 rounded-l-3xl">
          <div className="">
            <input
              className="w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your NAME"
            />
            <input
              className="w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="">
            <input
              className="w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="Your Number"
            />
          </div>
          <div className="">
            <input
              className="w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Your Subject"
            />
          </div>
          <div className="">
            <input
              className="w-full py-12 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              id="number"
              type="text"
              placeholder="Message"
            />
          </div>
        </form>
      </div>

      <div className="py-10 px-20 bg-gradient-to-ts">
        <h2 className="text-3xl pb-10 text-orange-700 text-center">
          WHY WE ARE A RELIABLE MANPOWER RECRUITMENT AGENCY IN Japan?
        </h2>
        <div className="flex">
          <img src={mainimage} alt="homeimage" className="max-h-96" />
          <div className="flex flex-col px-20">
            <p>
              As a leading recruitment agency in japan, we at KC HR Consultant
              have been providing top-notch human resource solutions to various
              countries including usa, canada, Croatia, Romania, Albania and
              many others since 2001. Our reputation as the best manpower
              recruitment agency in japan is built on our unwavering commitment
              to building mutually beneficial relationships with our clients.
            </p>
            <br />
            <p>
              Over the years, we have successfully supplied high-quality
              manpower from japan to many reputed global companies. As a
              reliable manpower company in japan, we believe in the right people
              for the right job and continuously strive to provide
              high-potential candidates with the right caliber.
            </p>
            <br />
            <p>
              At KC Consultant, we take pride in our years of experience and
              expertise in satisfying the demand for manpower recruitment from
              Japan within the shortest possible time. We are committed to our
              mission of supplying a competitive workforce to the global market,
              and we assure 100% satisfaction throughout the hiring process. We
              believe in making the hiring process smooth, cost-effective,
              professional, and qualitative, making us the preferred choice
              among other recruiting agencies in japan.
            </p>
            <p>
              Choose KC HR Consultant, the best recruitment agency in japan, to
              get access to the best manpower from japan, and experience a
              hassle-free and efficient hiring process.
            </p>
          </div>
        </div>
      </div>

      {/* why choose us start */}
      <div className="bg-slate-200 py-10 px-20">
        <h2 className="text-3xl pb-10 text-orange-700 text-center">
          WHY CHOOSE US AS THE RELIABLE MANPOWER COMPANY IN Japan?
        </h2>
        <p className="text-center">
          We offer the comprehensive and effective human resource as per demand.
          Our process starts from picking up the best manpower in Japan,
          refining, orienting and supplying them followed by a well maintained
          followup in every step.
        </p>
        <div className="flex flex-wrap">
          <Card />
        </div>
      </div>
      {/* why choose us end */}

      {/* start latest blog */}
      <div className="bg-slate-200 py-10 px-20">
        <h2 className="text-3xl pb-10 text-orange-700 text-center">
          LATEST BLOG POSTS
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            {carouselList.map((carouselList) => {
              return (
                <div>
                  <img
                    src={carouselList.image}
                    alt={carouselList.id}
                    className="h-64 w-96"
                  />
                  <div className="bg-slate-50 p-5 w-96">
                    <h2>{carouselList.title}</h2>
                    <p>{carouselList.description.substring(0, 50)} ...</p>
                    <br />
                    <Link
                      to={`whychooseus/${carouselList.id}`}
                      className="bg-slate-950 text-white p-3 hover:bg-orange-700 hover: cursor-pointer transition-all"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* end latest blog */}

      {/* start contact us */}
      <div className="px-12 py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row">
        <h2 className="text-3xl text-white font-b text-center">
          Rest assured, we are your one-stop recruiting agency in Japan. Let's
          get connected.
        </h2>
        <Link
          to="contactus"
          className="text-white border-2 px-4 py-2 ml-8 rounded-full text-2xl hover:bg-orange-700 transition-all "
        >
          Contact Us
        </Link>
      </div>
      {/* end contact us */}
    </div>
  );
};
