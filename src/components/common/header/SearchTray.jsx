import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import SearchCard from "./SearchCard";
import { useState } from "react";
import products from "../../../data/product.json";

const SearchTray = ({ toggleSearch, showList }) => {
  const [productsData, setProductsData] = useState(products);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  function handleSerchChange(e) {
    const value = e.target.value?.toLowerCase();
    setsearchTerm(value);

    if (value?.length >= 3) {
      const results = productsData?.filter(
        (item) =>
          item?.name?.toLowerCase()?.includes(value) ||
          item?.category?.toLowerCase()?.includes(value)
      );
      setsearchResults(results);
    } else {
      setsearchResults([]);
    }
  }

  return (
    <div
      onClick={() => {
        toggleSearch();
        setsearchTerm("");
      }}
      className="w-full h-screen bg-neutral-800/80 fixed top-0 left-0 py-[100px] px-5 z-[100] blurry bgslide"
    >
      <div className="w-[50px] h-[50px] p-3 flex items-center justify-center bg-neutral-50 cursor-pointer absolute top-5 right-5 md:right-[50%] md:translate-x-[50%]">
        <IoClose color="black" size="25px" />
      </div>
      {showList && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-neutral-50 w-full sm:w-[550px] h-[80%] sm:h-[100%] min-h-[400px] mx-auto overflow-y-auto relative dropslide"
        >
          <div className="">
            <div className="w-full min-w-[200px] flex border border-neutral-950/20">
              <div className="w-[50px] md:h-[55px] p-3 flex items-center justify-center bg-[#F1E4D8] cursor-pointer">
                <AiOutlineSearch color="black" size="25px" />
              </div>
              <input
                type="text"
                className="bg-white w-full text-black p-3 md:p-4 outline-none rounded-none text-[.95rem] placeholder:text-black/50"
                placeholder="SEARCH.."
                value={searchTerm}
                onChange={handleSerchChange}
              />
            </div>

            {searchTerm?.length >= 3 ? (
              <div className="mt-3 flex flex-col gap-3 p-4">
                {searchResults?.length > 0 ? (
                  <p>
                    <span className="font-bold">{searchResults?.length}</span>{" "}
                    Search Result(s)..
                  </p>
                ) : (
                  <p>No Result found..</p>
                )}
              </div>
            ) : (
              <div className="mt-3 flex flex-col gap-3 p-4 text-neutral-950/60">
                <p>Keyword length: minimum 3 charaters</p>
              </div>
            )}

            {searchResults?.length > 0 && (
              <div className="w-full flex flex-col border-t border-neutral-950/20">
                {searchResults?.map((itm, idx) => {
                  return <SearchCard key={idx} item={itm} />;
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchTray;
