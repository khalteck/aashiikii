import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useAdminContext } from "../../../contexts/AdminContext";
import { ClipLoader } from "react-spinners";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import ImageUpload from "./ImageUpload";
import { useEffect } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import urlToImageFile from "../../../utils/urlToImageFile";

const EditProductForm = ({ categoryData, currentProduct }) => {
  const { navigate } = useAppContext();
  const { loading1, loading2, addCategoryError, handleEditProduct } =
    useAdminContext();
  const [error, seterror] = useState(false);

  //=========================================to handle register data
  const [loadingImages, setloadingImages] = useState(false);

  const [images, setImages] = useState({});
  const [oldImages, setOldImages] = useState(
    getImageValues(currentProduct) || []
  );

  const [formData, setFormData] = useState({
    name: currentProduct?.name || "",
    category: currentProduct?.category || "",
    // subcategory: "",
    image1: currentProduct?.image1 || "",
    image2: currentProduct?.image2 || "",
    stock_quantity: currentProduct?.stock_quantity || "",
  });

  useEffect(() => {
    if (currentProduct) {
      setFormData({
        name: currentProduct?.name || "",
        category: currentProduct?.category || "",
        image1: currentProduct?.image1 || "",
        image2: currentProduct?.image2 || "",
        stock_quantity: currentProduct?.stock_quantity || "",
      });
      setOldImages(getImageValues(currentProduct));

      const filteredFormData = Object.keys(currentProduct)
        ?.filter((key) => key.includes("image"))
        ?.reduce((acc, key) => {
          acc[key] = currentProduct[key];
          return acc;
        }, {});

      setImages(filteredFormData);
    }
  }, [currentProduct]);

  const [selectedCategory, setselectedCategory] = useState(null);

  //   console.log("formData", formData);

  useEffect(() => {
    const selectedCategoryRaw = categoryData?.filter(
      (x) => x?.id === formData?.category
    )[0];

    if (selectedCategoryRaw?.subcategory?.length > 0) {
      setselectedCategory(selectedCategoryRaw);
    }
  }, [formData, currentProduct]);

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
  }, [images, currentProduct]);

  //   console.log("images", images);

  function handleChange(e) {
    const { value, id } = e.target;

    const values =
      id === "category" || id === "stock_quantity" || id === "subcategory"
        ? Number(value)
        : value;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: values,
      };
    });
    seterror(false);
  }

  async function convertImageUrlsToFiles(obj) {
    const newObj = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const imageUrl = obj[key];
        const imageFile = await urlToImageFile(imageUrl);
        newObj[key] = imageFile;
      }
    }

    return newObj;
  }

  async function handleSubmit() {
    try {
      if (
        formData?.name &&
        formData?.category &&
        formData?.image1 &&
        formData?.stock_quantity
      ) {
        setloadingImages(true);
        const imageFiles = await convertImageUrlsToFiles(images);
        const data = {
          ...formData,
          name: formData?.name?.trim(),
          ...imageFiles,
        };
        await handleEditProduct(data, currentProduct?.id);
        navigate("/admin/products");
      } else {
        seterror(true);
      }
    } catch (err) {
      console.log("err", err);
    } finally {
      setloadingImages(false);
    }
  }

  function getImageValues(obj) {
    const imageValues = [];
    for (const key in obj) {
      if (
        Object.prototype.hasOwnProperty.call(obj, key) &&
        key.includes("image")
      ) {
        imageValues.push({ id: key, imageURL: obj[key] });
      }
    }
    return imageValues;
  }

  //   const oldImages = getImageValues(currentProduct);

  //   console.log("oldImages", oldImages);

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-end gap-4"
    >
      <div className="relative w-full">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950`}
        >
          Name <span className="text-red-500">*</span>
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
          Category <span className="text-red-500">*</span>
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
              <option key={ind} value={x?.id}>
                {x?.name}
              </option>
            );
          })}
        </select>
      </div>

      {selectedCategory && (
        <div className="relative w-full">
          <div className="text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950">
            Sub-category
          </div>
          <select
            id="subcategory"
            onChange={handleChange}
            value={formData?.subcategory || ""}
            placeholder="Sub-category.."
            className="w-full px-3 py-4 border mt-2 outline-none bg-white placeholder:text-neutral-950/30 border-neutral-950/50"
            required
          >
            <option value="" hidden>
              Select Sub-category
            </option>
            {selectedCategory?.subcategory?.map((x, ind) => {
              return (
                <option key={ind} value={x?.id}>
                  {x?.name}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <ImageUpload
        images={images}
        setImages={setImages}
        oldImages={oldImages}
      />

      <div className="relative w-full">
        <div
          className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 text-neutral-950`}
        >
          Stock Quantity <span className="text-red-500">*</span>
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
          Fill the required fields
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
        disabled={loading1 || loadingImages}
        className="w-fit px-8 py-3 text-white flex gap-3 items-center bg-slate-800/90 rounded-md whitespace-nowrap font-bold"
      >
        {loading2 ? (
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

export default EditProductForm;
