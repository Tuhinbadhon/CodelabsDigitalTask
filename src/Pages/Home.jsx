import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";
import Services from "./Services";
import FAQ from "./FAQ";

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
      <FAQ />
    </div>
  );
};

export default Home;
