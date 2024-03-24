import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaImages } from "react-icons/fa";
import { useAdminContext } from "../../../contexts/AdminContext";
import DeleteModal from "../../common/modal/DeleteModal";
import { useAppContext } from "../../../contexts/AppContext";

const ProductCard = ({ item, myCategory, mySubcategory, setShowImage }) => {
  const { navigate } = useAppContext();
  const { loading2, handleDeleteProduct } = useAdminContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setselectedProduct] = useState(null);

  const [hoverProduct, setHoverProduct] = useState(false);

  const handleModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const handleDelete = async () => {
    await handleDeleteProduct(item?.id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div
        onMouseOver={() => setHoverProduct(true)}
        onMouseOut={() => setHoverProduct(false)}
        className="w-full sm:w-[350px] flex flex-col border-4 border-slate-800 rounded-md"
      >
        <div className="w-full h-fit relative">
          <img
            alt=""
            src={item?.image1}
            className="w-full h-[180px] object-cover rounded-t-sm"
            loading="lazy"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-slate-800/70 flex justify-end items-end p-4">
            <div
              className={`absolute top-0 left-0 bg-white px-2 py-1 text-[.85rem] font-medium flex justify-center items-center gap-1 ${
                item?.variation ? "text-green-600" : "text-red-500"
              } rounded-br-md`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  item?.variation ? "bg-green-600" : "bg-red-500"
                }`}
              ></div>
              <p>{item?.variation ? "Live" : "Incomplete"}</p>
            </div>
            <div className="text-[.85rem] px-2 py-[2px] rounded-lg bg-white font-bold">
              NGN {item?.price}
            </div>
          </div>

          {hoverProduct && (
            <div className="quickview w-full h-[120px] bg-transparent absolute bottom-2 left-0 text-sm p-4 flex gap-4">
              <div
                onClick={() => setShowImage(item)}
                className="w-[150px] h-[50px] bg-white flex justify-center items-center gap-[5%] rounded-md cursor-pointer hover:bg-[#fed7aa] mx-auto"
              >
                <FaImages size="20px" color="black" />
                <p>View images</p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full bg-slate-800 text-white p-3 flex gap-2 justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-bold">{item?.name}</p>
            <p className="text-[.85rem]">
              Category: <span className="font-bold">{myCategory?.name}</span>
            </p>
            <p className="text-[.85rem]">
              Sub-category:{" "}
              <span
                className={`${
                  mySubcategory?.name ? "opacity-100" : "opacity-55"
                } font-bold`}
              >
                {mySubcategory?.name || "None"}
              </span>
            </p>
            <p className="text-[.85rem]">
              Stock: <span className="font-bold">{item?.stock_quantity}</span>
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <div
              onClick={() => navigate(`/admin/edit-product/${item?.id}`)}
              className="cursor-pointer"
            >
              <FiEdit size={"22px"} color="white" />
            </div>
            <div
              onClick={() => {
                handleModal();
                setselectedProduct(item);
              }}
              className="cursor-pointer"
            >
              <RiDeleteBin6Line size={"22px"} color="#f87171" />
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <DeleteModal
          onClose={handleModal}
          title={`Delete Product?`}
          body={`Are you sure you want to delete the product: "${selectedProduct?.name}"?`}
          onAction={handleDelete}
          loading={loading2}
        />
      )}
    </>
  );
};

export default ProductCard;
