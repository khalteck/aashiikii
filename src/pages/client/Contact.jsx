import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import { IoIosSend } from "react-icons/io";
import Form from "../../components/contact/Form";

const Contact = () => {
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

        <div className="w-full max-w-[1500px] mx-auto bg-[#F1E4D8] pt-[70px] md:p-[80px]">
          <div className="w-full flex md:flex-row flex-col-reverse">
            <Form />
            <img
              alt="contact"
              src="/images/Top2.png"
              className="w-full md:w-1/2 h-[400px] md:h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
