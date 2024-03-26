const ProductSkeleton = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="w-full hidden sm:flex justify-start flex-wrap gap-5">
        {array?.map((itm, ind) => {
          return (
            <div
              key={ind}
              className="w-full min-w-[250px] sm:min-w-[280px] sm:max-w-[280px] lg:w-[300px] xl:max-w-[350px] h-[350px] bg-slate-950/10 rounded-md skeleton"
            ></div>
          );
        })}
      </div>
      <div className="w-full flex sm:hidden justify-start flex-wrap gap-5">
        <div className="w-full min-w-[250px] sm:min-w-[280px] sm:max-w-[280px] lg:w-[300px] xl:max-w-[350px] h-[350px] bg-slate-950/10 rounded-md skeleton"></div>
      </div>
    </>
  );
};

export default ProductSkeleton;
