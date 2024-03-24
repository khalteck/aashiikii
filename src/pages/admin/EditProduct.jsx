import { useEffect } from "react";
import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";
import CreateProductForm from "../../components/admin/product/CreateProductForm";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";
import EditProductForm from "../../components/admin/product/EditProductForm";
import ScrollToTop from "../../ScrollToTop";
import VariationForm from "../../components/admin/product/VariationForm";

const EditProduct = () => {
  const {
    productData,
    handleFetchProducts,
    handleFetchCategory,
    loading1,
    categoryData,
  } = useAdminContext();
  const { id } = useParams();

  useEffect(() => {
    handleFetchProducts();
    handleFetchCategory();
  }, []);

  const currentProduct = productData?.filter(
    (item) => item?.id === Number(id)
  )[0];

  console.log("currentProduct", currentProduct);

  return (
    <>
      <Header />
      <SideBar />
      <main className="bg-neutral-50 md:pl-[280px]">
        <section className="w-full px-5 md:pl-0 md:pr-[100px] py-[50px]">
          <h1 className="text-2xl font-bold">Hello, Admin!</h1>
          <div>Good morning</div>
        </section>

        <section className="w-full min-h-screen px-5 md:pl-0 md:pr-[100px] pb-[50px]">
          <div className="w-full mt-5 flex gap-5 flex-col">
            <h2 className="font-bold">Edit Product - {currentProduct?.name}</h2>
            <div className="w-full md:max-w-[800px] h-fit border border-slate-800 rounded-md p-4">
              <h2 className="font-bold">Basic Details</h2>
              <div className="w-full flex flex-col gap-2 mt-4">
                <EditProductForm
                  categoryData={categoryData}
                  currentProduct={currentProduct}
                />
              </div>
            </div>

            <div className="w-full md:max-w-[800px] h-fit border border-slate-800 rounded-md p-4 mt-4">
              <h2 className="font-bold">Product Variations</h2>
              <div className="w-full flex flex-col gap-2 mt-4">
                <VariationForm currentProduct={currentProduct} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </>
  );
};

export default EditProduct;
