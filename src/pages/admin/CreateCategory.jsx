import { RiDeleteBin6Line } from "react-icons/ri";
import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";
import CategoryCard from "../../components/admin/product/CategoryCard";
import categories from "../../data/categories.json";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import CategoryForm from "../../components/admin/product/CategoryForm";
import { useAdminContext } from "../../contexts/AdminContext";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import SubCategoryForm from "../../components/admin/product/SubCategoryForm";

const CreateCategory = () => {
  const {
    categoryData,
    handleFetchCategory,
    loading1,
    setaddCategoryError,
    showForm,
    setShowForm,
    showSubForm,
    setShowSubForm,
    setaddSubCategoryError,
  } = useAdminContext();

  function handleSHowForm() {
    setShowForm((prev) => !prev);
    setaddCategoryError(null);
  }

  const [selectedCategory, setselectedCategory] = useState(null);
  function handleShowSubForm(item) {
    setShowSubForm((prev) => !prev);
    setaddSubCategoryError(null);
    item ? setselectedCategory(item) : setselectedCategory(null);
  }

  useEffect(() => {
    handleFetchCategory();
  }, []);
  return (
    <>
      <Header />
      <SideBar />
      <main className="bg-neutral-50 md:pl-[280px]">
        <section className="w-full px-5 md:pl-0 md:pr-[100px] py-[50px]">
          <h1 className="text-2xl font-bold">Hello, Admin!</h1>
          <div>Good morning</div>
        </section>

        <section className="w-full min-h-screen px-5 md:pl-0 md:pr-[100px] pb-[50px]">
          <div className="w-full mt-5 flex gap-5 flex-col md:flex-row">
            <div className="w-full md:max-w-[800px] h-fit border border-slate-800 rounded-md p-4">
              <div className="flex gap-3 justify-between">
                <h2 className="font-bold flex ite gap-3">
                  Categories{" "}
                  {loading1 ? (
                    <div>
                      <ClipLoader color={"#000"} size={20} />
                    </div>
                  ) : (
                    <p className="px-1 bg-[#C2A284]/30 h-fit">
                      {categoryData?.length}
                    </p>
                  )}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSHowForm();
                  }}
                  className="w-fit px-5 py-2 text-white flex gap-3 items-center bg-slate-800/90 text-[.85rem] rounded-md whitespace-nowrap font-bold"
                >
                  <FaPlus size={"15px"} color="white" />
                  <p>Add New</p>
                </button>
              </div>
              <div className="w-full flex flex-col gap-4 mt-4">
                {categoryData?.map((item, index) => {
                  return (
                    <CategoryCard
                      key={index}
                      item={item}
                      handleShowSubForm={handleShowSubForm}
                    />
                  );
                })}
              </div>
            </div>
          </div>{" "}
        </section>
      </main>

      {showForm && (
        <div
          onClick={handleSHowForm}
          className="w-full h-screen bg-neutral-800/80 fixed top-0 left-0 py-[100px] px-5 z-[100] blurry bgslide"
        >
          <div className="w-[50px] h-[50px] p-3 flex items-center justify-center bg-neutral-50 cursor-pointer absolute top-5 right-5 md:right-[50%] md:translate-x-[50%]">
            <IoClose color="black" size="20px" />
          </div>
          <div className="bg-neutral-50 w-full sm:w-[550px] h-fit mx-auto overflow-y-auto relative dropslide p-4">
            <h2 className="font-bold text-center mb-5">Create Category Form</h2>
            <CategoryForm setShowForm={setShowForm} />
          </div>
        </div>
      )}

      {showSubForm && (
        <div
          onClick={handleShowSubForm}
          className="w-full h-screen bg-neutral-800/80 fixed top-0 left-0 py-[100px] px-5 z-[100] blurry bgslide"
        >
          <div className="w-[50px] h-[50px] p-3 flex items-center justify-center bg-neutral-50 cursor-pointer absolute top-5 right-5 md:right-[50%] md:translate-x-[50%]">
            <IoClose color="black" size="20px" />
          </div>
          <div className="bg-neutral-50 w-full sm:w-[550px] h-fit mx-auto overflow-y-auto relative dropslide p-4">
            <h2 className="font-bold text-center mb-3">
              Create Sub-category Form
            </h2>
            <p className="text-center mb-5">
              Sub-category for category:{" "}
              <span className="font-bold">{selectedCategory?.name}</span>
            </p>
            <SubCategoryForm
              setShowSubForm={setShowSubForm}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CreateCategory;
