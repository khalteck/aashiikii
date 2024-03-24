import { RiDeleteBin6Line } from "react-icons/ri";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import DeleteModal from "../../common/modal/DeleteModal";
import { useState } from "react";
import { useAdminContext } from "../../../contexts/AdminContext";

const VariationCard = ({ item }) => {
  const { loading2, handleDeleteVariation } = useAdminContext();
  function getColor(str) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str;
    return ctx.fillStyle;
  }

  const color = getColor(item?.color);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const handleDelete = async () => {
    await handleDeleteVariation(item?.id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="w-[180px] h-[100px] bg-[#C2A284]/30 shadow-md rounded-lg p-3 border border-slate-800/20 flex flex-col gap-1 text-sm relative">
        <button
          onClick={() => {
            handleModal();
          }}
          className="absolute -top-3 -right-3 w-8 h-8 flex justify-center items-center bg-slate-100 border border-red-500 rounded-full"
        >
          <RiDeleteBin6Line size={"15px"} color="red" />
        </button>

        <div className="flex gap-2 items-center">
          <div
            className="w-7 h-7 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <p>{capitalizeFirstLetter(item?.color)}</p>
        </div>
        <p className="text-sm">
          Size: <span className="font-bold uppercase">{item?.size}</span>
        </p>
        <p className="text-sm">
          Price: <span>NGN {item?.price?.toLocaleString()}</span>
        </p>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={handleModal}
          title={`Delete Variation?`}
          body={`Are you sure you want to delete this variation?`}
          onAction={handleDelete}
          loading={loading2}
        />
      )}
    </>
  );
};

export default VariationCard;
