import { FaHeart, FaShoppingCart } from "react-icons/fa";
import CustomSelect from "./CustomSelect";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";
import areAllValuesTruthy from "../../utils/areAllValuesTruthy";

const Description = ({ currentProduct }) => {
  const { cartData, addToCart, removeFromCart, navigate } = useAppContext();

  const [itemExistsInCart, setItemExistsInCart] = useState(false);

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [customValue, setCustomValue] = useState(0);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [addError, setaddError] = useState(false);
  const [track, settrack] = useState(false);

  useEffect(() => {
    if (customValue) {
      setSelectedQuantity(customValue);
    }
  }, [customValue]);

  const [currentItem, setCurrentItem] = useState({
    id: `${currentProduct?.id}_color_size`,
    quantity: 0,
    size: "",
    color: "",
    itemData: currentProduct,
  });

  useEffect(() => {
    setCurrentItem({
      id: `${currentProduct?.id}_${selectedColor}_${selectedSize}`,
      quantity: selectedQuantity,
      size: selectedSize,
      color: selectedColor,
      itemData: currentProduct,
    });

    //to check if item exists in cart
    const itemExist = cartData?.filter(
      (x) => x?.id === currentItem?.id
    )?.length;
    itemExist ? setItemExistsInCart(true) : setItemExistsInCart(false);
  }, [selectedQuantity, currentProduct, selectedColor, selectedSize, track]);

  function handleAdd() {
    settrack((prev) => !prev);
    if (areAllValuesTruthy(currentItem) === true) {
      addToCart(currentItem);
    } else {
      setaddError(true);
    }
  }

  function handleRemove() {
    settrack((prev) => !prev);
    removeFromCart(currentItem);
  }

  function checkCartExistence() {
    setTimeout(() => {
      settrack((prev) => !prev);
      if (areAllValuesTruthy(currentItem) === true) {
        setItemExistsInCart(true);
      } else {
        setItemExistsInCart(false);
      }
    }, 100);
  }
  return (
    <div className="w-full md:w-1/2 md:max-w-[700px] flex flex-col gap-8 relative">
      <div className="w-full flex justify-between">
        <div>
          <p className="font-bold text-[1.75rem]">{currentProduct?.name}</p>
          <p className="text-neutral-950/50">{currentProduct?.category}</p>
        </div>
        <div className="w-[50px] h-[50px] cursor-pointer bg-[#F1E4D8] flex justify-center items-center">
          <FaHeart
            size="20px"
            color={currentProduct?.wishlist ? "red" : "white"}
          />
        </div>
      </div>
      <div className="w-full pb-5 border-b-2 border-[#F1E4D8] font-bold">
        NGN {currentProduct?.price?.toLocaleString()}
      </div>
      <div>
        <h3 className="text-[1.2rem]">Color</h3>
        <div className="flex gap-3 items-center mt-3">
          {currentProduct?.color?.map((x, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  setSelectedColor(x);
                  setaddError(false);
                  checkCartExistence();
                }}
                className={`w-fit h-fit p-1 rounded-full cursor-pointer ${
                  selectedColor === x && "border-2 border-neutral-950"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: x }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-[1.2rem]">Size</h3>
        <div className="max-w-[350px] flex flex-wrap gap-3 items-center mt-3 font-medium">
          {currentProduct?.size?.map((x, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  setSelectedSize(x);
                  setaddError(false);
                  checkCartExistence();
                }}
                className={`w-[80px] h-[60px] border border-neutral-950 flex justify-center items-center cursor-pointer ${
                  selectedSize === x
                    ? "bg-neutral-950 text-neutral-50"
                    : " bg-transparent text-neutral-950"
                }`}
              >
                {x}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-8 md:gap-3 mt-4">
        {itemExistsInCart ? (
          <button
            onClick={() => navigate("/cart")}
            className="w-[200px] p-3 bg-neutral-950 text-white border border-neutral-950 flex gap-2 items-center justify-center text-[.9rem]"
          >
            View Cart
            <FaShoppingCart size="18px" color="white" />
          </button>
        ) : (
          <CustomSelect
            setCustomValue={setCustomValue}
            customValue={customValue}
            setSelectedQuantity={setSelectedQuantity}
            selectedQuantity={selectedQuantity}
            setaddError={setaddError}
          />
        )}
        {itemExistsInCart ? (
          <button
            onClick={handleRemove}
            className="w-full p-3 bg-transparent text-black border border-neutral-950"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="w-full p-3 bg-neutral-950 text-white border border-neutral-950"
          >
            Add to cart
          </button>
        )}
      </div>
      {addError && (
        <div className="text-red-500 text-[.9rem] absolute -bottom-[60px] left-0">
          One or more of the options: Color, Size and Quantity are unselected
        </div>
      )}
    </div>
  );
};

export default Description;
