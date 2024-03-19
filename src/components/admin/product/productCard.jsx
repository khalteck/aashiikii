import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = ({ item }) => {
  return (
    <div className="w-full sm:w-[320px] flex flex-col border-4 border-slate-800 rounded-md">
      <div className="w-full h-fit relative">
        <img
          alt=""
          src={item?.image[0]}
          className="w-full h-[180px] object-cover rounded-t-sm"
          loading="lazy"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-slate-800/70 flex justify-end items-end p-4">
          <div className="text-[.85rem] px-2 py-[2px] rounded-lg bg-white font-bold">
            NGN {item?.price}
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-800 text-white p-3 flex gap-2 justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-bold">{item?.name}</p>
          <p className="text-[.95rem]">{item?.category}</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="cursor-pointer">
            <FiEdit size={"22px"} color="white" />
          </div>
          <div className="cursor-pointer">
            <RiDeleteBin6Line size={"22px"} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
