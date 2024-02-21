import { RiArrowDropDownLine } from "react-icons/ri";

const Nav = () => {
  return (
    <ul className="w-full bg-neutral-950 text-white px-5 md:px-[100px] hidden md:flex gap-3 items-center pb-3">
      <li className="px-5 py-2 bg-[#F1E4D8] text-black cursor-pointer">HOME</li>
      <li className="px-5 py-2 bg-transparent flex gap-2 items-center hover:bg-[#F1E4D8] hover:text-black cursor-pointer">
        CATEGORIES
        <div className="">
          <RiArrowDropDownLine size="25px" color="white" />
        </div>
      </li>
      <li className="px-5 py-2 bg-transparent hover:bg-[#F1E4D8] hover:text-black cursor-pointer">
        CONTACT
      </li>
    </ul>
  );
};

export default Nav;
