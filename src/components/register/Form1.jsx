import { FaEye } from "react-icons/fa";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useAppContext } from "../../contexts/AppContext";

const Form1 = ({
  handleChange,
  isValidEmail,
  showPassword,
  handlePassword,
  error,
  formData,
  firstStepError,
}) => {
  const { firstStepErrorSource } = useAppContext();
  // console.log("firstStepErrorSource", firstStepErrorSource);
  return (
    <form className="mt-8 flex flex-col gap-4 max-w-[700px] mx-auto">
      <h2 className="text-[1.75rem] md:text-[2em] font-[400] mt-10 text-center">
        Create an account
      </h2>
      <p className="text-center -mt-2">Lets get started with Aashiikii</p>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            firstStepErrorSource?.includes("first_name")
              ? "text-red-500"
              : "text-neutral-950"
          }`}
        >
          First name
        </div>
        <input
          type="text"
          id="first_name"
          onChange={handleChange}
          value={formData?.first_name}
          placeholder="First name.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30  ${
            firstStepErrorSource?.includes("first_name")
              ? "border-red-500"
              : "border-neutral-950/50"
          }`}
          required
        />
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            firstStepErrorSource?.includes("last_name")
              ? "text-red-500"
              : "text-neutral-950"
          }`}
        >
          Last name
        </div>
        <input
          type="text"
          id="last_name"
          onChange={handleChange}
          value={formData?.last_name}
          placeholder="Last name.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
            firstStepErrorSource?.includes("last_name")
              ? "border-red-500"
              : "border-neutral-950/50"
          } `}
          required
        />
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            firstStepErrorSource?.includes("username")
              ? "text-red-500"
              : "text-neutral-950"
          }`}
        >
          Username
        </div>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={formData?.username}
          placeholder="Username.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
            firstStepErrorSource?.includes("username")
              ? "border-red-500"
              : "border-neutral-950/50"
          }`}
          required
        />
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            firstStepErrorSource?.includes("email")
              ? "text-red-500"
              : "text-neutral-950"
          }`}
        >
          Email
        </div>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={formData?.email}
          placeholder="Email.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
            isValidEmail ? "border-neutral-950/50" : "border-red-500"
          } ${
            firstStepErrorSource?.includes("email")
              ? "border-red-500"
              : "border-neutral-950/50"
          }`}
          required
        />
        {!isValidEmail && (
          <p className="text-red-500">Please enter a valid email address.</p>
        )}
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            firstStepErrorSource?.includes("password")
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
          value={formData?.password}
          placeholder="Password.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/30  ${
            firstStepErrorSource?.includes("password")
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

      {firstStepError && (
        <div className="flex flex-col gap-2">
          {firstStepError?.map((err, ind) => {
            return (
              <p
                key={ind}
                className="text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]"
              >
                {capitalizeFirstLetter(err[0])}
              </p>
            );
          })}
        </div>
      )}
    </form>
  );
};

export default Form1;
