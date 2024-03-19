import { useAppContext } from "../../../contexts/AppContext";
import Toast from "./Toast";

const ToastContainer = () => {
  const { registerSuccess, loginSuccess, logoutSuccess } = useAppContext();
  return (
    <>
      {registerSuccess && (
        <Toast title={"Registration success!"} status={"success"} />
      )}
      {loginSuccess && <Toast title={"Login success!"} status={"success"} />}
      {logoutSuccess && <Toast title={"Logged Out!"} status={"success"} />}
    </>
  );
};

export default ToastContainer;
