import { AiOutlineSearch } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header2 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[80px] md:h-[100px] p-3 md:py-5 md:px-[100px] bg-neutral-950 flex gap-3 justify-between items-center">
      <div className="w-[70%] md:w-[50%] min-w-[200px] flex mx-2 md:mx-0">
        <div className="w-[50px] md:h-[55px] p-2 md:p-3 flex items-center justify-center bg-[#F1E4D8]">
          <AiOutlineSearch color="black" size="25px" />
        </div>
        <input
          type="text"
          className="bg-white w-full text-black p-2 md:p-4 outline-none rounded-none text-[.85rem] placeholder:text-black"
          placeholder="SEARCH.."
        />
      </div>

      <div className="flex gap-3 md:gap-5 items-center">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <GoHomeFill color="white" size="30px" />
        </div>
        <div>
          <FaUser color="white" size="25px" />
        </div>
      </div>
    </div>
  );
};

export default Header2;
