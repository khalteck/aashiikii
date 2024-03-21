import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useAdminContext } from "../../../contexts/AdminContext";
import { ClipLoader } from "react-spinners";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const SubCategoryForm = ({ setShowSubForm, selectedCategory }) => {
  const { loading1, handleAddSUbCategory, addSubCategoryError } =
    useAdminContext();
  const [error, seterror] = useState(false);

  //=========================================to handle register data
  const [formData, setFormData] = useState({
    category: selectedCategory?.id,
    name: "",
  });

  //   console.log("formData", formData);

  function handleChange(e) {
    const { value, id } = e.target;
    const newValue = value?.replace(/[^a-zA-Z0-9 -]/g, "");

    setFormData((prev) => {
      return {
        ...prev,
        [id]: capitalizeFirstLetter(newValue),
      };
    });
    //   setIsValidEmail(isValidEmail);
    seterror(false);
  }

  async function handleSubmit() {
    if (formData?.name) {
      const data = { ...formData, name: formData?.name?.trim() };
      await handleAddSUbCategory(data);
    } else {
      seterror(true);
    }
  }
  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-end gap-4"
    >
      <div className="relative w-full">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950`}
        >
          Name
        </div>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formData?.name}
          placeholder="Sub-category name.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50 `}
          required
        />
      </div>

      {error && (
        <p className="w-full text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
          The name field is required
        </p>
      )}

      {addSubCategoryError && (
        <p className="w-full text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
          {addSubCategoryError?.name?.[0]}
        </p>
      )}

      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        disabled={loading1}
        className="w-fit px-8 py-3 text-white flex gap-3 items-center bg-slate-800/90 rounded-md whitespace-nowrap font-bold"
      >
        {loading1 ? (
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
    </form>
  );
};

export default SubCategoryForm;
