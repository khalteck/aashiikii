import TopStrip from "./TopStrip";
import SearchCont from "./SearchCont";
import Nav from "./Nav";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import nav from "../../../data/nav.json";
import Dropdown from "./Dropdown";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenu() {
    setOpenMenu((prev) => !prev);
  }
  return (
    <div>
      <TopStrip />

      <SearchCont handleMenu={handleMenu} />

      <Nav />

      <div className="w-full h-[100px] bg-neutral-50 flex justify-center items-center md:hidden">
        <img
          alt="logo"
          src="/images/logo-no-bg.png"
          className="min-w-[100px] w-[150px] h-auto"
        />
      </div>

      {openMenu && <Dropdown handleMenu={handleMenu} />}
    </div>
  );
};

export default Header;
