import { MdAccountBox } from "react-icons/md";
import { useAppContext } from "../../../contexts/AppContext";
import { FaReceipt } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

const UserDropdown = ({ setShow, logoutUser }) => {
  const { navigate } = useAppContext();
  return (
    <div
      onMouseOut={() => {
        setShow(false);
      }}
      onMouseOver={() => {
        setShow(true);
      }}
      className={`w-full sm:max-w-[350px] bg-[#F1E4D8] absolute z-[999] flex flex-col justify-center flex-wrap h-[180px] bottom-[-180px] right-0 border-t border-neutral-950 shadow-lg`}
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
  );
};

export default UserDropdown;
