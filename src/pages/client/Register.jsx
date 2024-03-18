import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import { useAppContext } from "../../contexts/AppContext";
import Form1 from "../../components/register/Form1";
import Form2 from "../../components/register/Form2";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const { navigate, handleRegisterFirstStep, loading1, firstStepError } =
    useAppContext();
  const [showPassword, setshowPassword] = useState(false);
  function handlePassword() {
    setshowPassword((prev) => !prev);
  }

  const [isValidEmail, setIsValidEmail] = useState(true);

  const [error, seterror] = useState(false);

  //=========================================to handle register data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  // console.log("formData", formData);

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

  async function handleFirstStep() {
    if (
      formData?.email &&
      isValidEmail &&
      formData?.first_name &&
      formData?.last_name &&
      formData?.password
    ) {
      await handleRegisterFirstStep(formData);
    } else {
      seterror(true);
    }
  }

  return (
    <>
      <div className="w-full min-h-screen flex md:flex-row-reverse flex-col">
        <div
          className={`w-full h-[250px] md:h-screen bg-no-repeat bg-cover relative bg-login`}
        >
          <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 bg-gradient-to-t from-black/90 to-transparent flex flex-col"></div>
        </div>
        <div className="w-full h-full md:h-screen bg-neutral-50 p-5 md:p-14 md:overflow-y-auto">
          <img
            onClick={() => navigate("/")}
            alt=""
            src="/images/logo.png"
            className="w-[130px] h-auto md:w-[200px] rounded-sm md:rounded-b-lg mx-auto md:mx-0 mt-5 md:mt-0 cursor-pointer"
          />

          <div className="pb-[100px] md:pb-0">
            <Form1
              handleChange={handleChange}
              isValidEmail={isValidEmail}
              showPassword={showPassword}
              handlePassword={handlePassword}
              error={error}
              formData={formData}
              firstStepError={firstStepError}
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
                  handleFirstStep();
                }}
                className="w-full h-fit p-4 bg-[#F1E4D8] flex gap-2 items-center justify-center"
              >
                {loading1 && <ClipLoader color={"#000000"} size={22} />}
                <p>{loading1 ? "Processing" : "Continue"}</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
      <ScrollToTop />
    </>
  );
};

export default Register;
