import { useAdminContext } from "../../../contexts/AdminContext";
import { useAppContext } from "../../../contexts/AppContext";
import Toast from "./Toast";

const ToastContainer = () => {
  const {
    addCategorySuccess,
    createProductSuccess,
    productDeleteSuccess,
    editProductSuccess,
    addVariationSuccess,
    addToWishlistSuccess,
  } = useAdminContext();
  const { registerSuccess, loginSuccess, logoutSuccess } = useAppContext();
  return (
    <>
      {/* client toasts */}
      {registerSuccess && (
        <Toast title={"Registration success!"} status={"success"} />
      )}
      {loginSuccess && <Toast title={"Login success!"} status={"success"} />}
      {logoutSuccess && <Toast title={"Logged Out!"} status={"success"} />}

      {/* admin toasts */}
      {addCategorySuccess && (
        <Toast title={"Category created successfully!"} status={"success"} />
      )}
      {createProductSuccess && (
        <Toast title={"Product created successfully!"} status={"success"} />
      )}
      {productDeleteSuccess && (
        <Toast title={"Product deleted successfully!"} status={"success"} />
      )}
      {editProductSuccess && (
        <Toast title={"Product editted successfully!"} status={"success"} />
      )}
      {addVariationSuccess && (
        <Toast title={"Variation added successfully!"} status={"success"} />
      )}
      {addToWishlistSuccess && (
        <Toast title={"Product added to wishlist!"} status={"success"} />
      )}
    </>
  );
};

export default ToastContainer;
