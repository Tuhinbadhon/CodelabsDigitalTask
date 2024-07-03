import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/Rectangle 24.png";
import img1 from "../assets/Rectangle 27-2.png";
import img2 from "../assets/Rectangle 27-1.png";
import img3 from "../assets/Rectangle 27.png";

const Services = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" lg:mx-24 mx-5 lg:mt-40 mt-5"
    >
      <div className="md:flex md:gap-20 ">
        <div className="max-w-[470px]">
          <p className="px-6 py-2 border rounded-3xl w-max">Who we are</p>
          <h2 className="mt-4 font-semibold text-4xl">
            We Help To Get <br /> Soultions
          </h2>
          <p className="mt-4">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>
          <p className="btn border-none mt-11 bg-yellow-400 text-black font-medium">
            Learn more <GoArrowUpRight />
          </p>
        </div>
        <div className="relative max-[450px]:mt-5 w-full h-auto lg:h-96">
          {" "}
          {/* Adjust height as needed */}
          <div className="lg:absolute inset-0 z-0">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover rounded-[30px]"
            />
          </div>
          <div className=" lg:relative max-[450px]:mt-5  md:mt-5 py-10 px-7 -left-16 -bottom-32 lg:transform lg:translate-y-1/2  rounded-[32px] text-white bg-[#343268] lg:max-w-[360px]">
            <h2 className="text-2xl">Our mission is simple</h2>
            <p className="text-[#FFFFFFCC] mt-2">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
      <div className=" md:bg-[#FFFFF5] md:p-10 rounded-[32px] lg:mt-48 mt-5">
        <div className="lg:flex  gap-14 ">
          <div className="max-w-[470px]">
            <p className="px-6 py-2 border rounded-3xl w-max">Service</p>
            <h2 className="mt-4 font-semibold text-4xl">
              Empowering Health, <br /> Enriching Lives
            </h2>
            <p className="mt-4">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
            <p className="btn border-none mt-11 bg-yellow-400 text-black font-medium">
              Appointment <GoArrowUpRight />
            </p>
          </div>
          <div className="lg:relative max-[450px]:mt-5 w-full h-auto lg:h-96">
            {" "}
            {/* Adjust height as needed */}
            <div className="lg:absolute inset-0 z-0">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className=" flex items-end lg:relative max-[450px]:mt-5 md:mt-5 py-5 px-5 left-6 -bottom-20 lg:transform lg:translate-y-1/2 bg-opacity-60 rounded-[32px] text-white bg-[#343268] lg:max-w-[320px]">
              <div>
                <h2 className="text-xl">Advanced Technology</h2>
                <p className="text-[#FFFFFFCC] mt-2">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision.
                </p>
              </div>
              <div className="p-4 rounded-full w-max bg-yellow-400">
                <GoArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:mt-10   gap-10 ">
          <div className="lg:relative w-full max-[450px]:mt-5 h-auto lg:h-96">
            {" "}
            {/* Adjust height as needed */}
            <div className="lg:absolute inset-0 z-0">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className=" flex items-end lg:relative max-[450px]:mt-5 md:mt-5 py-5 px-5 left-6 -bottom-20 lg:transform lg:translate-y-1/2 bg-opacity-60 rounded-[32px] text-white bg-[#343268] lg:max-w-[320px]">
              <div>
                <h2 className="text-xl">Online Doctor Meet</h2>
                <p className="text-[#FFFFFFCC] mt-2">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision.
                </p>
              </div>
              <div className="p-4 rounded-full w-max bg-yellow-400">
                <GoArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
          <div className="lg:relative max-[450px]:mt-5 w-full h-auto lg:h-96">
            {" "}
            {/* Adjust height as needed */}
            <div className="lg:absolute inset-0 z-0">
              <img
                src={img3}
                alt=""
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className=" flex items-end lg:relative max-[450px]:mt-5 md:mt-5 py-5 px-5 left-6 -bottom-20 lg:transform lg:translate-y-1/2 bg-opacity-60 rounded-[32px] text-white bg-[#343268] lg:max-w-[320px]">
              <div>
                <h2 className="text-xl">Consultancy your health</h2>
                <p className="text-[#FFFFFFCC] mt-2">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision.
                </p>
              </div>
              <div className="p-4 rounded-full w-max bg-yellow-400">
                <GoArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
