import { RiDeleteBin6Line } from "react-icons/ri";

const VariationCard = () => {
  function getColor(str) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str;
    return ctx.fillStyle;
  }

  const color = getColor("lightblue");

  //   console.log("color", color);
  return (
    <div className="w-[160px] h-[100px] bg-[#C2A284]/30 shadow-md rounded-lg p-3 border border-slate-800/20 flex flex-col gap-1 text-sm relative">
      <button
        // onClick={() => handleDeleteImage(image.id)}
        className="absolute -top-3 -right-3 w-8 h-8 flex justify-center items-center bg-slate-100 border border-red-500 rounded-full"
      >
        <RiDeleteBin6Line size={"15px"} color="red" />
      </button>

      <div className="flex gap-2 items-center">
        <div className="w-7 h-7 rounded-full bg-red-500"></div>
        <p>Red</p>
      </div>
      <p className="text-sm">
        Size: <span className="font-bold">XL</span>
      </p>
      <p className="text-sm">
        Price: <span>NGN 30,000</span>
      </p>
    </div>
  );
};

export default VariationCard;
