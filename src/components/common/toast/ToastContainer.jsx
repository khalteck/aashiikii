import { useAdminContext } from "../../../contexts/AdminContext";
import { useAppContext } from "../../../contexts/AppContext";
import Toast from "./Toast";

const ToastContainer = () => {
  const { addCategorySuccess } = useAdminContext();
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
    </>
  );
};

export default ToastContainer;
