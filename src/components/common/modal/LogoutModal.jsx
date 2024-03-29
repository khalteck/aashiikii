import { IoClose } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { TiCancel } from "react-icons/ti";

const LogoutModal = ({ onClose, title, onLogout }) => {
  return (
    <div
      onClick={onClose}
      className="w-full h-screen bg-neutral-800/80 fixed top-0 left-0 py-[100px] px-5 z-[100] blurry bgslide"
    >
      <div className="w-[50px] h-[50px] p-3 flex items-center justify-center bg-neutral-50 cursor-pointer absolute top-5 right-5 md:right-[50%] md:translate-x-[50%]">
        <IoClose color="black" size="20px" />
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-50 w-full sm:w-[550px] h-fit mx-auto overflow-y-auto relative dropslide2 p-4"
      >
        <h2 className="font-bold text-center mb-5 text-[1.5rem]">{title}</h2>
        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={(e) => {
              onLogout();
            }}
            className="w-fit px-8 py-3 text-white flex gap-3 items-center bg-red-500/90 rounded-md whitespace-nowrap font-bold"
          >
            <TbLogout color="white" size="20px" />
            <p>Logout</p>
          </button>
          <button
            onClick={(e) => {
              onClose();
            }}
            className="w-fit px-8 py-3 text-white flex gap-3 items-center bg-slate-800/90 rounded-md whitespace-nowrap font-bold"
          >
            <TiCancel color="white" size="20px" />
            <p>Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
