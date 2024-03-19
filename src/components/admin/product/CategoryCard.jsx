import { RiDeleteBin6Line } from "react-icons/ri";

const CategoryCard = ({ item }) => {
  return (
    <div className="w-full flex justify-between gap-3 bg-slate-800/10 p-3 rounded-md text-[.85rem]">
      <div className="flex flex-col gap-3">
        <p>
          Category Name: <span className="font-bold">{item?.name}</span>
        </p>
        <div>
          <p className="font-bold">Sub-categories</p>
          {item?.child?.length > 0 ? (
            item?.child?.map((x, ind) => {
              return (
                <p key={ind} className="flex gap-3 items-center">
                  <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                  {x?.name}
                </p>
              );
            })
          ) : (
            <p className="opacity-50">None</p>
          )}
        </div>
      </div>
      <div className="cursor-pointer">
        <RiDeleteBin6Line size={"30px"} color="black" />
      </div>
    </div>
  );
};

export default CategoryCard;
