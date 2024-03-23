import { IoClose } from "react-icons/io5";

const ProductImagesCont = ({ showImage, setShowImage }) => {
  function getImageValues(obj) {
    const imageValues = [];
    for (const key in obj) {
      if (
        Object.prototype.hasOwnProperty.call(obj, key) &&
        key.includes("image")
      ) {
        imageValues.push(obj[key]);
      }
    }
    return imageValues;
  }

  const images = getImageValues(showImage);

  return (
    <div
      onClick={() => setShowImage(null)}
      className="w-full h-screen bg-neutral-800/80 fixed top-0 left-0 py-[100px] px-5 z-[100] blurry bgslide"
    >
      <div className="w-[50px] h-[50px] p-3 flex items-center justify-center bg-neutral-50 cursor-pointer absolute top-5 right-5 md:right-[50%] md:translate-x-[50%]">
        <IoClose color="black" size="20px" />
      </div>
      <div
        onClick={(e) => e?.stopPropagation()}
        className="bg-neutral-50 w-full sm:w-[550px] h-[80%] mx-auto overflow-y-auto relative dropslide p-4"
      >
        <h2 className="font-bold text-center mb-5">
          View Images - {showImage?.name}
        </h2>
        <div className="w-full h-[90%] overflow-x-auto no-scrollbar flex gap-4 p-3 snap-mandatory snap-x">
          {images?.map((itm, ind) => {
            return (
              <img
                key={ind}
                alt=""
                src={itm}
                className="md:w-[80%] w-[90%] object-cover rounded-lg snap-center"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImagesCont;
