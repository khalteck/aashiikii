import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] fixed top-0 left-0 bg-neutral-100 flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <img
          alt="logo"
          src="/images/logo-no-bg.png"
          className="min-w-[200px] w-full sm:w-[400px] h-auto blink"
        />
        <ClipLoader color={"#0a0a0a"} size={30} />
      </div>
    </div>
  );
};

export default Loader;
