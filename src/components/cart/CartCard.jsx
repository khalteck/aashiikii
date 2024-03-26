import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppContext } from "../../contexts/AppContext";
import ColorNameConverter from "../common/ColorNameConverter";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const CartCard = ({ item }) => {
  const { plusQuantity, minusQuantity, removeFromCart, categoryData } =
    useAppContext();
  const price = item?.price * item?.quantity;
  const category = categoryData?.filter(
    (x) => x?.id === item?.itemData?.category
  )[0];
  return (
    <div className="w-full flex flex-col gap-4 relative pb-3 md:pb-5 border-b border-neutral-950/20">
      <div>
        <p className="font-bold text-[.9rem] md:text-[1.25rem]">
          {item?.itemData?.name}
        </p>
        <p className="text-black/60 text-[.75rem] md:text-[1rem]">
          {category?.name}
        </p>
      </div>
      <div className="flex items-end gap-4">
        <div className="w-fit h-fit flex flex-col gap-3">
          <img
            alt=""
            src={item?.itemData?.image1}
            className="w-[130px] h-[130px] border border-neutral-950/30 sm:w-[250px] sm:h-[250px] object-cover"
          />
        </div>
        <div className="w-[60%] sm:w-full h-[100px] md:h-[250px] flex flex-col justify-end gap-3 md:py-5 text-[.85rem] md:text-[1rem]">
          <div className="w-full flex justify-between items-center">
            <div className="font-bold">
              {capitalizeFirstLetter(item?.color?.name)}
              {/* {<ColorNameConverter hexCode={item?.color?.name} />} */}
            </div>
            <div
              onClick={() => removeFromCart(item)}
              className="mr-1 md:mr-2 cursor-pointer"
            >
              <RiDeleteBin6Line color="#6b7280" size="20px" />
            </div>
          </div>
          <button className="w-fit px-3 md:px-5 py-1 md:py-2 bg-[#F1E4D8] font-medium mt-auto">
            Size {item?.size}
          </button>

          <div className="mt-auto w-full flex justify-between">
            <p className="font-bold text-[.9rem] md:text-[1.25rem]">
              NGN {price?.toLocaleString()}
            </p>
            <div className="ml-auto flex gap-2 md:gap-3 items-center">
              <div
                onClick={() => {
                  item?.quantity !== 0 && minusQuantity(item);
                }}
                className="w-6 h-6 md:w-8 md:h-8 text-neutral-950/50 cursor-pointer flex justify-center items-center border border-neutral-950/50 rounded-full text-[1.25rem]"
              >
                -
              </div>
              <div>{item?.quantity}</div>
              <div
                onClick={() => plusQuantity(item)}
                className="w-6 h-6 md:w-8 md:h-8 text-neutral-950/50 cursor-pointer flex justify-center items-center border border-neutral-950/50 rounded-full text-[1.25rem]"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
