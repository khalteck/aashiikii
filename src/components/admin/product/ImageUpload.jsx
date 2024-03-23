import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";

function ImageUpload({ images, setImages }) {
  const [imageLength, setImageLength] = useState(0);
  const [previewImages, setPreviewImages] = useState([]);

  //   console.log("previewImages", previewImages);

  const handleImageChange = (event) => {
    const files = event.target.files;

    const newImages = { ...images };
    const newPreviewImages = [...previewImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageURL = URL.createObjectURL(file);
      const imageKey = `image${Object.keys(images).length + i + 1}`;
      newImages[imageKey] = file;
      newPreviewImages.push({ id: imageKey, imageURL });
    }
    setImageLength(Object.keys(newImages)?.length);
    setImages(newImages);
    setPreviewImages(newPreviewImages);
  };

  const handleDeleteImage = (id) => {
    const newImages = { ...images };
    delete newImages[id];

    // Create a new object to store updated images
    const updatedImages = {};

    // Reassign keys in sequential order
    Object.keys(newImages).forEach((key, index) => {
      updatedImages[`image${index + 1}`] = newImages[key];
    });

    // Update the images state with the updated images
    setImageLength(Object.keys(updatedImages)?.length);
    setImages(updatedImages);
    setPreviewImages(previewImages.filter((image) => image.id !== id));
  };

  return (
    <div className="w-full relative border-neutral-950/50 border p-4 mt-2">
      <div
        className={`text-[.75rem] px-1 absolute bg-neutral-50 left-5 -top-3 text-neutral-950`}
      >
        Image(s) <span className="text-red-500">*</span>
      </div>

      <p>Upload product images - 2 images (for now)</p>

      <div className="mt-4 flex flex-wrap gap-5">
        {previewImages?.map((image, ind) => (
          <div
            key={ind}
            className="w-[100px] h-[100px] object-cover border border-neutral-950/80 rounded-md relative"
          >
            <img src={image.imageURL} alt="Preview" className="w-full h-full" />
            <button
              onClick={() => handleDeleteImage(image.id)}
              className="absolute -top-3 -right-3 w-8 h-8 flex justify-center items-center bg-slate-100 border border-red-500 rounded-full"
            >
              <RiDeleteBin6Line size={"15px"} color="red" />
            </button>
          </div>
        ))}
        {imageLength < 2 && (
          <label
            htmlFor="imageUpload"
            className="w-[100px] h-[100px] px-3 py-4 rounded-md bg-slate-800/30 border outline-none placeholder:text-neutral-950/30 border-neutral-950/50 flex justify-center items-center cursor-pointer"
          >
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              onChange={handleImageChange}
              // multiple
            />
            <HiPlus size={"30px"} color="black" />
          </label>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
