import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistCard = () => {
  return (
    <div className="w-full flex gap-4 relative pb-3 md:pb-5 border-b border-neutral-950/20">
      <div className="absolute top-3 right-3">
        <RiDeleteBin6Line color="black" size="25px" />
      </div>
      <img
        alt=""
        src="/images/Top2.png"
        className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] object-cover"
      />
      <div className="w-[60%] sm:w-full h-[100px] md:h-[250px] flex flex-col gap-3 md:py-5 text-[.85rem] md:text-[1rem]">
        <p className="font-bold text-[1rem] md:text-[1.25rem]">Aashiikii TOP</p>
        <p className="text-black/60">Shirts and Tops</p>
        <div className="mt-auto w-full flex justify-between">
          <p className="font-bold">NGN 5,000</p>
          <button className="px-3 md:px-5 py-1 md:py-2 bg-[#F1E4D8] font-medium">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
