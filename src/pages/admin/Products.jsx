import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import products from "../../data/product.json";
import ProductCard from "../../components/admin/product/productCard";
import Footer from "../../components/admin/common/Footer";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAppContext } from "../../contexts/AppContext";
import { MdCategory } from "react-icons/md";
import { GiClothes } from "react-icons/gi";

const Products = () => {
  const { navigate } = useAppContext();

  const productData = products;
  const [productDataPag, setproductDataPag] = useState([]);
  useEffect(() => {
    setproductDataPag(productData);
  }, [products]);

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;
  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = productDataPag
    ?.slice(pagesVisited, pagesVisited + productPerPage)
    ?.map((item, index) => {
      return <ProductCard key={index} item={item} />;
    });

  const pageCount = Math.ceil(productDataPag?.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [showDrop, setShowDrop] = useState(false);
  function handleDropdown() {
    setShowDrop((prev) => !prev);
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
        </section>

        <section className="w-full min-h-screen px-5 md:pl-0 md:pr-[100px] pb-[50px]">
          <div className="w-full flex gap-7 md:flex-row flex-col justify-center md:items-center">
            <div className="w-full flex gap-3">
              <div className="font-bold bg-slate-800/90 rounded-md p-4 text-white w-fit flex items-center gap-4">
                <h2>Total Products</h2>
                <div className="text-[1.5rem]">{products?.length}</div>
              </div>
              <div className="font-bold bg-slate-800/90 rounded-md p-4 text-white w-fit flex items-center gap-4">
                <h2>Total Categories</h2>
                <div className="text-[1.5rem]">10</div>
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
                    onClick={() => navigate("/admin/create-category")}
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
          <div className="w-full mt-8">
            <div className="w-full h-fit border border-slate-800 rounded-md mt-5 p-4">
              <h2 className="font-bold text-[1.2rem] mb-3">Products</h2>
              <div className="w-full flex h-[50px]">
                <input
                  type="text"
                  className="w-full md:w-[500px] bg-inherit border border-slate-800/50 rounded-l-md p-3 outline-none placeholder:text-[.85rem]"
                  placeholder="Search product by name or category"
                />
                <div className="w-[50px] h-full flex justify-center items-center bg-slate-800 cursor-pointer rounded-r-md">
                  <FaSearch size={"20px"} color="white" />
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {displayProducts}
              </div>
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
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Products;
