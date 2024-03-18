import ReviewCard from "./ReviewCard";
import reviewsDataJson from "../../data/reviews.json";

const Section5 = () => {
  const reviews = reviewsDataJson;
  return (
    <section className="w-full px-5 md:px-[100px] py-[80px] bg-neutral-950 text-white">
      <div className="bg-[#F1E4D8] w-[100px] h-2 rounded-full mx-auto"></div>
      <h2 className="text-[1.5rem] md:text-[2rem] text-center font-bold mt-6">
        Reviews from people who trust us
      </h2>

      <div className="w-full max-w-[1800px] mx-auto hidden md:flex gap-5 md:gap-10 justify-center flex-wrap mt-[50px]">
        {reviews?.map((item, index) => {
          return <ReviewCard key={index} item={item} />;
        })}
      </div>

      <div className="w-full md:hidden flex gap-5 md:gap-10 justify-center flex-wrap mt-[50px]">
        {reviews?.slice(0, 4)?.map((item, index) => {
          return <ReviewCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Section5;
