import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import { IoIosSend } from "react-icons/io";
import Form from "../../components/contact/Form";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import { useAppContext } from "../../contexts/AppContext";
import { IoClose } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Contact = () => {
  const { setContactSuccess, contactSuccess } = useAppContext();
  function handleClose() {
    setContactSuccess(false);
  }
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

      {contactSuccess && (
        <div
          onClick={handleClose}
          className="w-full h-screen bg-neutral-800/80 fixed top-0 left-0 py-[100px] px-5 z-[100] blurry bgslide"
        >
          <div className="w-[50px] h-[50px] p-3 flex items-center justify-center bg-neutral-50 cursor-pointer absolute top-5 right-5 md:right-[50%] md:translate-x-[50%]">
            <IoClose color="black" size="20px" />
          </div>
          <div className="bg-neutral-50 w-full sm:w-[550px] h-fit mx-auto overflow-y-auto relative dropslide p-5">
            <div className="flex gap-3 items-center justify-center">
              <h2 className="font-bold text-center text-lg">
                Message sent successfully!
              </h2>
              <div>
                <AiOutlineCheckCircle color="green" size="30px" />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img
                alt=""
                src="/images/contact.png"
                className="w-full sm:w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      )}

      <ScrollToTopButton />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
