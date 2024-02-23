import { IoClose } from "react-icons/io5";
import nav from "../../../data/nav.json";
import { useEffect, useState } from "react";

const Dropdown = ({ handleMenu }) => {
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 600);
  }, []);
  return (
    <div
      onClick={handleMenu}
      className="w-full h-[100dvh] bg-black/60 fixed top-0 left-0 z-[999] bgslide"
    >
      {showList && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[80%] h-[80%] min-h-[500px] bg-neutral-950 px-5 py-10 flex flex-col gap-5 dropslide"
        >
          <div onClick={handleMenu} className="">
            <IoClose size="35px" color="white" />
          </div>

          <ul className="w-full flex flex-col gap-10 text-neutral-50 mt-10">
            {nav?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-full pb-5 font-medium border-b border-neutral-50 text-[1.5rem] uppercase"
                >
                  {item?.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
