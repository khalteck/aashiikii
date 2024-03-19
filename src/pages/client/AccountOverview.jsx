import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import ProductCard from "../../components/common/ProductCard";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import Section1 from "../../components/categories/Section1";
import Section2 from "../../components/categories/Section2";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import Form from "../../components/accountOverview/Form";

const AccountOverview = () => {
  const [error, seterror] = useState(false);

  //=========================================to handle register data
  const [formData, setFormData] = useState({
    phone_number: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    first_name: "John",
    last_name: "Doe",
  });

  console.log("formData", formData);

  function handleChange(e) {
    // setSendError("");
    const { value, id } = e.target;
    let isValidEmail = true;

    if (id === "email") {
      // Define a regex pattern for email validation
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      isValidEmail = emailPattern.test(value);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    seterror(false);
  }

  async function handleSubmit() {
    if (
      formData?.phone_number &&
      formData?.address &&
      formData?.city &&
      formData?.state &&
      formData?.country &&
      formData?.postal_code
    ) {
      await handleRegisterSecondStep(formData);
    } else {
      seterror(true);
    }
  }
  return (
    <>
      <Header />
      <section className="w-full bg-neutral-50 px-5 md:px-[100px]">
        <div className="w-full h-[120px] bg-neutral-50 md:flex justify-center items-center hidden">
          <img
            alt="logo"
            src="/images/logo-no-bg.png"
            className="w-[150px] md:w-[200px] h-auto"
          />
        </div>
      </section>

      <section className="w-full bg-neutral-50 px-5 md:px-[100px]">
        <div className="w-full flex md:flex-row items-center md:items-start flex-col gap-5">
          <div className="w-full sm:max-w-[300px] md:w-[30%] md:min-w-[250px] md:max-w-full">
            <div className="w-fit h-fit relative">
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col gap-10 justify-center items-center text-white"></div> */}
              <img
                alt="logo"
                src="/images/dress0.png"
                className="w-full min-h-[500px] md:h-[700px] md:max-h-[800px] object-cover object-top"
              />
            </div>
          </div>

          <div className="w-full md:w-full h-full p-4 md:p-7 flex justify-center md:justify-start flex-wrap gap-5 border border-[#F1E4D8]">
            <h1 className="text-[1.2rem] font-bold">Account Overview</h1>
            {/* //form */}
            <Form formData={formData} handleChange={handleChange} />
          </div>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AccountOverview;
