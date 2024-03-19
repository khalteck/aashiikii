import { FaUsers } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

const TotalsCard = ({ item, index }) => {
  const isEven = (index + 1) % 2 == 0;
  return (
    <div
      className={`w-full h-fit p-5 rounded-md  ${
        isEven ? "bg-[#C2A284]/30 text-black" : "bg-slate-800/90 text-white"
      }`}
    >
      <div className="w-full flex gap-3">
        {item?.title === "Users" ? (
          <FaUsers size={"40px"} color={isEven ? "black" : "white"} />
        ) : item?.title === "Products" ? (
          <GiClothes size={"40px"} color={isEven ? "black" : "white"} />
        ) : item?.title === "Orders" ? (
          <BiSolidPurchaseTag
            size={"40px"}
            color={isEven ? "black" : "white"}
          />
        ) : (
          <RiMoneyDollarBoxFill
            size={"40px"}
            color={isEven ? "black" : "white"}
          />
        )}
        <p className="text-[1.5rem] font-medium">{item?.title}</p>
      </div>
      <div className="flex justify-end gap-3 items-center text-end text-[2rem] font-bold">
        <p>
          {item?.title === "Revenue" && "$"}
          {item?.value?.toLocaleString()}
        </p>
        <FaCaretUp size={"20px"} color={"#84cc16"} />
      </div>
    </div>
  );
};

export default TotalsCard;
