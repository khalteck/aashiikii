import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import Header2 from "../../components/common/header/Header2";
import { RiDeleteBin6Line } from "react-icons/ri";
import WishlistCard from "../../components/wishlist/WishlistCard";

const Cart = () => {
  return (
    <>
      <Header2 />
      <section className="w-full min-h-screen bg-neutral-50 pt-[50px] pb-[80px] md:py-[80px] px-5 md:px-[100px]">
        <div className="w-full p-5 md:px-10 border-2 border-[#F1E4D8] flex gap-3 items-center justify-start font-bold">
          <h1 className="text-[1.25rem]">Cart</h1>
          <div className="w-5 h-5 bg-[#F1E4D8] flex justify-center items-center rounded-full text-[.85rem]">
            5
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col gap-4 mt-10 md:mt-[80px]">
          <div className="w-full md:w-[60%] flex flex-col gap-4 md:gap-10">
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
          </div>
          <div className="w-full md:w-[40%] h-[400px] border border-neutral-950/30 rounded-md">
            <div className="w-full h-[100px] border-b border-neutral-950/30 p-4">
              <h1>Order Summary</h1>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Cart;
