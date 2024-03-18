import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import { useAppContext } from "../../contexts/AppContext";
import Form2 from "../../components/register/Form2";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { navigate, secondStepError, loading1, handleRegisterSecondStep } =
    useAppContext();
  const [showPassword, setshowPassword] = useState(false);
  function handlePassword() {
    setshowPassword((prev) => !prev);
  }

  const [isValidEmail, setIsValidEmail] = useState(true);

  const [error, seterror] = useState(false);

  //=========================================to handle register data
  const [formData, setFormData] = useState({
    phone_number: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
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
    setIsValidEmail(isValidEmail);
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
      toast.success("Registered successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "bounce",
      });
    } else {
      seterror(true);
    }
  }

  return (
    <>
      <div className="w-full min-h-screen flex md:flex-row-reverse flex-col">
        <div
          className={`w-full h-[250px] md:h-screen bg-no-repeat bg-cover relative bg-reg2 bg-center`}
        >
          <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 bg-gradient-to-t from-black/90 to-transparent flex flex-col"></div>
        </div>
        <div className="w-full h-full bg-white p-5 md:p-14">
          <img
            onClick={() => navigate("/")}
            alt=""
            src="/images/logo.png"
            className="w-[130px] h-auto md:w-[200px] rounded-sm md:rounded-b-lg mx-auto md:mx-0 mt-5 md:mt-0 cursor-pointer"
          />

          <div className="pb-[100px] md:pb-0">
            <Form2
              handleChange={handleChange}
              isValidEmail={isValidEmail}
              showPassword={showPassword}
              handlePassword={handlePassword}
              error={error}
              formData={formData}
              secondStepError={secondStepError}
            />

            <p className="text-center mt-5">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>

            <div className="w-full flex justify-center mt-7 md:mt-12">
              <button
                disabled={loading1}
                onClick={() => {
                  handleSubmit();
                }}
                className="w-full h-fit p-4 bg-[#F1E4D8] flex gap-2 items-center justify-center"
              >
                {loading1 && <ClipLoader color={"#000000"} size={22} />}
                <p>{loading1 ? "Processing" : "Submit"}</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <ScrollToTopButton />
      <ScrollToTop />
    </>
  );
};

export default Login;
