import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TopStrip = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function handleShowDropdown() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <div className="w-full bg-[#F1E4D8] flex justify-between text-black">
        <div className="w-[30%] md:w-fit md:px-[100px] px-5 py-3 md:py-4 flex gap-2 items-center justify-center border-r border-black/10">
          <MdEmail color="black" size="25px" />
          <p className="cursor-pointer uppercase hidden md:block">Email Us</p>
        </div>

        <div className="w-[70%] md:w-fit md:px-[100px] py-3 md:py-4 pr-5 flex gap-2 items-center justify-end md:justify-center border-l border-black/10 relative">
          <FaUser
            onClick={() => navigate("/login")}
            color="black"
            size="20px"
          />
          <p
            onClick={() => navigate("/login")}
            className="cursor-pointer uppercase text-[.85rem] md:text-[1rem]"
          >
            LOGIN
          </p>

          {/* <div
            onMouseOut={() => {
              setShow(false);
            }}
            onMouseOver={() => {
              setShow(true);
            }}
            className={`w-full bg-[#F1E4D8] absolute z-[999] flex flex-col flex-wrap h-[200px] bottom-[-200px] right-0`}
          >
            <div className="py-3 px-5 hover:bg-black/10 cursor-pointer">
              Register
            </div>
            <div className="py-3 px-5 hover:bg-black/10 cursor-pointer">
              Login
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TopStrip;
