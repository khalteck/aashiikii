import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const TopStrip = () => {
  return (
    <div className="w-full bg-[#F1E4D8] flex justify-between text-black">
      <div className="w-[30%] md:w-fit md:px-[100px] px-5 py-3 md:py-5 flex gap-2 items-center justify-center border-r border-black/10">
        <MdEmail color="black" size="25px" />
        <p className="cursor-pointer uppercase hidden md:block">Email Us</p>
      </div>

      <div className="w-[70%] md:w-fit md:px-[100px] py-3 md:py-5 pr-5 flex gap-2 items-center justify-end md:justify-center border-l border-black/10">
        <FaUser color="black" size="20px" />
        <p className="cursor-pointer uppercase text-[.85rem] md:text-[1rem]">
          Login
        </p>
      </div>
    </div>
  );
};

export default TopStrip;