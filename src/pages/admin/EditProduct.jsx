import { useEffect } from "react";
import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";
import CreateProductForm from "../../components/admin/product/CreateProductForm";
import { useAdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router-dom";

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
          <div className="w-full mt-5 flex gap-5 flex-col md:flex-row">
            <div className="w-full md:max-w-[800px] h-fit border border-slate-800 rounded-md p-4">
              <h2 className="font-bold">
                Edit Product - {currentProduct?.name}
              </h2>
              {/* <p className="mt-2 opacity-50">
                Product variations (Colors, size etc) can be added after
                creating the product..
                <br /> Click the edit icon on the product card!
              </p> */}
              <div className="w-full flex flex-col gap-2 mt-4">
                <CreateProductForm categoryData={categoryData} />
              </div>
            </div>
          </div>{" "}
        </section>
      </main>
    </>
  );
};

export default EditProduct;
