import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import Header2 from "../../components/common/header/Header2";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartCard from "../../components/cart/CartCard";
import SummaryList from "../../components/cart/SummaryList";
import { FaLocationDot } from "react-icons/fa6";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import { useAppContext } from "../../contexts/AppContext";
import WorkInProgress from "../../components/common/WorkInProgress";

const Cart = () => {
  const { cartData } = useAppContext();

  const totalPriceArray = [];
  cartData?.map((item) => {
    const price = item?.price * item?.quantity;
    totalPriceArray?.push(price);
  });

  const tax = 300;

  const total = totalPriceArray?.reduce((acc, curr) => acc + curr, 0);
  const totalAfterTax = total + tax;

  // console.log("total", total);

  return (
    <>
      <Header2 />
      <section className="w-full min-h-screen bg-neutral-50 pt-[50px] pb-[80px] md:py-[80px] px-5 md:px-[100px]">
        <div className="w-full p-5 md:px-10 border-2 border-[#F1E4D8] flex gap-3 items-center justify-start font-bold">
          <h1 className="text-[1.25rem]">Cart</h1>
          <div className="w-5 h-5 bg-[#F1E4D8] flex justify-center items-center rounded-full text-[.85rem]">
            {cartData?.length}
          </div>
        </div>

        {cartData?.length === 0 && (
          <div className="w-full h-[200px] mt-[100px] border border-neutral-950/20 rounded-md flex justify-center items-center text-neutral-950/60">
            Your Cart is empty
          </div>
        )}

        {cartData?.length > 0 && (
          <div className="w-full flex md:flex-row flex-col gap-4 mt-10 md:mt-[80px]">
            <div className="w-full md:w-[60%] flex flex-col gap-4 md:gap-10">
              {cartData?.map((item, index) => {
                return <CartCard key={index} item={item} />;
              })}
            </div>
            <div className="w-full md:w-[40%] h-fit pb-6 mt-10 md:mt-0 border border-neutral-950/20 rounded-md">
              <div className="w-full border-b border-neutral-950/20 p-4">
                <h1 className="font-bold text-[1.5rem]">Order Summary</h1>

                <div className="w-full flex flex-col gap-5 mt-5">
                  {cartData?.map((item, index) => {
                    return <SummaryList key={index} item={item} />;
                  })}
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
                {/* amount  */}
                <div className="w-full flex justify-between gap-3 items-center">
                  <p className="text-neutral-950/60">Amount</p>
                  <p className="text-end text-neutral-950">
                    NGN {total?.toLocaleString()}
                  </p>
                </div>
                {/* tax  */}
                <div className="w-full flex justify-between gap-3 items-center">
                  <p className="text-neutral-950/60">Tax</p>
                  <p className="text-end text-neutral-950">
                    NGN {tax?.toLocaleString()}
                  </p>
                </div>
                {/* total  */}
                <div className="w-full flex justify-between gap-3 items-center font-bold">
                  <p className="">Total</p>
                  <p className="text-end text-neutral-950">
                    NGN {totalAfterTax?.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* <WorkInProgress /> */}

              <div className="px-4 pt-[80px]">
                <button className="w-full px-5 py-3 bg-neutral-950 text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <ScrollToTopButton />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Cart;
