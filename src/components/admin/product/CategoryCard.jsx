import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../../common/modal/DeleteModal";
import { useAdminContext } from "../../../contexts/AdminContext";

const CategoryCard = ({ item, handleShowSubForm }) => {
  const { loading2, handleDeleteCategory, handleDeleteSubCategory } =
    useAdminContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [showDeleteSubModal, setShowDeleteSubModal] = useState(false);
  const [selectedSubcategory, setselectedSubcategory] = useState(null);

  const handleModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const handleDelete = async () => {
    await handleDeleteCategory(item?.id);
    setShowDeleteModal(false);
  };

  const handleSubModal = () => {
    setShowDeleteSubModal((prev) => !prev);
  };

  const handleSubDelete = async () => {
    await handleDeleteSubCategory(selectedSubcategory?.id);
    setShowDeleteSubModal(false);
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
            {item?.subcategory?.length > 0 ? (
              item?.subcategory?.map((x, ind) => {
                return (
                  <div
                    key={ind}
                    className="flex gap-3 items-center py-1 border-b border-slate-800/20"
                  >
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                    {x?.name}
                    <button
                      onClick={() => {
                        handleSubModal();
                        setselectedSubcategory(x);
                      }}
                      className="ml-auto text-white flex gap-2 items-center rounded-md"
                    >
                      <RiDeleteBin6Line size={"15px"} color="#ef4444" />
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="opacity-50">None</p>
            )}
          </div>
        </div>
        <div className="h-full flex flex-col justify-between rounded-md">
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
          body={`Are you sure you want to delete the category: "${selectedCategory?.name}"? All sub-categories and products under it will be lost!`}
          onAction={handleDelete}
          loading={loading2}
        />
      )}

      {showDeleteSubModal && (
        <DeleteModal
          onClose={handleSubModal}
          title={`Delete Sub-category?`}
          body={`Are you sure you want to delete the Sub-category: "${selectedSubcategory?.name}"? All products under it will be lost!`}
          onAction={handleSubDelete}
          loading={loading2}
        />
      )}
    </>
  );
};

export default CategoryCard;
