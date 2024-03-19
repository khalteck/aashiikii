import { FaEye } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useAppContext } from "../../contexts/AppContext";

const Form = ({ handleChange, formData }) => {
  //   const { navigate, secondStepErrorSource } = useAppContext();
  return (
    <form className="mt-8 flex flex-col gap-4 w-full mx-auto">
      <div className="w-full flex gap-3">
        <div className="w-full relative">
          <div
            className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950 `}
          >
            First name
          </div>
          <input
            type="text"
            id="first_name"
            onChange={handleChange}
            value={formData?.first_name}
            placeholder="First name.."
            className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>

        <div className="w-full relative">
          <div
            className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950 `}
          >
            Last name
          </div>
          <input
            type="text"
            id="last_name"
            onChange={handleChange}
            value={formData?.last_name}
            placeholder="Last name.."
            className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>
      </div>
      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950 `}
        >
          Phone number
        </div>
        <input
          type="number"
          id="phone_number"
          onChange={handleChange}
          value={formData?.phone_number}
          placeholder="Phone number.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
          required
        />
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950 `}
        >
          Address
        </div>
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={formData?.address}
          placeholder="Delivery address.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50 `}
          required
        />
      </div>

      <div className="w-full flex gap-3">
        <div className="w-full relative">
          <div
            className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950 `}
          >
            City
          </div>
          <input
            type="text"
            id="city"
            onChange={handleChange}
            value={formData?.city}
            placeholder="City.."
            className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>

        <div className="w-full relative">
          <div
            className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950 `}
          >
            State
          </div>
          <input
            type="text"
            id="state"
            onChange={handleChange}
            value={formData?.state}
            placeholder="State.."
            className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>
      </div>

      {/* {error && (
        <p className="text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
          All fields are required
        </p>
      )}
      {secondStepError && secondStepError?.length > 0 && (
        <div className="flex flex-col gap-2">
          {secondStepError?.map((err, ind) => {
            return (
              <p
                key={ind}
                className="text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]"
              >
                {err[0]}
              </p>
            );
          })}
        </div>
      )} */}
    </form>
  );
};

export default Form;
