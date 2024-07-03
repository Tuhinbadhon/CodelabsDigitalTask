import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";
import GoToTop from "../../Components/TopArrow";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <GoToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
