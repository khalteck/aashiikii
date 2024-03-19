import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";

const Products = () => {
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
          <div className="font-bold bg-slate-800/90 rounded-md p-4 text-white w-fit flex items-center gap-4">
            <h2>Total Products</h2>
            <div className="text-[1.5rem]">15</div>
          </div>
          <div className="w-full mt-8">
            <input
              type="text"
              className="w-full bg-inherit border border-slate-800 rounded-md p-3 outline-none"
              placeholder="Search"
            />
            <div className="w-full h-[300px] border border-slate-800 rounded-md flex justify-center items-center mt-5">
              <p>Products will display here</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
