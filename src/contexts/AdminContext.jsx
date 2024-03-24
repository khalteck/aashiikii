/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AdminContext = createContext();

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

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

  //=========================================================================to delete sub-category
  async function handleDeleteSubCategory(id) {
    try {
      setLoading2(true);
      const response = await axios.delete(`${baseUrl}/api/subcategory/${id}/`);
      handleFetchCategory();
      console.log("Response data:", response);
    } catch (error) {
      console.log("error", error);
      //   setaddCategoryError(error?.response?.data);
    } finally {
      setLoading2(false);
    }
  }

  //======================================================================to fetch contact messages
  const [contactData, setcontactData] = useState([]);

  async function handleFetchContact() {
    try {
      setloading1(true);
      const response = await axios.get(`${baseUrl}/api/message/`);
      setcontactData(response?.data);
      // console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setloading1(false);
    }
  }

  //======================================================================to create product
  const [createProductSuccess, setcreateProductSuccess] = useState(false);
  const [createProductError, setcreateProductError] = useState(null);

  async function handleCreateProduct(data) {
    try {
      setLoading2(true);

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        // If it's an image key, append the image file
        if (key.startsWith("image") && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          // If it's not an image key, append the data value directly
          formData.append(key, data[key]);
        }
      });

      const response = await axios.post(`${baseUrl}/api/product/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for sending files
        },
      });

      handleFetchProducts();
      setcreateProductSuccess(true);
      setTimeout(() => {
        setcreateProductSuccess(false);
      }, 5000);
      console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      setcreateProductError(error?.response?.data);
    } finally {
      setLoading2(false);
    }
  }

  //======================================================================to edit product
  const [editProductSuccess, seteditProductSuccess] = useState(false);
  const [editProductError, seteditProductError] = useState(null);

  async function handleEditProduct(data, id) {
    try {
      setLoading2(true);

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        // If it's an image key, append the image file
        if (key.startsWith("image") && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          // If it's not an image key, append the data value directly
          formData.append(key, data[key]);
        }
      });

      const response = await axios.put(
        `${baseUrl}/api/product/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for sending files
          },
        }
      );

      handleFetchProducts();
      seteditProductSuccess(true);
      setTimeout(() => {
        seteditProductSuccess(false);
      }, 5000);
      console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      seteditProductError(error?.response?.data);
    } finally {
      setLoading2(false);
    }
  }

  //======================================================================to fetch products
  const [productData, setproductData] = useState([]);

  async function handleFetchProducts() {
    try {
      setloading1(true);
      const response = await axios.get(`${baseUrl}/api/product/`);
      setproductData(response?.data);
      // console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      //   setaddCategoryError(error?.response?.data);
    } finally {
      setloading1(false);
    }
  }

  //=========================================================================to delete products
  const [productDeleteSuccess, setProductDeleteSuccess] = useState(false);
  async function handleDeleteProduct(id) {
    try {
      setLoading2(true);
      const response = await axios.delete(`${baseUrl}/api/product/${id}/`);
      handleFetchProducts();
      setProductDeleteSuccess(true);
      setTimeout(() => {
        setProductDeleteSuccess(false);
      }, 5000);
      console.log("Response data:", response);
    } catch (error) {
      console.log("error", error);
      //   setaddCategoryError(error?.response?.data);
    } finally {
      setLoading2(false);
    }
  }

  //======================================================================to search products
  const [searchData, setsearchData] = useState([]);
  const [loading3, setloading3] = useState(false);

  async function handleSearchProducts(term) {
    try {
      setloading3(true);
      const response = await axios.get(
        `${baseUrl}/main/product?search=${term}`
      );
      setsearchData(response?.data);
      // console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      //   setaddCategoryError(error?.response?.data);
    } finally {
      setloading3(false);
    }
  }

  useEffect(() => {
    setsearchData([]);
  }, [currentPage]);

  //============================================================================to add variations
  const [addVariationSuccess, setaddVariationSuccess] = useState(false);
  const [addVariationError, setaddVariationError] = useState(null);

  async function handleAddVariation(data) {
    try {
      setloading3(true);
      const response = await axios.post(
        `${baseUrl}/api/product_variant/`,
        data
      );
      handleFetchProducts();
      setaddVariationSuccess(true);
      setTimeout(() => {
        setaddVariationSuccess(false);
      }, 5000);
      console.log("Response data:", response.data);
    } catch (error) {
      console.log("error", error);
      setaddVariationError(error?.response?.data);
    } finally {
      setloading3(false);
    }
  }

  //=========================================================================to delete sub-category
  async function handleDeleteVariation(id) {
    try {
      setLoading2(true);
      const response = await axios.delete(
        `${baseUrl}/api/product_variant/${id}`
      );
      handleFetchProducts();
      console.log("Response data:", response);
    } catch (error) {
      console.log("error", error);
      //   setaddCategoryError(error?.response?.data);
    } finally {
      setLoading2(false);
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
        contactData,
        handleFetchContact,
        handleCreateProduct,
        createProductSuccess,
        createProductError,
        productData,
        handleFetchProducts,
        handleDeleteSubCategory,
        handleDeleteProduct,
        productDeleteSuccess,
        loading3,
        searchData,
        handleSearchProducts,
        setsearchData,
        handleEditProduct,
        editProductSuccess,
        editProductError,
        handleAddVariation,
        addVariationSuccess,
        addVariationError,
        handleDeleteVariation,
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
