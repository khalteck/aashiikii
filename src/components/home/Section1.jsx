import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";

const Section1 = () => {
  return (
    <section className="w-full md:min-h-[400px] md:h-[600px] h-[500px] bg-hero1 bg-no-repeat bg-cover relative overflow-x-hidden">
      <div className="w-full h-full absolute top-0 left-0 px-5 bg-black/10 flex justify-center items-center">
        <div className="w-full md:w-[600px]">
          <Carousel2 />
        </div>
      </div>
    </section>
  );
};

export default Section1;
