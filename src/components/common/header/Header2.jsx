import { AiOutlineSearch } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import SearchTray from "./SearchTray";
import { useEffect, useState } from "react";
import UserDropdown from "./UserDropdown";

const Header2 = () => {
  const navigate = useNavigate();
  const {
    setOpenSearch,
    openSearch,
    userDetails,
    handleFetchWishlist,
    handleFetchCategory,
    logoutUser,
  } = useAppContext();

  useEffect(() => {
    handleFetchCategory();
    if (userDetails?.access) {
      handleFetchWishlist(userDetails?.user_data?.id);
    }
  }, []);

  const [showList, setShowList] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 600);
  }, [openSearch]);

  function toggleSearch() {
    setShowList(false);
    setOpenSearch((prev) => !prev);
  }

  const [show, setShow] = useState(false);
  function handleShowDropdown() {
    setShow((prev) => !prev);
  }

  return (
    <div className="relative w-full h-[80px] md:h-[100px] p-3 md:py-5 md:px-[100px] bg-neutral-950 flex gap-3 justify-between items-center">
      <div className="w-[70%] md:w-[50%] min-w-[200px] flex mx-2 md:mx-0 relative">
        <div className="w-[50px] md:h-[55px] p-2 md:p-3 flex items-center justify-center bg-[#F1E4D8]">
          <AiOutlineSearch color="black" size="25px" />
        </div>
        <input
          type="text"
          className="bg-white w-full text-black p-2 md:p-4 outline-none rounded-none text-[.85rem] placeholder:text-black"
          placeholder="SEARCH.."
        />
        <div
          onClick={toggleSearch}
          className="w-full h-full absolute top-0 left-0 cursor-pointer hover:bg-white/30"
        ></div>
      </div>

      <div className="flex gap-3 md:gap-5 items-center">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <GoHomeFill color="white" size="30px" />
        </div>
        <div onClick={handleShowDropdown} className="cursor-pointer">
          <FaUser color="white" size="25px" />
        </div>
      </div>

      {openSearch && (
        <SearchTray toggleSearch={toggleSearch} showList={showList} />
      )}

      {show && <UserDropdown setShow={setShow} logoutUser={logoutUser} />}
    </div>
  );
};

export default Header2;
