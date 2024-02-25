import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import Header2 from "../../components/common/header/Header2";
import { RiDeleteBin6Line } from "react-icons/ri";
import WishlistCard from "../../components/wishlist/WishlistCard";

const Wishlist = () => {
  return (
    <>
      <Header2 />
      <section className="w-full min-h-screen bg-neutral-50 pt-[50px] pb-[80px] md:py-[80px] px-5 md:px-[100px]">
        <div className="w-full md:w-[400px] p-5 border-2 border-[#F1E4D8] flex gap-3 items-center justify-center font-bold">
          <h1 className="text-[1.25rem]">Wishlist</h1>
          <div className="w-5 h-5 bg-[#F1E4D8] flex justify-center items-center rounded-full text-[.85rem]">
            5
          </div>
        </div>

        <div className="w-full max-w-[1200px] flex flex-col gap-4 md:gap-10 mt-10 md:mt-[80px]">
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Wishlist;
