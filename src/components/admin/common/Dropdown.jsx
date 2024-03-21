import { IoClose } from "react-icons/io5";
import nav from "../../../data/adminNav.json";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useAppContext } from "../../../contexts/AppContext";
import LogoutModal from "../../common/modal/LogoutModal";

const Dropdown = ({ handleMenu }) => {
  const { showLogoutModal, setShowLogoutModal, logoutUser } = useAppContext();
  function handleModal() {
    setShowLogoutModal((prev) => !prev);
    handleMenu();
  }
  const navigate = useNavigate();

  const [showList, setShowList] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 600);
  }, []);

  function link(param) {
    navigate(param);
    handleMenu();
  }

  // console.log("nav", nav);

  return (
    <>
      <div
        onClick={handleMenu}
        className="w-full h-[100dvh] bg-black/70 fixed top-0 left-0 z-[999] bgslide"
      >
        {showList && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[80%] max-w-[400px] h-[100%] min-h-[500px] overflow-y-auto bg-slate-800 px-5 pt-10 pb-[80px] flex flex-col gap-5 dropslide"
          >
            <div onClick={handleMenu} className="">
              <IoClose size="35px" color="white" />
            </div>

            <img
              alt="logo"
              src="/images/logo-white-no-bg.png"
              className="w-[150px] h-auto"
            />
            <ul className="w-full flex flex-col gap-5 text-neutral-50 mt-10">
              {nav?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li
                      onClick={() => {
                        item?.nav ? link(item?.link) : handleModal();
                      }}
                      className={`w-full p-3 text-[1rem] flex flex-col gap-3 bg-white/20 hover:bg-[#C2A284] cursor-pointer rounded-md `}
                    >
                      <div className="w-full flex gap-3 font-medium uppercase">
                        {item?.name === "Dashboard" ? (
                          <MdDashboard size="25px" color="white" />
                        ) : item?.name === "Products" ? (
                          <MdOutlineProductionQuantityLimits
                            size="25px"
                            color="white"
                          />
                        ) : item?.name === "Reviews" ? (
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
        )}
      </div>

      {showLogoutModal && (
        <LogoutModal
          onClose={handleModal}
          title={"Log Out"}
          onLogout={logoutUser}
        />
      )}
    </>
  );
};

export default Dropdown;
