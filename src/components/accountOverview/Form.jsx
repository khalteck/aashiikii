import { FaEye } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { IoIosSend } from "react-icons/io";

const Form = ({ handleChange, formData, error, handleSubmit }) => {
  const { navigate, secondStepErrorSource, secondStepError, loading1 } =
    useAppContext();

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
    <form className="mt-8 flex flex-col gap-6 md:gap-10 w-full mx-auto">
      <div className="w-full flex md:flex-row flex-col gap-6">
        <div className="w-full relative">
          <div
            className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
          >
            First Name
          </div>
          <input
            type="text"
            id="first_name"
            onChange={handleChange}
            value={formData?.first_name}
            placeholder="First name.."
            className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>

        <div className="w-full relative">
          <div
            className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
          >
            Last Name
          </div>
          <input
            type="text"
            id="last_name"
            onChange={handleChange}
            value={formData?.last_name}
            placeholder="Last name.."
            className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-6">
        <div className="w-full relative flex gap-3">
          <div className="w-fit relative">
            <div
              className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-2 text-neutral-950 whitespace-nowrap `}
            >
              Country code
            </div>
            <select
              id="country_code"
              className="w-[100px] h-[58px] px-3 py-4 border bg-white outline-none placeholder:text-neutral-950/30 border-neutral-950/50"
              onChange={handleChange}
              value={formData?.country_code}
            >
              <option value="" hidden>
                {formData?.country_code || "Select"}
              </option>
              {countryCodes?.map((code, index) => (
                <option
                  key={index}
                  value={code?.code}
                  className="text-[.85rem]"
                >
                  {code?.code} - {code?.country}
                </option>
              ))}
            </select>
          </div>
          {/* <input
            type="text"
            id="country_code"
            className="w-[100px] h-full px-3 py-4 border bg-[#F1E4D8]/50 outline-none placeholder:text-neutral-950/30 border-neutral-950/50"
            placeholder="+234"
            onChange={handleChange}
            value={formData?.country_code}
          /> */}
          <div className="relative w-full">
            <div
              className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
            >
              Phone Number
            </div>
            <input
              type="text"
              id="phone_number"
              onChange={handleChange}
              value={formData?.phone_number}
              placeholder="Phone number.."
              className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
              required
            />
          </div>
        </div>

        <div className="w-full relative">
          <div
            className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
          >
            Country
          </div>
          <input
            type="text"
            id="country"
            onChange={handleChange}
            value={formData?.country}
            placeholder="Country.."
            className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>
      </div>
      <div className="relative">
        <div
          className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
        >
          Delivery Address
        </div>
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={formData?.address}
          placeholder="Delivery address.."
          className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
          required
        />
      </div>

      <div className="relative">
        <div
          className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
        >
          Postal Code
        </div>
        <input
          type="number"
          id="postal_code"
          onChange={handleChange}
          value={formData?.postal_code}
          placeholder="Postal Code.."
          className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
          required
        />
      </div>

      <div className="w-full flex md:flex-row flex-col gap-6">
        <div className="w-full relative">
          <div
            className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
          >
            City
          </div>
          <input
            type="text"
            id="city"
            onChange={handleChange}
            value={formData?.city}
            placeholder="City.."
            className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>

        <div className="w-full relative">
          <div
            className={`text-[.7em] px-1 absolute -top-2 bg-neutral-50 left-5 text-neutral-950 `}
          >
            State
          </div>
          <input
            type="text"
            id="state"
            onChange={handleChange}
            value={formData?.state}
            placeholder="State.."
            className={`w-full px-3 py-4 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50  `}
            required
          />
        </div>
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

      <div className="w-full flex md:justify-end justify-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          disabled={loading1}
          className="px-12 py-3 font-bold bg-neutral-950 text-white uppercase flex gap-3 items-center justify-center rounded-md"
        >
          {loading1 ? (
            <>
              <p>Updating</p>
              <ClipLoader color={"#ffffff"} size={20} />
            </>
          ) : (
            <>
              <p>Update</p>
              <IoIosSend size="25px" color="white" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
