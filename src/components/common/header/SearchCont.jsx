import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";

const SearchCont = ({ handleMenu }) => {
  return (
    <div className="w-full bg-neutral-950 text-white px-5 md:px-[100px] flex gap-4 md:gap-12 items-center pt-4 pb-4 md:pb-5">
      <div>
        <img
          alt="logo"
          src="/images/logo-white-no-bg.png"
          className="w-[200px] h-auto hidden md:block"
        />
        <div onClick={handleMenu} className="md:hidden">
          <HiMenuAlt2 size="25px" color="white" />
        </div>
      </div>
      <div className="w-full min-w-[200px] flex mx-2 md:mx-0">
        <div className="w-[50px] md:h-[55px] p-2 md:p-3 flex items-center justify-center bg-[#F1E4D8]">
          <AiOutlineSearch color="black" size="25px" />
        </div>
        <input
          type="text"
          className="bg-white w-full text-black p-2 md:p-4 outline-none rounded-none text-[.85rem] placeholder:text-black"
          placeholder="SEARCH.."
        />
      </div>

      <div className="ml-auto">
        <p className="hidden md:block whitespace-nowrap">CART (0)</p>
        <div className="md:hidden">
          <FaShoppingCart size="20px" color="white" />
        </div>
      </div>

      <div className="">
        <p className="hidden md:block">WISHLIST</p>
        <div className="md:hidden">
          <FaHeart size="20px" color="white" />
        </div>
      </div>
    </div>
  );
};

export default SearchCont;
