import TopStrip from "./TopStrip";
import SearchCont from "./SearchCont";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import nav from "../../../data/nav.json";
import Dropdown from "./Dropdown";
import { useAppContext } from "../../../contexts/AppContext";
import { AiOutlineSearch } from "react-icons/ai";
import SearchCard from "./SearchCard";
import { IoClose } from "react-icons/io5";
import SearchTray from "./SearchTray";

const Header = () => {
  const { openSearch, setOpenSearch, handleFetchCategory } = useAppContext();

  useEffect(() => {
    handleFetchCategory();
  }, []);

  const [openMenu, setOpenMenu] = useState(false);
  function handleMenu() {
    setOpenMenu((prev) => !prev);
  }

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

  return (
    <div className="relative w-full">
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
        <SearchTray toggleSearch={toggleSearch} showList={showList} />
      )}
    </div>
  );
};

export default Header;
