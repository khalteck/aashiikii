import TopStrip from "./TopStrip";
import SearchCont from "./SearchCont";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <TopStrip />

      <SearchCont />

      <Nav />

      <div className="w-full h-[100px] bg-neutral-50 flex justify-center items-center md:hidden">
        <img
          alt="logo"
          src="/images/logo-no-bg.png"
          className="min-w-[100px] w-[150px] h-auto"
        />
      </div>
    </div>
  );
};

export default Header;
