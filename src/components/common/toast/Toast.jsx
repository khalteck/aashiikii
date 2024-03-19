import { FaRegSquareCheck } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";

const Toast = ({ title, status }) => {
  return (
    <div className="fixed top-5 left-[50%] translate-x-[-50%] sm:w-[400px] w-[80%] bg-[#F1E4D8] rounded-sm px-5 py-5 shadow-md flex gap-4 items-center border border-neutral-950/30 z-[999] toastslide">
      {status === "success" ? (
        <FaRegSquareCheck size={"30px"} color="#22c55e" />
      ) : (
        <BiSolidError size={"30px"} color="#ef4444" />
      )}
      <p>{title}</p>
    </div>
  );
};

export default Toast;
