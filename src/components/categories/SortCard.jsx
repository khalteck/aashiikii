import { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const SortCard = ({
  setSortNumber,
  sortNumber,
  setShowDropdown,
  showDropdown,
}) => {
  function handleDropdown() {
    setShowDropdown((prev) => !prev);
  }
  return (
    <>
      <div className="w-fit h-[70px] ml-auto flex justify-end items-center border border-neutral-500/50 p-2 relative">
        <div className="gap-3 items-center px-8 hidden md:flex">
          <div onClick={() => setSortNumber(2)} className="cursor-pointer">
            <IoGrid
              size={sortNumber === 2 ? "30px" : "22px"}
              color={sortNumber === 2 ? "black" : "#9ca3af"}
            />
          </div>
          <div onClick={() => setSortNumber(3)} className="cursor-pointer">
            <BsGrid3X3GapFill
              size={sortNumber === 3 ? "30px" : "22px"}
              color={sortNumber === 3 ? "black" : "#9ca3af"}
            />
          </div>
        </div>
        <div className="w-[1px] h-full bg-neutral-500/50 hidden md:flex"></div>
        <li
          onClick={(e) => {
            e.stopPropagation();
            handleDropdown();
          }}
          className="px-5 py-2 transition-all duration-300 bg-transparent flex gap-2 items-center hover:bg-neutral-500/20 hover:text-black cursor-pointer"
        >
          SORT BY
          <div className="">
            <RiArrowDropDownLine size="25px" color="black" />
          </div>
        </li>
        {showDropdown && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full absolute top-[80px] left-0 border border-neutral-500/50 flex flex-col z-10 bg-neutral-50 shadow-lg"
          >
            <div className="w-full border-b border-neutral-500/30 p-3 cursor-pointer hover:bg-[#C2A284]/30">
              Latest to oldest
            </div>
            <div className="w-full  p-3 cursor-pointer hover:bg-[#C2A284]/30">
              Oldest to Latest
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SortCard;
