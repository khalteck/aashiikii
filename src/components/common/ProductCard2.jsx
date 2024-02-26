import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductCard2 = ({ item }) => {
  const navigate = useNavigate();

  const [hoverProduct, setHoverProduct] = useState(false);

  return (
    <div
      onMouseOver={() => setHoverProduct(true)}
      onMouseOut={() => setHoverProduct(false)}
      className="w-full max-w-[500px] h-fit flex flex-col justify-center items-center gap-2 pb-4"
    >
      <div className="w-full h-fit relative">
        {!hoverProduct && (
          <div className="w-[80px] h-[80px] absolute top-0 right-0 cursor-pointer bg-[#fecaca]/10 flex justify-center items-center">
            <FaHeart size="20px" color="white" />
          </div>
        )}
        <div className="w-full h-fit p-4 bg-[#F1E4D8]">
          <img
            alt="product-image"
            src={item?.image}
            className="w-full h-[450px] object-cover object-top border-[#F1E4D8]"
          />
        </div>
        {hoverProduct && (
          <div className="quickview w-full h-[120px] bg-transparent absolute bottom-0 left-0 p-8 flex gap-4">
            <div className="w-[80px] max-h-[60px] cursor-pointer bg-[#F1E4D8] flex justify-center items-center">
              <FaHeart size="20px" color={item?.wishlist ? "red" : "white"} />
            </div>
            <div
              onClick={() => navigate(`/products/${item?.slug}`)}
              className="w-full max-h-[60px] bg-white flex justify-center items-center gap-[5%] cursor-pointer hover:bg-neutral-100"
            >
              <FaPlus size="20px" color="black" />
              <p>Quick View</p>
            </div>
          </div>
        )}
      </div>
      <p className="uppercase opacity-60">{item?.category}</p>
      <p className="font-bold text-[1.25rem] cursor-pointer hover:underline">
        {item?.name}
      </p>
      <p className="text-[#C2A284] font-bold">
        NGN {item?.price?.toLocaleString()}
      </p>
    </div>
  );
};

export default ProductCard2;
