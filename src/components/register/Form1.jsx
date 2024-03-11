import { FaEye } from "react-icons/fa";

const Form1 = ({
  handleChange,
  isValidEmail,
  showPassword,
  handlePassword,
  error,
  formData,
}) => {
  return (
    <form className="mt-8 flex flex-col gap-4 max-w-[700px] mx-auto">
      <h2 className="text-[1.75rem] md:text-[2em] font-[400] mt-10 md:mt-[100px] text-center">
        Create an account
      </h2>
      <p className="text-center -mt-2">Lets get started with Aashiikii</p>
      <div>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formData?.name}
          placeholder="Name.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 `}
          required
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={formData?.email}
          placeholder="Email.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 ${
            isValidEmail ? "border-neutral-950/50" : "border-red-500"
          }`}
          required
        />
        {!isValidEmail && (
          <p className="text-red-500">Please enter a valid email address.</p>
        )}
      </div>

      <div className="relative">
        {/* <label htmlFor="password">Password</label> */}
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          onChange={handleChange}
          value={formData?.password}
          placeholder="Password.."
          className="w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70"
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
        <p className="text-red-500 bg-red-500/30 p-3 border-border-red-500 text-[.85rem]">
          All fields are required
        </p>
      )}
    </form>
  );
};

export default Form1;
