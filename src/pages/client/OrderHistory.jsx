import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import ProductCard from "../../components/common/ProductCard";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import Section1 from "../../components/categories/Section1";
import Section2 from "../../components/categories/Section2";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";

const OrderHistory = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-neutral-50 px-5 md:px-[100px]">
        <div className="w-full h-[120px] bg-neutral-50 md:flex justify-center items-center hidden">
          <img
            alt="logo"
            src="/images/logo-no-bg.png"
            className="w-[150px] md:w-[200px] h-auto"
          />
        </div>
        <div className="w-full p-5 md:px-10 border-2 border-[#F1E4D8] flex gap-3 items-center justify-start font-bold">
          <h1 className="text-[1.25rem]">My Orders</h1>
        </div>
        <div className="w-full h-[200px] mt-[100px] border border-neutral-950/20 rounded-md flex justify-center items-center text-neutral-950/60">
          You haven't placed any orders yet
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default OrderHistory;
