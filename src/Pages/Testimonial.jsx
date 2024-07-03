import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className=" lg:mx-24 mx-5 mt-10 ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container flex flex-col   mx-auto "
      >
        <p className="px-6 py-2 border rounded-3xl w-max">Testimonial</p>
        <h1 className="text-lg mb-10 lg:text-3xl font-bold mt-5">
          What they say about us
        </h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="card bg-base-100 h-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-semibold ">
                  Expertise and Compassion Combined
                </h2>
                <p className="text-xs">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
                <div className="mt-5 flex gap-2">
                  <img
                    src="https://i.ibb.co/0yqCgPh/kate.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 "
                  />
                  <div>
                    <p>
                      {" "}
                      <b>Sarah D</b>, IT Professional
                    </p>
                    <div className="flex gap-1">
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 h-full shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-semibold ">
                  Life-Saving Care, Life-Changing Experience
                </h2>
                <p className="text-xs">
                  My experience at [Healthcare Provider Name] was life-changing.
                  The prompt and accurate diagnosis, coupled with the advanced
                  treatments they provided, saved my life.
                </p>
                <div className="mt-5 flex gap-2">
                  <img
                    src="https://i.ibb.co/xjsyCLx/leo.webp"
                    alt=""
                    className="rounded-full w-10 h-10 "
                  />
                  <div>
                    <p>
                      <b>Michael R</b>, Business Executive
                    </p>
                    <div className="flex gap-1">
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-base-100  shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-semibold ">
                  A Partner in Health and Wellness
                </h2>
                <p className="text-xs">
                  As a busy professional, I appreciate the convenience and
                  quality of care I receive at [Healthcare Provider Name]. From
                  telemedicine consultations to routine check-ups, they've
                  become my trusted partner in health and
                </p>
                <div className="mt-5 flex gap-2">
                  <img
                    src="https://i.ibb.co/FKXPvRS/image11.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 "
                  />
                  <div>
                    <p>
                      <b>David S</b>, Lawyer
                    </p>
                    <div className="flex gap-1">
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-base-100 h-full  shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-semibold ">
                  A Partner in Health and Wellness
                </h2>
                <p className="text-xs">
                  As a busy professional, I appreciate the convenience and
                  quality of care I receive at [Healthcare Provider Name]. From
                  telemedicine consultations to routine check-ups, they've
                  become my trusted partner in health and
                </p>
                <div className="mt-5 flex gap-2">
                  <img
                    src="https://i.ibb.co/FKXPvRS/image11.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 "
                  />
                  <div>
                    <p>
                      <b>David S</b>, Lawyer
                    </p>
                    <div className="flex gap-1">
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                      <FaStar className="text-yellow-400" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
