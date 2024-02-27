import { useAppContext } from "../../../contexts/AppContext";

const SearchCard = ({ item }) => {
  const { navigate } = useAppContext();
  return (
    <div className="w-full h-fit p-3 flex gap-3 border-b border-neutral-950/20">
      <img
        onClick={() => navigate(`/products/${item?.slug}`)}
        alt=""
        src={item?.image[0]}
        className="w-[30%] min-w-[100px] h-[100px] sm:h-[120px] object-cover cursor-pointer"
      />
      <div className="w-[70%] sm:w-full h-[100px] md:h-[120px] flex flex-col md:py-5 text-[.85rem] md:text-[1rem]">
        <p className="font-bold text-[1rem] md:text-[1.25rem]">{item?.name}</p>
        <p className="text-neutral-950/60">{item?.category}</p>
        <div className="mt-auto w-full flex justify-between">
          <p className="font-bold mt-auto">
            NGN {item?.price?.toLocaleString()}
          </p>
          <button
            onClick={() => navigate(`/products/${item?.slug}`)}
            className="px-3 md:px-5 py-1 md:py-2 bg-[#F1E4D8]"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
