import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import Header2 from "../../components/common/header/Header2";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartCard from "../../components/cart/CartCard";
import SummaryList from "../../components/cart/SummaryList";
import { FaLocationDot } from "react-icons/fa6";

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
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div className="w-full md:w-[40%] h-fit pb-6 mt-10 md:mt-0 border border-neutral-950/20 rounded-md">
            <div className="w-full border-b border-neutral-950/20 p-4">
              <h1 className="font-bold text-[1.5rem]">Order Summary</h1>

              <div className="w-full flex flex-col gap-2 mt-5">
                <SummaryList />
                <SummaryList />
                <SummaryList />
              </div>
            </div>

            <div className="border-b border-neutral-950/20 p-4 flex gap-3 items-center">
              <FaLocationDot size="20px" color="#9ca3af" />
              <p className="text-neutral-950/60">
                Deliver to{" "}
                <span className="text-neutral-950 font-bold">
                  Yaba park Lagos
                </span>
              </p>
            </div>

            <div className="w-full border-b border-neutral-950/20 px-4 py-7 flex flex-col gap-2">
              {/* amount */}
              <div className="w-full flex justify-between gap-3 items-center">
                <p className="text-neutral-950/60">Amount</p>
                <p className="text-end text-neutral-950">NGN 30,000</p>
              </div>
              {/* tax */}
              <div className="w-full flex justify-between gap-3 items-center">
                <p className="text-neutral-950/60">Tax</p>
                <p className="text-end text-neutral-950">NGN 300</p>
              </div>
              {/* total */}
              <div className="w-full flex justify-between gap-3 items-center font-bold">
                <p className="">Total</p>
                <p className="text-end text-neutral-950">NGN 30,300</p>
              </div>
            </div>

            <div className="px-4 pt-[80px]">
              <button className="w-full px-5 py-3 bg-neutral-950 text-white">
                Checkout
              </button>
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
