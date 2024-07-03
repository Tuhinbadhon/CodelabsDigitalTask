import logo from "../assets/Rectangle 5.png";
const Banner = () => {
  return (
    <div className="relative lg:mx-24 mx-5 lg:mt-12 mt-5">
      <img src={logo} alt="Banner" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[rgba(0, 193, 157, 0)] to-[rgba(2, 0, 67, 0.47)]"></div>
    </div>
  );
};

export default Banner;
