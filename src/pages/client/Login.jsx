import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import { FaEye } from "react-icons/fa";
import { useAppContext } from "../../contexts/AppContext";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const { navigate, loginError, loginErrorSource, loginUser, loading1 } =
    useAppContext();
  const [showPassword, setshowPassword] = useState(false);
  function handlePassword() {
    setshowPassword((prev) => !prev);
  }

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [error, seterror] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
  }

  async function handleSubmit() {
    if (formData?.email && formData?.password) {
      await loginUser(formData);
    } else {
      seterror(true);
    }
  }
  return (
    <>
      <div className="w-full min-h-screen flex md:flex-row-reverse flex-col">
        <div className="w-full h-[250px] md:h-screen bg-login bg-no-repeat bg-cover relative">
          <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 bg-gradient-to-t from-black/90 to-transparent flex flex-col"></div>
        </div>
        <div className="w-full h-full min-h-screen bg-neutral-50 p-5 md:p-14">
          <img
            onClick={() => navigate("/")}
            alt=""
            src="/images/logo.png"
            className="w-[130px] h-auto md:w-[200px] rounded-sm md:rounded-b-lg mx-auto md:mx-0 mt-5 md:mt-0"
          />
          <h2 className="text-[1.75rem] md:text-[2em] font-[400] mt-10 md:mt-[100px] text-center">
            Login to your account
          </h2>
          <p className="text-center">Lets get started with Aashiikii</p>

          <form className="mt-8 flex flex-col gap-4 max-w-[700px] mx-auto">
            <div className="relative">
              <div
                className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
                  loginErrorSource?.includes("email")
                    ? "text-red-500"
                    : "text-neutral-950"
                }`}
              >
                Email
              </div>{" "}
              <input
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="Email.."
                className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
                  isValidEmail ? "border-neutral-950/50" : "border-red-500"
                } ${
                  loginErrorSource?.includes("email")
                    ? "border-red-500"
                    : "border-neutral-950/50"
                }`}
                required
              />
              {!isValidEmail && (
                <p className="text-red-500">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="relative">
              <div
                className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
                  loginErrorSource?.includes("password")
                    ? "text-red-500"
                    : "text-neutral-950"
                }`}
              >
                Password
              </div>{" "}
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleChange}
                placeholder="Password.."
                className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/30 ${
                  loginErrorSource?.includes("password")
                    ? "border-red-500"
                    : "border-neutral-950/50"
                }`}
                required
              />
              <div
                onClick={handlePassword}
                className="absolute top-[50%] right-4 translate-y-[-40%] cursor-pointer"
              >
                <FaEye size="25px" />
              </div>
            </div>

            {error && (
              <p className="text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
                All fields are required
              </p>
            )}

            {loginError && (
              <div className="text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
                {loginError}
              </div>
            )}

            <p className="text-center">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="cursor-pointer hover:underline"
              >
                Create account
              </span>
            </p>

            <div className="w-full flex justify-center mt-7 md:mt-12">
              {/* <PaystackButton /> */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="w-full h-fit p-4 bg-[#F1E4D8] flex gap-2 items-center justify-center"
              >
                {loading1 && <ClipLoader color={"#000000"} size={22} />}
                <p>{loading1 ? "Processing" : "Login"}</p>
              </button>
            </div>
          </form>
        </div>
      </div>

      <ScrollToTopButton />
      <ScrollToTop />
    </>
  );
};

export default Login;
