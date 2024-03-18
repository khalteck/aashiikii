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

  useEffect(() => {
    setFirstStepError(null);
    setFirstStepErrorSource(null);
    setSecondStepError(null);
  }, [currentPage]);

  const [loading1, setloading1] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // const url = `${baseUrl}/register/`;
  // console.log("endpoint url => ", url);

  async function handleRegisterFirstStep(data) {
    try {
      setloading1(true);
      const response = await axios.post(`${baseUrl}/register/`, data);
      console.log("Response data:", response.data);
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
      const response = await axios.put(`${baseUrl}/register/`, data);
      navigate("/");
      console.log("Response data:", response.data);
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
  // async function loginUser(data) {
  //   try {
  //     setloading1(true);
  //     const response = await axios.put(`${baseUrl}/register/`, data);
  //     console.log("Response data:", response.data);
  //   } catch (error) {
  //     console.log("error", error);
  //     setSecondStepError("An error occured!");
  //   } finally {
  //     setloading1(false);
  //   }
  // }

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
