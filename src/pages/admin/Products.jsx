import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
// import products from "../../data/product.json";
import ProductCard from "../../components/admin/product/productCard";
import Footer from "../../components/admin/common/Footer";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAppContext } from "../../contexts/AppContext";
import { MdCategory } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { IoMdEye } from "react-icons/io";
import { ClipLoader } from "react-spinners";
import { useAdminContext } from "../../contexts/AdminContext";
import { IoClose } from "react-icons/io5";
import ProductImagesCont from "../../components/admin/product/ProductImagesCont";
import ScrollToTop from "../../ScrollToTop";

const Products = () => {
  const { navigate } = useAppContext();
  const {
    categoryData,
    handleFetchCategory,
    loading1,
    handleFetchProducts,
    productData,
    handleSearchProducts,
    searchData,
    loading3,
    setsearchData,
  } = useAdminContext();

  useEffect(() => {
    handleFetchCategory();
    handleFetchProducts();
  }, []);

  // console.log("productData", productData);

  const [showImage, setShowImage] = useState(null);
  const [searchClicked, setsearchClicked] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(e) {
    const value = e.target.value?.toLowerCase();
    setSearchTerm(value);
  }

  // const products = productData;
  const [productDataPag, setproductDataPag] = useState([]);
  useEffect(() => {
    searchClicked
      ? setproductDataPag(searchData)
      : setproductDataPag(productData);
    if (searchTerm === "") {
      setsearchClicked(false);
      setsearchData([]);
    }
  }, [productData, searchClicked, searchTerm, loading3]);

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;
  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = productDataPag
    ?.slice(pagesVisited, pagesVisited + productPerPage)
    ?.map((item, index) => {
      const myCategory = categoryData?.filter(
        (x) => x?.id === item?.category
      )[0];
      const mySubcategory = myCategory?.subcategory?.filter(
        (x) => x?.id === item?.subcategory
      )[0];
      return (
        <ProductCard
          key={index}
          item={item}
          myCategory={myCategory}
          mySubcategory={mySubcategory}
          setShowImage={setShowImage}
        />
      );
    });

  const pageCount = Math.ceil(productDataPag?.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    handleViewClick();
  };

  const [showDrop, setShowDrop] = useState(false);
  function handleDropdown() {
    setShowDrop((prev) => !prev);
  }

  const handleViewClick = () => {
    const section = document.getElementById("products");
    section.scrollIntoView({ behavior: "smooth" });
  };

  // console.log("searchClicked", searchClicked);

  function handleSearch() {
    handleSearchProducts(searchTerm);
    setsearchClicked(true);
  }

  function handleClear() {
    setsearchClicked(false);
    setsearchData([]);
    setSearchTerm("");
  }

  return (
    <>
      <Header />
      <SideBar />
      <main
        onClick={() => {
          setShowDrop(false);
        }}
        className="bg-neutral-50 md:pl-[280px]"
      >
        <section className="w-full px-5 md:pl-0 md:pr-[100px] py-[50px]">
          <h1 className="text-2xl font-bold">Hello, Admin!</h1>
          <div>Good morning</div>

          <div className="mt-7 opacity-70 border border-neutral-950/20 rounded-md p-5 text-sm">
            <p className="font-bold mb-2">Note</p>
            For products tagged as '
            <span className="font-bold">Incomplete</span>', variations have not
            been added yet.
            <br /> These products won't appear in the client area. Click 'Edit
            (pencil)' icon to add variations.
            <br />
            <br />
            For products tagged as '<span className="font-bold">Live</span>',
            variations are already added.
            <br />
            These products will be displayed in the client area."
          </div>
        </section>

        <section className="w-full min-h-screen px-5 md:pl-0 md:pr-[100px] pb-[50px]">
          <div className="w-full flex gap-7 md:flex-row flex-col justify-center md:items-center">
            <div className="w-full flex gap-3">
              <div className="font-bold bg-slate-800/90 rounded-md p-4 text-white w-fit">
                <div className="flex items-center gap-4">
                  <h2>Total Products</h2>
                  {/* <div className="text-[1.2rem]">{productData?.length}</div> */}
                  {loading1 ? (
                    <div>
                      <ClipLoader color={"#fff"} size={20} />
                    </div>
                  ) : (
                    <div className="text-[1.2rem]">{productData?.length}</div>
                  )}
                </div>
                <button
                  onClick={handleViewClick}
                  className="px-2 py-1 bg-neutral-50 text-[.85rem] mt-auto text-slate-800 flex gap-2 items-center rounded-md"
                >
                  <IoMdEye size={"15px"} color="black" />
                  View
                </button>
              </div>
              <div className="font-bold bg-slate-800/90 rounded-md p-4 text-white w-fit ">
                <div className="flex items-center gap-4">
                  <h2>Total Categories</h2>
                  {loading1 ? (
                    <div>
                      <ClipLoader color={"#fff"} size={20} />
                    </div>
                  ) : (
                    <div className="text-[1.2rem]">{categoryData?.length}</div>
                  )}
                </div>
                <button
                  onClick={() => navigate("/admin/manage-category")}
                  className="px-2 py-1 bg-neutral-50 text-[.85rem] mt-auto text-slate-800 flex gap-2 items-center rounded-md"
                >
                  <IoMdEye size={"15px"} color="black" />
                  View
                </button>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdown();
                }}
                className="w-fit px-8 py-3 text-white flex gap-3 items-center bg-slate-800/90 rounded-md whitespace-nowrap font-bold"
              >
                <FaPlus size={"20px"} color="white" />
                <p>Add New</p>
              </button>
              {showDrop && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="w-full flex flex-col absolute top-[50px] border border-slate-800/50 left-0 bg-neutral-50 shadow-lg rounded-md text-[.9rem]"
                >
                  <div
                    onClick={() => navigate("/admin/manage-category")}
                    className="w-full flex gap-2 items-center hover:bg-slate-800/20 p-3 cursor-pointer border-b border-slate-800/20"
                  >
                    <MdCategory size={"15px"} color="black" />
                    Create Category
                  </div>
                  <div
                    onClick={() => navigate("/admin/create-product")}
                    className="w-full flex gap-2 items-center hover:bg-slate-800/20 p-3 cursor-pointer"
                  >
                    <GiClothes size={"15px"} color="black" />
                    Create Product
                  </div>
                </div>
              )}
            </div>
          </div>

          <div id="products" className="w-full mt-8">
            <div className="w-full h-fit border border-slate-800 rounded-md mt-5 p-4">
              <h2 className="font-bold text-[1.2rem] mb-3">Products</h2>
              <form className="w-full flex h-[50px]">
                <input
                  type="text"
                  onChange={handleChange}
                  value={searchTerm}
                  className="w-full md:w-[500px] bg-inherit border border-slate-800/50 rounded-l-md p-3 outline-none placeholder:text-[.85rem]"
                  placeholder="Search product by name or category"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    searchClicked ? handleClear() : handleSearch();
                  }}
                  className="w-[50px] h-full flex justify-center items-center bg-slate-800 cursor-pointer rounded-r-md"
                >
                  {searchClicked ? (
                    <IoClose size={"20px"} color="white" />
                  ) : (
                    <FaSearch size={"20px"} color="white" />
                  )}
                </button>
              </form>

              {searchClicked && (
                <div className="text-sm opacity-85 mt-4">
                  Showing {searchData?.length} result(s)
                </div>
              )}

              {loading3 ? (
                <div className="w-full mt-5 flex  border border-black/20 p-5 rounded-md text-sm items-center justify-center opacity-50">
                  Searching...
                  <ClipLoader color={"#black"} size={20} />
                </div>
              ) : (
                <div className="mt-7 flex flex-wrap gap-3">
                  {productData?.length ? (
                    displayProducts
                  ) : (
                    <div className="w-full flex flex-col border border-black/20 p-5 rounded-md text-sm items-center justify-center opacity-50">
                      <p>Nothing yet...</p>
                      <p>Upload a product</p>
                    </div>
                  )}
                </div>
              )}
              {productData?.length > 0 && (
                <div className="py-10">
                  <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </main>

      {showImage && (
        <ProductImagesCont showImage={showImage} setShowImage={setShowImage} />
      )}

      <ScrollToTop />
    </>
  );
};

export default Products;
