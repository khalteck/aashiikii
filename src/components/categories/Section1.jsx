import categories from "../../data/categories.json";
import { useParams } from "react-router-dom";

const Section1 = () => {
  const { slug } = useParams();
  const currentCategory = categories?.filter((x) => x?.slug === slug)[0];

  const handleShopNowClick = () => {
    const section2 = document.getElementById("section2");
    section2.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full md:min-h-[400px] md:h-[600px] h-[500px] bg-cate bg-no-repeat bg-cover bg-center relative">
      <div className="w-full h-full absolute top-0 left-0 px-5 bg-black/10 flex justify-center items-center">
        <div className="w-full md:w-[600px]">
          <div className={`w-fit h-fit mx-auto p-5 bg-black/70 `}>
            <div className="w-full p-5 max-w-[400px] md:w-[500px] h-[150px] md:h-[200px] flex flex-col gap-3 justify-center items-center text-white text-[1.75rem] md:text-[2rem] font-bold text-center">
              <p>{currentCategory?.name}</p>
              <button
                className="px-5 py-2 bg-[#F1E4D8] text-[.9rem] text-black"
                onClick={handleShopNowClick}
              >
                Shop Now
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Section1;
