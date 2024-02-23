import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Loader from "../../components/common/Loader";
import ProductCard from "../../components/common/ProductCard";
import Section1 from "../../components/home/Section1";
import Section2 from "../../components/home/Section2";
import Section3 from "../../components/home/section3";
import Divider from "../../components/home/Divider";
import Section4 from "../../components/home/Section4";
import { FaStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import ReviewCard from "../../components/home/ReviewCard";
import Section5 from "../../components/home/Section5";
import { AiOutlineSearch } from "react-icons/ai";
import Section6 from "../../components/home/Section6";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";

const Homepage = () => {
  //   const [hoverProduct, setHoverProduct] = useState(null);
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-neutral-50">
        <Section1 />

        <div className="w-full h-[150px] flex justify-center items-center">
          <h1 className="font-bold text-[1.5rem] md:text-[1.75rem] text-center">
            POPULAR CATEGORIES
          </h1>
        </div>

        <Section2 />

        <Divider />

        <Section3 />

        <Divider />

        <Section4 />

        <Section5 />

        <Section6 />

        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
};

export default Homepage;
