import { FaHeart, FaShoppingCart } from "react-icons/fa";
import CustomSelect from "./CustomSelect";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";
import areAllValuesTruthy from "../../utils/areAllValuesTruthy";

const Description = ({ currentProduct }) => {
  const { cartData, addToCart, removeFromCart, navigate, categoryData } =
    useAppContext();

  const [itemExistsInCart, setItemExistsInCart] = useState(false);

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [customValue, setCustomValue] = useState(0);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedVariation, setSelectedVariation] = useState("");
  const [addError, setaddError] = useState(false);
  const [track, settrack] = useState(false);
  const [colorError, setcolorError] = useState(false);

  const [price, setprice] = useState(
    currentProduct?.variation?.[0]?.price?.toLocaleString() || ""
  );

  const [currentItem, setCurrentItem] = useState({
    id: `${currentProduct?.id}_color_size`,
    quantity: 0,
    size: "",
    color: "",
    itemData: currentProduct,
    price: price,
  });

  console.log("currentItem", currentItem);

  useEffect(() => {
    //to check if item exists in cart
    const itemExist = cartData?.filter(
      (x) => x?.id === currentItem?.id
    )?.length;
    itemExist ? setItemExistsInCart(true) : setItemExistsInCart(false);

    //to set variation
    const vari = currentProduct?.variation?.filter(
      (x) => selectedColor?.name?.toLowerCase() === x?.color
    )[0];
    setSelectedVariation(vari);

    //to set price
    const newPrice = vari?.price;
    setprice(
      newPrice || currentProduct?.variation?.[0]?.price?.toLocaleString()
    );

    setCurrentItem({
      id: `${currentProduct?.id}_${selectedColor?.name}_${selectedSize}`,
      quantity: selectedQuantity === "Custom" ? customValue : selectedQuantity,
      size: selectedSize,
      color: selectedColor,
      itemData: currentProduct,
      price:
        newPrice || currentProduct?.variation?.[0]?.price?.toLocaleString(),
    });
  }, [
    selectedQuantity,
    currentProduct,
    selectedColor,
    selectedSize,
    track,
    customValue,
  ]);

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

  const currentCategory = categoryData?.filter(
    (x) => x?.id === currentProduct?.category
  )[0];

  // const price = currentProduct?.variation?.[0]?.price?.toLocaleString();

  const sizeArray = currentProduct?.variation?.map((itm) => itm?.size);
  const colorArray = currentProduct?.variation?.map((itm) => {
    return { name: itm?.color, hex: getColor(itm?.color?.toLowerCase()) };
  });

  function getColor(str) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str?.toLowerCase();
    return ctx.fillStyle;
  }

  return (
    <div className="w-full md:w-1/2 md:max-w-[700px] flex flex-col gap-8 relative">
      <div className="w-full flex justify-between">
        <div>
          <p className="font-bold text-[1.75rem]">
            {currentProduct?.name || "..."}
          </p>
          <p className="text-neutral-950/50">{currentCategory?.name}</p>
        </div>
        <div className="w-[50px] h-[50px] cursor-pointer bg-[#F1E4D8] flex justify-center items-center">
          <FaHeart
            size="20px"
            color={currentProduct?.wishlist ? "red" : "white"}
          />
        </div>
      </div>
      <div className="w-full pb-5 border-b-2 border-[#F1E4D8] font-bold">
        NGN {price}
      </div>
      <div>
        <h3 className="text-[1.2rem]">Color</h3>
        <div className="flex gap-3 items-center mt-3">
          {colorArray?.map((x, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  setSelectedColor(x);
                  setaddError(false);
                  checkCartExistence();
                  setcolorError(false);
                  setSelectedSize("");
                }}
                className={`w-fit h-fit p-1 rounded-full cursor-pointer ${
                  selectedColor?.hex === x?.hex && "border-2 border-neutral-950"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full border border-neutral-950/10"
                  style={{ backgroundColor: x?.hex }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-[1.2rem]">Size</h3>
        <div className="max-w-[350px] flex flex-wrap gap-3 items-center mt-3 font-medium relative">
          {sizeArray?.map((x, ind) => {
            return (
              <button
                key={ind}
                disabled={x !== selectedVariation?.size}
                onClick={() => {
                  if (selectedColor) {
                    setSelectedSize(x);
                    setaddError(false);
                    checkCartExistence();
                    setcolorError(false);
                  } else {
                    setcolorError(true);
                  }
                }}
                className={`w-[80px] h-[60px] border border-neutral-950 flex justify-center items-center cursor-pointer uppercase ${
                  selectedSize === x
                    ? "bg-neutral-950 text-neutral-50"
                    : " bg-transparent text-neutral-950"
                } ${
                  x === selectedVariation?.size
                    ? "opacity-100"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                {x}
              </button>
            );
          })}

          {colorError && (
            <div className="w-full absolute -bottom-6 left-0 text-sm text-red-500">
              Select a color first
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col md:items-end gap-8 md:gap-3 mt-4">
        {itemExistsInCart ? (
          <button
            onClick={() => navigate("/cart")}
            className="w-full sm:w-[200px] p-3 bg-neutral-950 text-white border border-neutral-950 flex gap-2 items-center justify-center text-[.9rem]"
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
            className="w-full h-fit p-3 bg-transparent text-black border border-neutral-950"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="w-full h-fit p-3 bg-neutral-950 text-white border border-neutral-950"
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
