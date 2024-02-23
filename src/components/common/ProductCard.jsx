import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = () => {
  const [hoverProduct, setHoverProduct] = useState(false);

  return (
    <div
      onMouseOver={() => setHoverProduct(true)}
      onMouseOut={() => setHoverProduct(false)}
      className="w-full min-w-[250px] sm:min-w-[280px] sm:max-w-[280px] xl:max-w-[350px] flex flex-col justify-center items-center gap-2 pb-4"
    >
      <div className="w-full h-fit relative">
        {!hoverProduct && (
          <div className="w-[80px] h-[80px] absolute top-0 right-0 cursor-pointer bg-[#fecaca]/10 flex justify-center items-center">
            <FaHeart size="20px" color="white" />
          </div>
        )}
        <div className="w-full h-fit p-4 bg-[#F1E4D8]">
          <img
            alt="logo"
            src="/images/dress2.png"
            className="w-full h-[450px] sm:h-[400px] object-cover object-top border-[#F1E4D8]"
          />
        </div>
        {hoverProduct && (
          <div className="quickview w-full h-[120px] bg-transparent absolute bottom-0 left-0 p-8 flex gap-4">
            <div className="w-[80px] max-h-[60px] cursor-pointer bg-white/50 flex justify-center items-center">
              <FaRegHeart size="20px" color="red" />
            </div>
            <div className="w-full max-h-[60px] bg-white flex justify-center items-center gap-[5%] cursor-pointer hover:bg-neutral-100">
              <FaPlus size="20px" color="black" />
              <p>Quick View</p>
            </div>
          </div>
        )}
      </div>
      <p className="uppercase opacity-60">DRESS</p>
      <p className="font-bold text-[1.25rem] cursor-pointer hover:underline">
        Aashiikii 540 Dress
      </p>
      <p className="text-[#C2A284]">NGN 5,000</p>
    </div>
  );
};

export default ProductCard;
