import { AiOutlineSearch } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { HiMenuAlt2 } from "react-icons/hi";
import Dropdown from "./Dropdown";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const Header = () => {
  const { currentPage } = useAppContext();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenu() {
    setOpenMenu((prev) => !prev);
  }

  const pageArr = currentPage?.split("admin/");
  const pageName = pageArr[pageArr?.length - 1];

  return (
    <div className="relative w-full h-[80px] md:h-[100px] p-3 md:py-5 md:px-[100px] bg-[#C2A284]/20 border-b border-black/10 flex gap-3 items-center md:pl-[280px]">
      <div onClick={handleMenu} className="md:hidden mr-5">
        <HiMenuAlt2 size="30px" color="black" />
      </div>
      <div className="w-fit flex md:mx-0 relative text-neutral-950 text-2xl font-bold">
        {currentPage === "/admin"
          ? "Dashboard"
          : currentPage?.includes("edit")
          ? "Edit Product"
          : capitalizeFirstLetter(pageName)}
      </div>

      <div className="flex gap-3 md:gap-5 items-center ml-auto">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <GoHomeFill color="black" size="30px" />
        </div>
        {/* <div>
          <FaUser color="black" size="25px" />
        </div> */}
      </div>

      {openMenu && <Dropdown handleMenu={handleMenu} />}
    </div>
  );
};

export default Header;
