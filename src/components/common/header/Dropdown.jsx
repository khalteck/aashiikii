import { IoClose } from "react-icons/io5";
import nav from "../../../data/nav.json";
import categories from "../../../data/categories.json";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Dropdown = ({ handleMenu }) => {
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 600);
  }, []);

  const [showCategories, setShowCategories] = useState(false);
  function hamdleCategories() {
    setShowCategories((prev) => !prev);
  }

  return (
    <div
      onClick={handleMenu}
      className="w-full h-[100dvh] bg-black/70 fixed top-0 left-0 z-[999] bgslide"
    >
      {showList && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[80%] h-[100%] min-h-[500px] overflow-y-auto bg-neutral-950 px-5 pt-10 pb-[80px] flex flex-col gap-5 dropslide"
        >
          <div onClick={handleMenu} className="">
            <IoClose size="35px" color="white" />
          </div>

          <ul className="w-full flex flex-col gap-10 text-neutral-50 mt-10">
            {nav?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    onClick={() => {
                      item?.name === "Categories" && hamdleCategories();
                    }}
                    className={`w-full pb-5 text-[1.5rem] flex flex-col gap-3 ${
                      item?.name === "Categories" && !showCategories
                        ? "border-b border-neutral-50"
                        : item?.name !== "Categories"
                        ? "border-b border-neutral-50"
                        : ""
                    }`}
                  >
                    <div className="w-full flex gap-3 justify-between font-medium uppercase">
                      <p>{item?.name}</p>
                      {item?.name === "Categories" && (
                        <>
                          <div className="">
                            {showCategories ? (
                              <FaMinus size="25px" color="white" />
                            ) : (
                              <FaPlus size="25px" color="white" />
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    {item?.name === "Categories" && showCategories && (
                      <div className="w-full h-[300px] overflow-y-auto cateslide border-b border-neutral-50 pb-3 px-2 flex flex-col gap-4 text-[.75rem] uppercase">
                        {categories?.map((itm, ind) => {
                          return (
                            <div
                              key={ind}
                              className="w-full flex justify-between text-white/70"
                            >
                              <p>{itm?.name}</p>
                              {itm?.child?.length > 0 && (
                                <FaPlus
                                  size="15px"
                                  color="white"
                                  style={{ opacity: 0.5 }}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
