/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AdminContext = createContext();

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({ children }) => {
  //   const location = useLocation();
  //   let currentPage = location.pathname;

  const navigate = useNavigate();
  //=========================================================to create category

  const [addCategorySuccess, setaddCategorySuccess] = useState(false);
  const [addCategoryError, setaddCategoryError] = useState(null);

  const [loading1, setloading1] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [showForm, setShowForm] = useState(false);

  async function handleAddCategory(data) {
    try {
      setloading1(true);
      const response = await axios.post(`${baseUrl}/api/category/`, data);
      setShowForm(false);
      setaddCategorySuccess(true);
      setTimeout(() => {
        setaddCategorySuccess(false);
      }, 5000);
      handleFetchCategory();
      console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      setaddCategoryError(error?.response?.data);
    } finally {
      setloading1(false);
    }
  }

  //======================================================================to fetch category
  const [categoryData, setcategoryData] = useState([]);

  async function handleFetchCategory() {
    try {
      setloading1(true);
      const response = await axios.get(`${baseUrl}/api/category/`);
      setcategoryData(response?.data);
      //   console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      //   setaddCategoryError(error?.response?.data);
    } finally {
      setloading1(false);
    }
  }

  //=========================================================================to delete category
  const [loading2, setLoading2] = useState(false);
  async function handleDeleteCategory(id) {
    try {
      setLoading2(true);
      const response = await axios.delete(`${baseUrl}/api/category/${id}/`);
      handleFetchCategory();
      console.log("Response data:", response);
    } catch (error) {
      console.log("error", error);
      //   setaddCategoryError(error?.response?.data);
    } finally {
      setLoading2(false);
    }
  }

  //======================================================================to create sub category
  const [addSUbCategorySuccess, setaddSUbCategorySuccess] = useState(false);
  const [addSubCategoryError, setaddSubCategoryError] = useState(null);
  const [showSubForm, setShowSubForm] = useState(false);

  async function handleAddSUbCategory(data) {
    try {
      setloading1(true);
      const response = await axios.post(`${baseUrl}/api/subcategory/`, data);
      setShowSubForm(false);
      handleFetchCategory();
      setaddSUbCategorySuccess(true);
      setTimeout(() => {
        setaddSUbCategorySuccess(false);
      }, 5000);
      console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      setaddSubCategoryError(error?.response?.data);
    } finally {
      setloading1(false);
    }
  }

  return (
    <AdminContext.Provider
      value={{
        navigate,
        loading1,
        addCategorySuccess,
        addCategoryError,
        handleAddCategory,
        categoryData,
        handleFetchCategory,
        loading2,
        handleDeleteCategory,
        addSUbCategorySuccess,
        handleAddSUbCategory,
        setaddCategoryError,
        setShowForm,
        showForm,
        setShowSubForm,
        showSubForm,
        addSubCategoryError,
        setaddSubCategoryError,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = () => {
  return useContext(AdminContext);
};

export default AdminContextProvider;