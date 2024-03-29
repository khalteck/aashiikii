import { FaEye } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";

const Form2 = ({ handleChange, formData, secondStepError, error }) => {
  const { navigate, secondStepErrorSource } = useAppContext();

  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    async function fetchCountryCodes() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch country codes");
        }
        const data = await response.json();

        const codes = data
          ?.map((x) => {
            return {
              code: x?.idd?.root + x?.idd?.suffixes?.[0],
              country: x?.name?.common,
              flag: x?.flag,
            };
          })
          ?.filter((item) => !isNaN(item.code))
          ?.sort((a, b) => {
            return a.country.localeCompare(b.country);
          });
        setCountryCodes(codes); // Assuming data is an array of country codes
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    }

    fetchCountryCodes();
  }, []);

  return (
    <form className="mt-8 flex flex-col gap-4 max-w-[700px] mx-auto">
      <div
        onClick={() => navigate(-1)}
        className="flex gap-2 bg-[#F1E4D8] px-3 py-2 w-fit cursor-pointer"
      >
        <MdArrowBack size="25px" />
        <p>Back</p>
      </div>
      <h2 className="text-[1.75rem] md:text-[2em] font-[400] mt-10 md:mt-[50px] text-center">
        Fill in additional details
      </h2>
      <div className="w-full relative flex gap-3">
        <select
          id="country_code"
          className="w-[100px] h-[58px] px-3 py-4 mt-2 border bg-[#F1E4D8]/50 outline-none placeholder:text-neutral-950/30 border-neutral-950/50"
          onChange={handleChange}
          value={formData?.country_code}
        >
          <option value="" hidden>
            +234
          </option>
          {countryCodes?.map((code, index) => (
            <option key={index} value={code?.code} className="text-[.85rem]">
              {code?.code} - {code?.country}
            </option>
          ))}
        </select>

        <div className="relative w-full">
          <div
            className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
              secondStepErrorSource?.includes("phone_number")
                ? "text-red-500"
                : "text-neutral-950"
            }`}
          >
            Phone number
          </div>
          <input
            type="number"
            id="phone_number"
            onChange={handleChange}
            value={formData?.phone_number}
            placeholder="Phone number.."
            className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
              secondStepErrorSource?.includes("phone_number")
                ? "border-red-500"
                : "border-neutral-950/50"
            } `}
            required
          />
        </div>
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            secondStepErrorSource?.includes("address")
              ? "text-red-500"
              : "text-neutral-950"
          }`}
        >
          Address
        </div>
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={formData?.address}
          placeholder="Delivery address.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
            secondStepErrorSource?.includes("address")
              ? "border-red-500"
              : "border-neutral-950/50"
          }`}
          required
        />
      </div>

      <div className="w-full flex gap-3">
        <div className="w-full relative">
          <div
            className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
              secondStepErrorSource?.includes("city")
                ? "text-red-500"
                : "text-neutral-950"
            }`}
          >
            City
          </div>
          <input
            type="text"
            id="city"
            onChange={handleChange}
            value={formData?.city}
            placeholder="City.."
            className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
              secondStepErrorSource?.includes("city")
                ? "border-red-500"
                : "border-neutral-950/50"
            } `}
            required
          />
        </div>

        <div className="w-full relative">
          <div
            className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
              secondStepErrorSource?.includes("state")
                ? "text-red-500"
                : "text-neutral-950"
            }`}
          >
            State
          </div>
          <input
            type="text"
            id="state"
            onChange={handleChange}
            value={formData?.state}
            placeholder="State.."
            className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
              secondStepErrorSource?.includes("state")
                ? "border-red-500"
                : "border-neutral-950/50"
            } `}
            required
          />
        </div>
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            secondStepErrorSource?.includes("country")
              ? "text-red-500"
              : "text-neutral-950"
          }`}
        >
          Country
        </div>
        <input
          type="text"
          id="country"
          onChange={handleChange}
          value={formData?.country}
          placeholder="Country.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
            secondStepErrorSource?.includes("country")
              ? "border-red-500"
              : "border-neutral-950/50"
          } `}
          required
        />
      </div>

      <div className="relative">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 ${
            secondStepErrorSource?.includes("postal_code")
              ? "text-red-500"
              : "text-neutral-950"
          }`}
        >
          Postal code
        </div>
        <input
          type="text"
          id="postal_code"
          onChange={handleChange}
          value={formData?.postal_code}
          placeholder="Postal code.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 ${
            secondStepErrorSource?.includes("postal_code")
              ? "border-red-500"
              : "border-neutral-950/50"
          } `}
          required
        />
      </div>

      {error && (
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
      )}
    </form>
  );
};

export default Form2;
