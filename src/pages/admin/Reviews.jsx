import { useEffect, useState } from "react";
import Header from "../../components/admin/common/Header";
import SideBar from "../../components/admin/common/SideBar";
import ContactMessageCard from "../../components/admin/dashboard/ContactMessageCard";
import contacts from "../../data/contact.json";
import ReactPaginate from "react-paginate";
import { ClipLoader } from "react-spinners";
import { useAdminContext } from "../../contexts/AdminContext";

const Reviews = () => {
  const { contactData, handleFetchContact, loading1 } = useAdminContext();

  useEffect(() => {
    handleFetchContact();
  }, []);

  console.log("contactData", contactData);
  // const contactData = contacts;
  const [contactDataPag, setcontactDataPag] = useState([]);
  useEffect(() => {
    setcontactDataPag(contactData);
  }, [contactData]);

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 5;
  const pagesVisited = pageNumber * productPerPage;

  const displayContact = contactDataPag
    ?.sort((a, b) => b?.id - a?.id)
    ?.slice(pagesVisited, pagesVisited + productPerPage)
    ?.map((item, index) => {
      return <ContactMessageCard key={index} item={item} />;
    });

  const pageCount = Math.ceil(contactDataPag?.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <SideBar />
      <main className="bg-neutral-50 md:pl-[280px]">
        <section className="w-full px-5 md:pl-0 md:pr-[100px] py-[50px]">
          <h1 className="text-2xl font-bold">Hello, Admin!</h1>
          <div>Good morning</div>

          <div className="mt-7 opacity-70 border border-neutral-950/20 rounded-md p-5 text-sm">
            <p className="font-bold mb-2">Note</p>
            You can click on the email of each contact message to directly
            contact the sender.
          </div>
        </section>

        <section className="w-full px-5 md:pl-0 md:pr-[100px] pb-[50px]">
          <div className="w-full mt-5 flex gap-5 flex-col md:flex-row">
            <div className="w-full border border-slate-800 rounded-md p-4">
              <h2 className="font-bold flex items-center gap-3">
                Contact Messages{" "}
                {loading1 ? (
                  <div>
                    <ClipLoader color={"#000"} size={20} />
                  </div>
                ) : (
                  <p className="px-1 bg-[#C2A284]/30 h-fit">
                    {contactData?.length}
                  </p>
                )}
              </h2>
              <div className="w-full flex flex-col gap-2 mt-4">
                {displayContact}
              </div>
              <div className="mt-4">
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

            <div className="w-full h-fit border border-slate-800 rounded-md p-4">
              <h2 className="font-bold">Reviews</h2>
              <div className="w-full flex flex-col gap-2 mt-4">
                {/* {orderData?.map((item, index) => {
                  return <RecentOrderCard key={index} item={item} />;
                })} */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Reviews;
