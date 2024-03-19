import React from "react";
import nav from "../../../data/adminNav.json";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useAppContext } from "../../../contexts/AppContext";

const SideBar = () => {
  const { navigate } = useAppContext();
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[250px] h-screen fixed top-0 left-0 overflow-y-auto bg-slate-800 px-5 pt-4 pb-[80px] hidden md:flex flex-col gap-5"
      >
        <img
          alt="logo"
          src="/images/logo-white-no-bg.png"
          className="w-[200px] h-auto hidden md:block cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="w-full flex flex-col gap-5 text-neutral-50 mt-10">
          {nav?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li
                  onClick={() => {
                    navigate(item?.link);
                  }}
                  className={`w-full p-3 text-[.85rem] flex flex-col gap-3 bg-white/20 hover:bg-[#C2A284] cursor-pointer rounded-md `}
                >
                  <div className="w-full flex gap-3 font-medium uppercase">
                    {item?.name === "Dashboard" ? (
                      <MdDashboard size="25px" color="white" />
                    ) : item?.name === "Products" ? (
                      <MdOutlineProductionQuantityLimits
                        size="25px"
                        color="white"
                      />
                    ) : item?.name === "Contact & Reviews" ? (
                      <MdReviews size="25px" color="white" />
                    ) : (
                      <IoLogOut size="25px" color="white" />
                    )}
                    <p>{item?.name}</p>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
