import { IoClose } from "react-icons/io5";
import nav from "../../../data/nav.json";
import categories from "../../../data/categories.json";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ handleMenu }) => {
  const navigate = useNavigate();

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

  const [showChildren, setShowChildren] = useState(null);
  function handleChild(param) {
    setShowChildren((prev) => (prev ? null : param));
  }

  function link(param) {
    navigate(param);
    handleMenu();
  }

  function linkCate(param) {
    navigate(`/categories/${param}`);
    handleMenu();
  }

  return (
    <div
      onClick={handleMenu}
      className="w-full h-[100dvh] bg-black/70 fixed top-0 left-0 z-[999] bgslide"
    >
      {showList && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[80%] max-w-[400px] h-[100%] min-h-[500px] overflow-y-auto bg-neutral-950 px-5 pt-10 pb-[80px] flex flex-col gap-5 dropslide"
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
                      item?.name === "Categories"
                        ? hamdleCategories()
                        : link(item?.link);
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
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full h-[300px] overflow-y-auto cateslide border-b border-neutral-50 pb-3 px-2 flex flex-col gap-4 text-[.75rem] uppercase"
                      >
                        {categories?.map((itm, ind) => {
                          return (
                            <div
                              key={ind}
                              onClick={() => {
                                itm?.child?.length > 0
                                  ? handleChild(itm)
                                  : linkCate(itm?.slug);
                              }}
                              className="w-full text-white/70 px-3"
                            >
                              <div className="w-full flex justify-between">
                                <p>{itm?.name}</p>
                                {itm?.child?.length > 0 && (
                                  <div>
                                    {showChildren?.name === itm?.name ? (
                                      <FaMinus
                                        size="15px"
                                        color="white"
                                        style={{ opacity: 0.5 }}
                                      />
                                    ) : (
                                      <FaPlus
                                        size="15px"
                                        color="white"
                                        style={{ opacity: 0.5 }}
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                              {itm?.child?.length > 0 &&
                                showChildren?.name === itm?.name && (
                                  <div className="w-[90%] mx-auto h-fit mt-2 px-3 border-l border-neutral-100/50 flex flex-col gap-2">
                                    {itm?.child?.map((x, idx) => {
                                      return <div key={idx}>{x?.name}</div>;
                                    })}
                                  </div>
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
