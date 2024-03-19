import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";
import { FaUsers } from "react-icons/fa";
import TotalsCard from "../../components/admin/dashboard/TotalsCard";
import RecentOrderCard from "../../components/admin/dashboard/RecentOrderCard";
import ContactMessageCard from "../../components/admin/dashboard/ContactMessageCard";
import contactData from "../../data/contact.json";
import orderData from "../../data/orders.json";

import { useAppContext } from "../../contexts/AppContext";
import Footer from "../../components/admin/common/Footer";

const Dashboard = () => {
  const { navigate } = useAppContext();
  const totals = [
    { title: "Users", value: 1000 },
    { title: "Products", value: 350 },
    { title: "Orders", value: 20 },
    { title: "Revenue", value: 250000 },
  ];
  return (
    <>
      <Header />
      <SideBar />
      <main className="bg-neutral-50 md:pl-[280px]">
        <section className="w-full px-5 md:pl-0 md:pr-[100px] py-[50px]">
          <h1 className="text-2xl font-bold">Hello, Admin!</h1>
          <div>Good morning</div>
        </section>

        <section className="w-full min-h-screen max-w-[1800px] px-5 md:pl-0 md:pr-[100px] pb-[50px]">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {totals?.map((item, index) => {
              return <TotalsCard key={index} item={item} index={index} />;
            })}
          </div>

          <div className="w-full mt-5 flex gap-5 flex-col md:flex-row">
            <div className="w-full h-fit border border-slate-800 rounded-md p-4">
              <h2 className="font-bold">Recent Orders</h2>
              <div className="w-full flex flex-col gap-2 mt-4">
                {orderData?.map((item, index) => {
                  return <RecentOrderCard key={index} item={item} />;
                })}
              </div>
            </div>
            <div className="w-full border border-slate-800 rounded-md p-4">
              <h2 className="font-bold">Recent Contact Messages</h2>
              <div className="w-full flex flex-col gap-2 mt-4">
                {contactData?.map((item, index) => {
                  return <ContactMessageCard key={index} item={item} />;
                })}
              </div>
              <div className="mt-5 flex justify-center">
                <button
                  onClick={() => navigate("/admin/reviews")}
                  className="px-8 py-2 text-[.85rem] fonr-bold bg-slate-800 text-white rounded-md"
                >
                  View all
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Dashboard;
