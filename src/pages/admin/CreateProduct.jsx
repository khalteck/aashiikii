import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";

const CreateProduct = () => {
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
              <h2 className="font-bold">Create Product Form</h2>
              <div className="w-full flex flex-col gap-2 mt-4">
                {/* {orderData?.map((item, index) => {
                  return <RecentOrderCard key={index} item={item} />;
                })} */}
              </div>
            </div>
          </div>{" "}
        </section>
      </main>
    </>
  );
};

export default CreateProduct;
