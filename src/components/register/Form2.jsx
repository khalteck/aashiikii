import { FaEye } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

const Form2 = ({
  handleChange,
  isValidEmail,
  showPassword,
  handlePassword,
  setStep,
  formData,
}) => {
  return (
    <form className="mt-8 flex flex-col gap-4 max-w-[700px] mx-auto">
      <div
        onClick={() => setStep(1)}
        className="flex gap-2 bg-[#F1E4D8] px-3 py-2 w-fit cursor-pointer"
      >
        <MdArrowBack size="25px" />
        <p>Back</p>
      </div>
      <h2 className="text-[1.75rem] md:text-[2em] font-[400] mt-10 md:mt-[50px] text-center">
        Fill in additional details
      </h2>
      <div>
        <input
          type="number"
          id="phone_number"
          onChange={handleChange}
          value={formData?.phone_number}
          placeholder="Phone number.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 `}
          required
        />
      </div>

      <div>
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={formData?.address}
          placeholder="Delivery address.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 `}
          required
        />
      </div>

      <div className="w-full flex gap-3">
        <input
          type="text"
          id="city"
          onChange={handleChange}
          value={formData?.city}
          placeholder="City.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 `}
          required
        />
        <input
          type="text"
          id="state"
          onChange={handleChange}
          value={formData?.state}
          placeholder="State.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 `}
          required
        />
      </div>

      <div>
        <input
          type="text"
          id="country"
          onChange={handleChange}
          value={formData?.country}
          placeholder="Country.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 `}
          required
        />
      </div>

      <div>
        <input
          type="text"
          id="postal_code"
          onChange={handleChange}
          value={formData?.postal_code}
          placeholder="Postal code.."
          className={`w-full px-3 py-4 border border-neutral-950/50 mt-2 outline-none placeholder:text-neutral-950/70 `}
          required
        />
      </div>
    </form>
  );
};

export default Form2;
