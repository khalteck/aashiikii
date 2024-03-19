import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { FaReceipt } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

const TopStrip = () => {
  const { userDetails, logoutUser } = useAppContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function handleShowDropdown() {
    setShow((prev) => !prev);
  }

  function handleClick() {
    userDetails ? handleShowDropdown() : navigate("/login");
  }

  return (
    <>
      <div className="w-full bg-[#F1E4D8] flex justify-between text-black">
        <div className="w-[30%] md:w-fit md:px-[100px] px-5 py-3 md:py-4 flex gap-2 items-center justify-center border-r border-black/10">
          <MdEmail color="black" size="25px" />
          <p className="cursor-pointer uppercase hidden md:block">Email Us</p>
        </div>

        <div
          onClick={handleClick}
          className="w-[70%] md:w-fit md:px-[100px] py-3 md:py-4 pr-5 flex gap-2 items-center justify-end md:justify-center border-l border-black/10 relative cursor-pointer"
        >
          {userDetails ? (
            <>
              <FaUser color="black" size="20px" />
              <p className="cursor-pointer text-[.85rem] md:text-[1rem]">
                Hi User
              </p>
              <MdOutlineArrowDropDown color="black" size="30px" />
            </>
          ) : (
            <>
              <FaUser color="black" size="20px" />
              <p className="cursor-pointer uppercase text-[.85rem] md:text-[1rem]">
                LOGIN
              </p>
            </>
          )}

          {show && (
            <div
              onMouseOut={() => {
                setShow(false);
              }}
              onMouseOver={() => {
                setShow(true);
              }}
              className={`w-full bg-[#F1E4D8] absolute z-[999] flex flex-col justify-center flex-wrap h-[180px] bottom-[-180px] right-0 border-t border-neutral-950 shadow-lg`}
            >
              <div
                onClick={() => navigate("/account-overview")}
                className="py-3 px-5 hover:bg-black/10 cursor-pointer flex gap-3 items-center"
              >
                <MdAccountBox size={"30px"} color="black" />
                <p>Account Overview</p>
              </div>
              <div
                onClick={() => navigate("/order-history")}
                className="py-3 px-5 hover:bg-black/10 cursor-pointer flex gap-3 items-center"
              >
                <FaReceipt size={"30px"} color="black" />
                <p>Order History</p>
              </div>
              <div
                onClick={logoutUser}
                className="py-3 px-5 hover:bg-black/10 cursor-pointer flex gap-3 items-center"
              >
                <TbLogout size={"30px"} color="black" />
                <p>Log Out</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopStrip;
