import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import categories from "../../../data/categories.json";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";

const Nav = () => {
  const { currentPage, userDetails } = useAppContext();
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const [showCategories, setShowCategories] = useState(false);
  const [hovering, setHovering] = useState(false);

  function hamdleClose() {
    setTimeout(() => {
      setShowCategories(false);
    }, 700);
  }

  const [showChildren, setShowChildren] = useState(null);
  function handleChild(param) {
    setShowChildren((prev) => (prev ? null : param));
  }

  const permissions = userDetails?.user_data?.permission;

  return (
    <>
      <ul className="w-full bg-neutral-950 text-white text-[.9rem] px-5 md:px-[100px] hidden md:flex gap-3 items-center pb-3">
        <li
          onClick={() => navigate("/")}
          className={`px-5 py-2 transition-all duration-300 hover:bg-[#F1E4D8] hover:text-black cursor-pointer ${
            currentPage === "/" && "bg-[#F1E4D8] text-black"
          }`}
        >
          HOME
        </li>
        <li
          onMouseOver={() => {
            setHover(true);
            setShowCategories(true);
          }}
          onMouseOut={() => {
            setHover(false);
            hamdleClose();
          }}
          className={`px-5 py-2 transition-all duration-300 bg-transparent flex gap-2 items-center hover:bg-[#F1E4D8] hover:text-black cursor-pointer`}
        >
          CATEGORIES
          <div className="">
            <RiArrowDropDownLine
              size="25px"
              color={hover ? "black" : "white"}
            />
          </div>
        </li>
        <li
          onClick={() => navigate("/contact")}
          className={`px-5 py-2 transition-all duration-300 hover:bg-[#F1E4D8] hover:text-black cursor-pointer ${
            currentPage?.includes("contact") && "bg-[#F1E4D8] text-black"
          }`}
        >
          CONTACT
        </li>
        {permissions?.is_admin && (
          <li
            onClick={() => navigate("/admin")}
            className={`px-5 py-2 transition-all duration-300 hover:bg-[#F1E4D8] hover:text-black cursor-pointer ${
              currentPage?.includes("admin") && "bg-[#F1E4D8] text-black"
            }`}
          >
            ADMIN DASHBOARD
          </li>
        )}
      </ul>

      {(showCategories || hovering) && (
        <div
          onMouseOut={() => {
            hamdleClose();
            setHovering(false);
          }}
          onMouseOver={() => {
            setHovering(true);
            setShowCategories(true);
          }}
          className={`w-[550px] bg-neutral-950 p-5 absolute left-[40px] z-[999] flex flex-col flex-wrap gap-3 ${
            showChildren
              ? "h-[400px] bottom-[-400px]"
              : "h-[300px] bottom-[-300px]"
          }`}
        >
          {categories?.map((itm, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  itm?.child?.length > 0
                    ? handleChild(itm)
                    : navigate(`/categories/${itm?.slug}`);
                }}
                className="w-1/2 text-white/70 px-3 cursor-pointer hover:text-white text-[.85rem]"
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
                {itm?.child?.length > 0 && showChildren?.name === itm?.name && (
                  <div className="w-[90%] mx-auto h-fit mt-2 px-3 border-l border-neutral-100/50 flex flex-col gap-2">
                    {itm?.child?.map((x, idx) => {
                      return (
                        <div
                          key={idx}
                          className="hover:text-white/70 text-white"
                        >
                          {x?.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Nav;
