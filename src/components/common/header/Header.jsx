import TopStrip from "./TopStrip";
import SearchCont from "./SearchCont";
import Nav from "./Nav";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import nav from "../../../data/nav.json";
import Dropdown from "./Dropdown";
import { useAppContext } from "../../../contexts/AppContext";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const { openSearch, setOpenSearch } = useAppContext();

  function toggleSearch() {
    setOpenSearch((prev) => !prev);
  }
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenu() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <div className="relative">
      <TopStrip />

      <SearchCont handleMenu={handleMenu} toggleSearch={toggleSearch} />

      <Nav />

      <div className="w-full h-[100px] bg-neutral-50 flex justify-center items-center md:hidden">
        <img
          alt="logo"
          src="/images/logo-no-bg.png"
          className="min-w-[100px] w-[150px] h-auto"
        />
      </div>

      {openMenu && <Dropdown handleMenu={handleMenu} />}

      {openSearch && (
        <div
          onClick={toggleSearch}
          className="w-full h-screen bg-neutral-950/80 fixed top-0 left-0 py-[100px] px-5 z-[100]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-50 w-full sm:w-[550px] h-[80%] sm:h-[700px] min-h-[400px] mx-auto"
          >
            <div className="">
              <div className="w-full min-w-[200px] flex border border-neutral-950/20">
                <div className="w-[50px] md:h-[55px] p-3 flex items-center justify-center bg-[#F1E4D8] cursor-pointer">
                  <AiOutlineSearch color="black" size="25px" />
                </div>
                <input
                  type="text"
                  className="bg-white w-full text-black p-3 md:p-4 outline-none rounded-none text-[.95rem] placeholder:text-black/50"
                  placeholder="SEARCH.."
                />
              </div>

              <div className="mt-3 flex flex-col gap-3 p-4">
                <p>
                  <span className="font-bold">10</span> Search Result(s)..
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
