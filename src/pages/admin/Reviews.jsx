import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";

const Reviews = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main className="bg-neutral-50 md:pl-[280px]">
        <section className="w-full px-5 md:pl-0 md:pr-[100px] py-[50px]">
          <h1 className="text-2xl font-bold">Hello, Admin!</h1>
          <div>Good morning</div>
        </section>
      </main>
    </>
  );
};

export default Reviews;
