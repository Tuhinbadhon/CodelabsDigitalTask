import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Healthcare | Home</title>
        </Helmet>
      </HelmetProvider>
      <Banner />
    </div>
  );
};

export default Home;
