import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100dvh] fixed top-0 left-0 bg-neutral-100 flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <img
          alt="logo"
          src="/images/404.png"
          className="min-w-[200px] w-full sm:w-[400px] h-auto"
        />
        <p className="">Oops! Page not found.</p>
        <p
          onClick={() => navigate("/")}
          className="underline hover:text-blue-500 text-[1rem] cursor-pointer"
        >
          Back to Home
        </p>
      </div>
    </div>
  );
};

export default Loader;
