import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import { ClipLoader } from "react-spinners";
import DeleteModal from "./modal/DeleteModal";

const ProductCard = ({ item, currentCategory }) => {
  const {
    handleAddToWishlist,
    userDetails,
    loading3,
    wishlistData,
    handleRemoveWishlist,
    handleCreateWishlist,
  } = useAppContext();

  const myWishlistItem = wishlistData?.items?.filter(
    (x) => x?.id === item?.id
  )[0];

  // console.log("wishlistData", wishlistData);

  const navigate = useNavigate();

  const [hoverProduct, setHoverProduct] = useState(false);
  const [selectedProduct, setselectedProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  async function handleRemove() {
    await handleRemoveWishlist(wishlist, item?.id);
    setselectedProduct(null);
    setShowDeleteModal(false);
  }

  const wishlist = {
    user: userDetails?.user_data?.id,
    items: [item?.id],
  };

  async function handleAdd() {
    if (!wishlistData?.items) {
      await handleCreateWishlist(wishlist, userDetails?.user_data?.id);
    } else {
      await handleAddToWishlist(wishlist, userDetails?.user_data?.id);
    }
    setselectedProduct(null);
  }

  function handleWishlistClick() {
    if (myWishlistItem?.id) {
      handleModal();
      setselectedProduct(item);
    } else {
      handleAdd();
      setselectedProduct(item);
    }
  }

  return (
    <>
      <div
        onMouseOver={() => setHoverProduct(true)}
        onMouseOut={() => setHoverProduct(false)}
        className="w-full h-fit min-w-[250px] sm:min-w-[280px] sm:max-w-[280px] lg:w-[300px] xl:max-w-[350px] flex flex-col justify-center items-center gap-2 pb-4"
      >
        <div className="w-full h-fit relative">
          {!hoverProduct && (
            <div className="w-[80px] h-[80px] absolute top-0 right-0 cursor-pointer bg-transparent flex justify-center items-center">
              {loading3 && selectedProduct?.id === item?.id ? (
                <ClipLoader color={"#000000"} size={20} />
              ) : (
                <FaHeart
                  size="20px"
                  color={myWishlistItem?.id ? "red" : "white"}
                />
              )}
            </div>
          )}
          <div
            onClick={() => setHoverProduct(true)}
            className="w-full h-fit p-4 bg-[#F1E4D8]"
          >
            <img
              alt="product-image"
              src={item?.image1}
              loading="lazy"
              className="w-full h-[450px] sm:h-[400px] object-cover object-top border-[#F1E4D8]"
            />
          </div>
          {hoverProduct && (
            <div className="quickview w-full h-[120px] bg-transparent absolute bottom-0 left-0 p-8 flex gap-4">
              <div
                onClick={() => {
                  if (userDetails?.access) {
                    handleWishlistClick();
                  } else {
                    navigate("/login");
                  }
                }}
                className="w-[80px] max-h-[60px] cursor-pointer bg-[#F1E4D8] flex justify-center items-center"
              >
                {loading3 && selectedProduct?.id === item?.id ? (
                  <ClipLoader color={"#000000"} size={20} />
                ) : (
                  <FaHeart
                    size="20px"
                    color={myWishlistItem?.id ? "red" : "white"}
                  />
                )}
              </div>
              <div
                onClick={() => navigate(`/products/${item?.id}`)}
                className="w-full max-h-[60px] bg-white flex justify-center items-center gap-[5%] cursor-pointer hover:bg-neutral-100"
              >
                <FaPlus size="20px" color="black" />
                <p>Quick View</p>
              </div>
            </div>
          )}
        </div>
        <p className="opacity-60">{currentCategory?.name}</p>
        <p
          onClick={() => setHoverProduct(true)}
          className="font-bold text-[1.25rem] cursor-pointer hover:underline"
        >
          {item?.name}
        </p>
        <p className="text-[#C2A284] font-bold">
          NGN {item?.variation[0]?.price?.toLocaleString()}
        </p>
      </div>

      {showDeleteModal && (
        <DeleteModal
          onClose={handleModal}
          title={`Remove item from wishlist?`}
          body={`Are you sure you want to remove this item "${selectedProduct?.name}" from your wishlist?`}
          onAction={handleRemove}
          loading={loading3}
          actionText={"Remove"}
        />
      )}
    </>
  );
};

export default ProductCard;
