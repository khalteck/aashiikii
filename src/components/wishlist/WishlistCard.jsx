import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppContext } from "../../contexts/AppContext";

const WishlistCard = ({ item }) => {
  const { categoryData, navigate } = useAppContext();
  const category = categoryData?.filter((x) => x?.id === item?.category)[0];

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
      <div className="w-[66%] sm:w-full h-[100px] md:h-[250px] flex flex-col gap-3 md:py-5 text-[.85rem] md:text-[1rem]">
        <p className="font-bold text-[1rem] md:text-[1.25rem]">{item?.name}</p>
        <p className="text-black/60">Shirts and Tops</p>
        <div className="mt-auto w-full flex justify-between">
          <p className="font-bold">NGN {item?.variation[0]?.price}</p>
          <button
            // onClick={() => navigate(`/products/${item?.id}`)}
            className="px-3 md:px-5 py-1 md:py-2 bg-[#F1E4D8] font-medium ml-auto"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
