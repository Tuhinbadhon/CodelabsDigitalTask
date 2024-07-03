import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";
import Services from "./Services";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Healthcare | Home</title>
        </Helmet>
      </HelmetProvider>
      <Banner />
      <Services />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
