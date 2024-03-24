/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);
  useEffect(() => {
    setOpenSearch(false);
  }, [currentPage]);

  //=================================================to handle cart data
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  function addToCart(newItem) {
    const newCartData = [...cartData];
    newCartData?.push(newItem);
    setCartData(newCartData);
    localStorage.setItem("cartData", JSON.stringify(newCartData));
  }

  function removeFromCart(item) {
    const newCartData = [...cartData]?.filter((x) => x?.id !== item?.id);
    setCartData(newCartData);
    localStorage.setItem("cartData", JSON.stringify(newCartData));
  }

  function plusQuantity(item) {
    const newCartData = [...cartData];
    const updatedCartData = newCartData.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCartData(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  }

  function minusQuantity(item) {
    const newCartData = [...cartData];
    const updatedCartData = newCartData.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCartData(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  }

  //========================================================================to handle registration
  const [firstStepError, setFirstStepError] = useState(null);
  const [firstStepErrorSource, setFirstStepErrorSource] = useState(null);
  const [secondStepError, setSecondStepError] = useState(null);
  const [secondStepErrorSource, setSecondStepErrorSource] = useState(null);
  const [firstStepData, setfirstStepData] = useState(
    JSON.parse(localStorage.getItem("firstStepData")) || null
  );
  const [registerSuccess, setregisterSuccess] = useState(false);

  const [loading1, setloading1] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // const url = `${baseUrl}/register/`;
  // console.log("endpoint url => ", url);

  async function handleRegisterFirstStep(data) {
    try {
      setloading1(true);
      const response = await axios.post(`${baseUrl}/api/register/`, data);
      setfirstStepData(response.data);
      localStorage.setItem("firstStepData", JSON.stringify(response?.data));
      // console.log("Response data:", response.data);
      navigate("/register/step=2");
    } catch (error) {
      console.log("error", error);
      const errorArray = Object?.values(error?.response?.data || {});
      const errorSourceArray = Object?.keys(error?.response?.data || {});
      const networkError = [["An error occured!"]];
      const errorRecieved =
        error?.response?.status >= 500 || error?.message === "Network Error"
          ? networkError
          : errorArray;
      setFirstStepError(errorRecieved);
      setFirstStepErrorSource(errorSourceArray);
    } finally {
      setloading1(false);
    }
  }

  async function handleRegisterSecondStep(data) {
    try {
      setloading1(true);
      const response = await axios.put(
        `${baseUrl}/api/register/${firstStepData?.id}/`,
        data
      );
      localStorage.removeItem("firstStepData");
      setregisterSuccess(true);
      setTimeout(() => {
        setregisterSuccess(false);
      }, 5000);
      navigate("/login");
      // console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      const errorArray = Object?.values(error?.response?.data || {});
      const errorSourceArray = Object?.keys(error?.response?.data || {});
      const networkError = [["An error occured!"]];
      const errorRecieved =
        error?.response?.status >= 500 || error?.message === "Network Error"
          ? networkError
          : errorArray;
      setSecondStepError(errorRecieved);
      setSecondStepErrorSource(errorSourceArray);
    } finally {
      setloading1(false);
    }
  }

  //========================================================================to handle Login
  const [loginError, setloginError] = useState(null);
  const [loginErrorSource, setloginErrorSource] = useState(null);
  const [loginSuccess, setloginSuccess] = useState(false);
  const [userDetails, setuserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || null
  );

  async function loginUser(data) {
    try {
      setloading1(true);
      const response = await axios.post(`${baseUrl}/main/login/`, data);
      // console.log("Response data:", response.data);
      setuserDetails(response?.data);
      localStorage.setItem("userDetails", JSON.stringify(response?.data));
      setloginSuccess(true);
      setTimeout(() => {
        setloginSuccess(false);
      }, 5000);
      navigate("/");
    } catch (error) {
      console.log("error", error);
      const errorArray = Object?.values(error?.response?.data || {});
      const errorSourceArray = Object?.keys(error?.response?.data || {});
      const networkError = [["An error occured!"]];
      const errorRecieved =
        error?.response?.status >= 500 || error?.message === "Network Error"
          ? networkError
          : errorArray;
      setloginError(errorRecieved);
      setloginErrorSource(errorSourceArray);
    } finally {
      setloading1(false);
    }
  }

  useEffect(() => {
    setFirstStepError(null);
    setFirstStepErrorSource(null);
    setSecondStepError(null);
    setSecondStepError(null), setloginError(null);
    setloginErrorSource(null);
  }, [currentPage]);

  //=================================================================to log out user
  const [logoutSuccess, setlogoutSuccess] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  function logoutUser() {
    localStorage.removeItem("userDetails");
    setuserDetails(null);
    setlogoutSuccess(true);
    setTimeout(() => {
      setlogoutSuccess(false);
    }, 5000);
    navigate("/");
  }

  //=====================================================to submit contact message
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState(null);

  async function handleContact(data) {
    try {
      setloading1(true);
      const response = await axios.post(`${baseUrl}/api/message/`, data);
      setContactSuccess(true);
      // setTimeout(() => {
      //   setContactSuccess(false);
      // }, 5000);
      console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      setContactError(error?.response?.data);
    } finally {
      setloading1(false);
    }
  }

  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        openSearch,
        setOpenSearch,
        navigate,
        cartData,
        addToCart,
        removeFromCart,
        plusQuantity,
        minusQuantity,
        handleRegisterFirstStep,
        loading1,
        firstStepError,
        handleRegisterSecondStep,
        secondStepError,
        firstStepErrorSource,
        secondStepErrorSource,
        loginError,
        loginErrorSource,
        firstStepData,
        registerSuccess,
        loginSuccess,
        loginUser,
        userDetails,
        logoutSuccess,
        logoutUser,
        setShowLogoutModal,
        showLogoutModal,
        contactSuccess,
        contactError,
        handleContact,
        setContactSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
