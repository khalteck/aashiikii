import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useAdminContext } from "../../../contexts/AdminContext";
import { ClipLoader } from "react-spinners";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import ImageUpload from "./ImageUpload";
import { useEffect } from "react";

const CreateProductForm = ({ categoryData }) => {
  const { loading1, addCategoryError, handleAddCategory, addCategorySuccess } =
    useAdminContext();
  const [error, seterror] = useState(false);

  //=========================================to handle register data
  const [images, setImages] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    image1: "",
    image2: "",
    stock_quantity: "",
  });

  useEffect(() => {
    setFormData((prev) => {
      // Filter out key-value pairs containing "image"
      const filteredFormData = Object.keys(prev)
        ?.filter((key) => !key.includes("image"))
        ?.reduce((acc, key) => {
          acc[key] = prev[key];
          return acc;
        }, {});

      return {
        ...filteredFormData,
        ...images,
      };
    });
  }, [images]);

  console.log("formData", formData);

  function handleChange(e) {
    const { value, id } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    seterror(false);
  }

  async function handleSubmit() {
    try {
      if (formData?.name) {
        const data = { ...formData, name: formData?.name?.trim() };
        await handleAddCategory(data);
        // setShowForm(false);
      } else {
        seterror(true);
      }
    } catch (err) {
      console.log("err", err);
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
          placeholder="Product name.."
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50 `}
          required
        />
      </div>

      <div className="relative w-full">
        {loading1 && (
          <div className="w-full h-full bg-gray-100/80 flex justify-center items-center absolute top-0 left-0">
            <ClipLoader color={"#000"} size={20} />
          </div>
        )}
        <div className="text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950">
          Category
        </div>
        <select
          id="category"
          onChange={handleChange}
          value={formData?.category}
          className="w-full px-3 py-4 border mt-2 outline-none bg-white placeholder:text-neutral-950/30 border-neutral-950/50"
          required
        >
          <option value="" hidden>
            Select Category
          </option>
          {categoryData?.map((x, ind) => {
            return (
              <option key={ind} value={x?.name}>
                {x?.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="relative w-full">
        <div className="text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950">
          Sub-category
        </div>
        <select
          id="subcategory"
          onChange={handleChange}
          value={formData?.subcategory}
          placeholder="Sub-category.."
          className="w-full px-3 py-4 border mt-2 outline-none bg-white placeholder:text-neutral-950/30 border-neutral-950/50"
          required
        >
          <option value="" hidden>
            Select Sub-category
          </option>
          <option value="Sub-category 1">Sub-category 1</option>
          <option value="Sub-category 2">Sub-category 2</option>
          <option value="Sub-category 3">Sub-category 3</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <ImageUpload images={images} setImages={setImages} />

      <div className="relative w-full">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950`}
        >
          Stock Quantity
        </div>
        <input
          type="number"
          id="stock_quantity"
          onChange={handleChange}
          value={formData?.stock_quantity}
          placeholder="0"
          className={`w-full px-3 py-4 border mt-2 outline-none placeholder:text-neutral-950/30 border-neutral-950/50 `}
          required
        />
      </div>

      {error && (
        <p className="w-full text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
          The name field is required
        </p>
      )}

      {addCategoryError && (
        <p className="w-full text-red-500 bg-red-500/30 font-medium px-3 py-[5px] border-border-red-500 text-[.85rem]">
          {addCategoryError?.name?.[0]}
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
            <p>Create Product</p>
          </>
        )}
      </button>
    </form>
  );
};

export default CreateProductForm;
