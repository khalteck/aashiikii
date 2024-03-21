import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../../common/modal/DeleteModal";
import { useAdminContext } from "../../../contexts/AdminContext";

const CategoryCard = ({ item, handleShowSubForm }) => {
  const { loading2, handleDeleteCategory } = useAdminContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setselectedCategory] = useState(null);

  const handleModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const handleDelete = async () => {
    await handleDeleteCategory(item?.id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="w-full flex justify-between gap-3 bg-slate-800/10 p-3 rounded-md text-[.85rem] relative">
        <div className="h-fit flex flex-col gap-3">
          <p>
            Category Name: <span className="font-bold">{item?.name}</span>
          </p>
          <div>
            <p className="font-bold">Sub-categories</p>
            {item?.child?.length > 0 ? (
              item?.child?.map((x, ind) => {
                return (
                  <div key={ind} className="flex gap-3 items-center">
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                    {x?.name}
                  </div>
                );
              })
            ) : (
              <p className="opacity-50">None</p>
            )}
          </div>
        </div>
        <div className="h-full flex flex-col justify-between border border-red-600 rounded-md">
          <div
            onClick={() => {
              handleModal();
              setselectedCategory(item);
            }}
            className="cursor-pointer"
          >
            <RiDeleteBin6Line size={"25px"} color="black" />
          </div>
          <button
            onClick={() => handleShowSubForm(item)}
            className="px-2 py-1 bg-slate-800/80 mt-auto text-white flex gap-2 items-center rounded-md absolute bottom-3 right-3"
          >
            <FaPlus size={"15px"} color="white" />
            Sub
          </button>
        </div>
      </div>

      {showDeleteModal && (
        <DeleteModal
          onClose={handleModal}
          title={`Delete Category?`}
          body={`Are you sure you want to delete the category: ${selectedCategory?.name}?`}
          onAction={handleDelete}
          loading={loading2}
        />
      )}
    </>
  );
};

export default CategoryCard;
