import ProductCard2 from "../common/ProductCard2";
import SortCard from "./SortCard";
import categories from "../../data/categories.json";
import products from "../../data/product.json";
import { useParams } from "react-router-dom";

const Section2 = () => {
  const { slug } = useParams();
  const currentCategory = categories?.filter((x) => x?.slug === slug)[0];

  const categoryDresses = products?.filter(
    (x) => x?.category === currentCategory?.name
  );
  return (
    <section className="w-full px-3 md:px-[100px] py-[80px]">
      <SortCard />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-10 mt-[80px]">
        {categoryDresses?.map((item, index) => {
          return <ProductCard2 key={index} item={item} />;
        })}
      </div>
      {categoryDresses?.length == 0 && (
        <div className="w-full h-[200px] flex justify-center items-center border border-neutral-950/20 text-black/70">
          Nothing yet..
        </div>
      )}
    </section>
  );
};

export default Section2;
