/* eslint-disable react-hooks/exhaustive-deps */
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

  //=================================================to hadle cart data
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  // console.log("cartData", cartData);

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
