import { IoClose } from "react-icons/io5";

const Modal = ({ onClose, title, type, body }) => {
  return (
    <div
      onClick={onClose}
      className="w-full h-screen bg-neutral-800/80 fixed top-0 left-0 py-[100px] px-5 z-[100] blurry bgslide"
    >
      <div className="w-[50px] h-[50px] p-3 flex items-center justify-center bg-neutral-50 cursor-pointer absolute top-5 right-5 md:right-[50%] md:translate-x-[50%]">
        <IoClose color="black" size="20px" />
      </div>
      <div className="bg-neutral-50 w-full sm:w-[550px] h-fit mx-auto overflow-y-auto relative dropslide p-4">
        <h2 className="font-bold text-center mb-5">{title}</h2>
        <p className="mt-4">{body}</p>
      </div>
    </div>
  );
};

export default Modal;
