import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const SortCard = () => {
  return (
    <div className="w-fit h-[70px] ml-auto flex justify-end items-center border border-neutral-500/50 p-2">
      <div className="flex gap-3 items-center px-8">
        <IoGrid size="22px" color="#9ca3af" />
        <BsGrid3X3GapFill size="30px" color="black" />
      </div>
      <div className="w-[1px] h-full bg-neutral-500/50"></div>
      <li className="px-5 py-2 transition-all duration-300 bg-transparent flex gap-2 items-center hover:bg-neutral-500/20 hover:text-black cursor-pointer">
        SORT BY
        <div className="">
          <RiArrowDropDownLine size="25px" color="black" />
        </div>
      </li>
    </div>
  );
};

export default SortCard;
