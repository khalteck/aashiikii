import ProductCard from "../common/ProductCard";

const Section4 = () => {
  return (
    <section className="w-full px-5 md:px-[100px] my-[80px]">
      <div className="w-full flex md:flex-row items-center md:items-start flex-col gap-5 mt-10">
        <div className="w-full sm:max-w-[300px] md:w-[30%] md:min-w-[250px] md:max-w-full">
          <div className="w-fit h-fit relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col gap-10 justify-center items-center text-white">
              <p className="text-[1.5rem] font-bold">Shorts & Trousers</p>
              <p className="text-[1.5rem] font-medium underline">
                Discover More
              </p>
            </div>
            <img
              alt="logo"
              src="/images/dress0.png"
              className="w-full min-h-[500px] md:h-[700px] md:max-h-[800px] object-cover object-top"
            />
          </div>
        </div>

        <div className="w-full md:w-full hidden md:flex justify-center md:justify-start flex-wrap gap-5">
          <ProductCard />

          <ProductCard />

          <ProductCard />

          <ProductCard />

          <ProductCard />
        </div>
        <div className="w-full md:w-full md:hidden flex justify-center md:justify-start flex-wrap gap-5">
          <ProductCard />

          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Section4;
