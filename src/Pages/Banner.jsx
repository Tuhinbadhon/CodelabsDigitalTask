import { CiStar } from "react-icons/ci";
import logo from "../assets/Rectangle 5.png";
import img1 from "../assets/img01.png";
import img2 from "../assets/img02.png";
import img3 from "../assets/img03.png";
import img4 from "../assets/img04.png";
import img5 from "../assets/img05.png";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" lg:mx-24 mx-5 lg:mt-12 mt-5">
      <div className="relative" data-aos="fade-up" data-aos-duration="1000">
        <img src={logo} alt="Banner" className="w-full h-auto" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0, 193, 157, 0)] to-[rgba(2, 0, 67, 0.47)]"></div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h2 className="font-semibold text-center md:mt-10 mt-5 text-xl md:text-5xl ">
            Comprehensive Care <br /> for Every Patient
          </h2>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
        className="md:grid md:grid-cols-5 grid-cols-1 items-end gap-5"
      >
        <div className="p-5 max-[450px]:mt-5 border rounded-3xl">
          <h2 className="font-semibold  text-4xl">90%</h2>
          <p className="mt-4">
            Patient satisfaction <br /> rate, reflecting our <br /> commitment.
          </p>
          <img className="max-[450px]:h-52 " src={img1} alt="" />
        </div>
        <div className="p-5  md:max-h-64 max-[450px]:mt-5  border rounded-3xl">
          <h2 className="font-semibold  text-4xl">500+</h2>
          <p className="">
            Board-certified <br /> doctors
          </p>
          <img className="ml-6 max-[450px]:h-52 " src={img2} alt="" />
        </div>
        <div className="p-5  md:max-h-60  max-[450px]:mt-5  border rounded-3xl">
          <h2 className=" flex gap-1 font-semibold  text-4xl">
            4.8
            <FaStar className="text-yellow-400" />
          </h2>
          <p className="">Over 20,000 Patient</p>
          <img className="mt-2 " src={img3} alt="" />
        </div>
        <div className="p-5  md:max-h-64  max-[450px]:mt-5 border rounded-3xl">
          <h2 className=" flex gap-1 font-semibold  text-4xl">$5000</h2>
          <p className="">
            Money spend <br /> for poor patient
          </p>
          <img className="ml-6 max-[450px]:h-52" src={img4} alt="" />
        </div>
        <div className="p-5 max-[450px]:mt-5 border rounded-3xl">
          <h2 className="font-semibold  text-4xl">50+</h2>
          <p className="mt-4">
            Free lession video <br /> for patient
          </p>
          <img className="max-[450px]:h-52" src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
