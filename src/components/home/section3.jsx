import ProductCard from "../common/ProductCard";
import Carousel1 from "./Carousel1";
import products from "../../data/product.json";
import categories from "../../data/categories.json";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import ProductSkeleton from "./ProductSkeleton";

const Section2 = () => {
  const { allProductData, loading1, categoryData } = useAppContext();

  const navigate = useNavigate();

  const currentCategory = categoryData?.filter(
    (x) => x?.name?.toLowerCase() === "shirts and tops"
  )[0];

  const categoryProduct = allProductData
    ?.filter((item) => {
      return item?.category === currentCategory?.id;
    })
    ?.slice(0, 6);

  return (
    <section className="w-full px-5 md:px-[100px] my-[80px]">
      <div className="w-full flex md:flex-row items-center md:items-start flex-col-reverse gap-5 mt-10">
        {categoryProduct?.length === 0 && loading1 && <ProductSkeleton />}

        {categoryProduct?.length > 0 && !loading1 && (
          <div className="w-full md:w-full hidden md:flex justify-center md:justify-start flex-wrap gap-5">
            {categoryProduct?.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  item={item}
                  currentCategory={currentCategory}
                />
              );
            })}
          </div>
        )}
        {categoryProduct?.length > 0 && !loading1 && (
          <div className="w-full md:w-full md:hidden flex justify-center md:justify-start flex-wrap gap-5">
            <Carousel1
              array={categoryProduct}
              currentCategory={currentCategory}
            />
          </div>
        )}
        {/* <div className="w-full md:w-full hidden md:flex justify-center md:justify-end flex-wrap gap-5">
          {categoryDresses?.map((item, index) => {
            return <ProductCard key={index} item={item} />;
          })}
        </div>
        <div className="w-full md:w-full md:hidden flex justify-center md:justify-start flex-wrap gap-5">
          <Carousel1 array={categoryDresses} />
        </div> */}

        <div className="w-full sm:max-w-[300px] md:w-[30%] md:min-w-[250px] md:max-w-full">
          <div className="w-fit h-fit relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col gap-10 justify-center items-center text-white">
              <p className="text-[1.5rem] font-bold">{currentCategory?.name}</p>
              <p
                onClick={() => navigate(`/categories/${currentCategory?.slug}`)}
                className="text-[1.5rem] font-medium underline cursor-pointer"
              >
                Discover More
              </p>
            </div>
            <img
              alt="logo"
              src="/images/Tops.png"
              className="w-full min-h-[500px] md:h-[700px] md:max-h-[800px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
