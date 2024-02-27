import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import { IoIosSend } from "react-icons/io";
import Form from "../../components/contact/Form";
import WorkInProgress from "../../components/common/WorkInProgress";
import products from "../../data/product.json";
import { useParams } from "react-router-dom";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";

const Register = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-neutral-50 pb-[100px]">
        <div className="w-full h-[120px] bg-neutral-50 md:flex justify-center items-center hidden">
          <img
            alt="logo"
            src="/images/logo-no-bg.png"
            className="w-[150px] md:w-[200px] h-auto"
          />
        </div>

        <div className="w-full mt-10">
          {/* details */}
          <p className="mb-5 text-center">Sign Up Page</p>
          <WorkInProgress />
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Register;
