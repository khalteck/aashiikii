import { FiShoppingCart } from "react-icons/fi";

const RecentOrderCard = ({ item }) => {
  return (
    <div className="w-full flex bg-slate-800/10 p-3 rounded-md">
      <div className="flex gap-3 mr-auto">
        <div className="w-10 h-10 bg-slate-800 rounded-full flex justify-center items-center">
          <FiShoppingCart size={"20px"} color="white" />
        </div>
        <div>
          <p className="font-bold">{item?.name}</p>
          <p className="opacity-70 text-[.85rem]">{item?.email}</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-end">
          NGN {item?.price?.toLocaleString()}
        </p>
        <p className="opacity-70 text-[.85rem]">{item?.time}</p>
      </div>
    </div>
  );
};

export default RecentOrderCard;
