import { HiPlus } from "react-icons/hi";
import VariationCard from "./VariationCard";
import { useEffect, useState } from "react";
import { useAdminContext } from "../../../contexts/AdminContext";
import { FiSend } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { IoClose } from "react-icons/io5";

const VariationForm = ({ currentProduct }) => {
  const { handleAddVariation, loading3 } = useAdminContext();
  const [error, seterror] = useState(false);

  const [showForm, setShowForm] = useState(false);
  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  //=========================================to handle register data
  const [formData, setFormData] = useState({
    product: currentProduct?.id,
    color: "",
    size: "",
    price: "",
  });

  function clearForm() {
    setFormData({
      product: currentProduct?.id,
      color: "",
      size: "",
      price: "",
    });
  }

  //   console.log("formData", formData);

  function handleChange(e) {
    const { value, id } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    //   setIsValidEmail(isValidEmail);
    seterror(false);
  }

  async function handleSubmit() {
    try {
      if (formData?.size && formData?.color && formData?.price) {
        await handleAddVariation(formData);
        clearForm();
        toggleForm();
      } else {
        seterror(true);
      }
    } catch (err) {
      console.log("err", err);
    }
  }
  return (
    <div className="w-full flex flex-col gap-3">
      {!showForm && (
        <div className="flex gap-4 flex-wrap">
          <VariationCard />
          <VariationCard />
          <VariationCard />
          <div
            onClick={toggleForm}
            className="w-[160px] h-[100px] bg-slate-800/30 shadow-md rounded-lg p-3 border border-slate-800/20 cursor-pointer flex gap-1 justify-center items-center text-sm relative"
          >
            <>
              <p className="uppercase font-medium text-md">Add</p>
              <HiPlus size={"20px"} color="black" />
            </>
          </div>
        </div>
      )}
      {showForm && (
        <form className="w-full flex flex-col gap-3 cateslide">
          <div className="relative w-full">
            <div
              className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950`}
            >
              Color <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              id="color"
              onChange={handleChange}
              value={formData?.color}
              placeholder="Blue"
              className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50 `}
              required
            />
          </div>
          <div className="relative w-full">
            <div
              className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950`}
            >
              Size <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              id="size"
              onChange={handleChange}
              value={formData?.size}
              placeholder="XL"
              className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50 `}
              required
            />
          </div>
          <div className="relative w-full">
            <div
              className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950`}
            >
              Price <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              id="price"
              onChange={handleChange}
              value={formData?.price}
              placeholder="20000"
              className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50 `}
              required
            />
          </div>
          {error && (
            <p className="w-full text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
              All fields are required
            </p>
          )}
          <div className="flex justify-end gap-3 mt-3">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              disabled={loading3}
              className="w-fit px-5 py-2 text-white flex gap-3 items-center bg-slate-800/90 rounded-md whitespace-nowrap font-bold"
            >
              {loading3 ? (
                <>
                  <ClipLoader color={"#ffffff"} size={20} />
                  <p>Processing</p>
                </>
              ) : (
                <>
                  <FiSend size={"20px"} color="white" />
                  <p>Submit</p>
                </>
              )}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleForm();
                clearForm();
              }}
              disabled={loading3}
              className="w-fit px-5 py-2 text-white flex gap-3 items-center bg-red-500/90 rounded-md whitespace-nowrap font-bold"
            >
              <>
                <IoClose size={"30px"} color="white" />
                <p>Cancel</p>
              </>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VariationForm;
