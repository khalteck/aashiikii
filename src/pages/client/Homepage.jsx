import ScrollToTop from "../../ScrollToTop";
import Header from "../../components/common/Header";
import Loader from "../../components/common/Loader";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-neutral-50">
        <section className="w-full md:min-h-[400px] md:h-[600px] h-[500px] bg-hero1 bg-no-repeat bg-cover relative">
          <div className="w-full h-full absolute top-0 left-0 px-5 bg-black/10 flex justify-center items-center">
            <div className="w-full md:w-fit h-fit p-5 bg-black/70">
              <div className="w-full max-w-[400px] md:w-[500px] h-[150px] md:h-[200px] border-4 md:border-8 border-[#F1E4D8] flex justify-center items-center text-white text-[1.75rem] md:text-[2rem] font-bold text-center">
                Explore Cocktail Dresses..
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-5 md:px-[100px] pt-[60px]">
          <h1 className="font-bold text-[1.5rem] md:text-[1.75rem] text-center">
            POPULAR CATEGORIES
          </h1>

          <div className="w-full flex md:flex-row flex-col gap-5 md:gap-10 mt-10 md:mt-[60px]">
            <div className="w-full md:w-[30%]">
              <img
                alt="logo"
                src="/images/dress1.png"
                className="w-full h-[500px] md:h-full object-cover object-top"
              />
            </div>

            <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <img
                  alt="logo"
                  src="/images/dress2.png"
                  className="w-full h-[350px] object-cover object-top"
                />
                <p className="uppercase opacity-60">DRESS</p>
                <p>Aashiikii 540 Dress</p>
                <p className="text-[#C2A284]">NGN 5,000</p>
              </div>

              <div className="w-full flex flex-col justify-center items-center gap-2">
                <img
                  alt="logo"
                  src="/images/dress2.png"
                  className="w-full h-[350px] object-cover object-top"
                />
                <p className="uppercase opacity-60">DRESS</p>
                <p>Aashiikii 540 Dress</p>
                <p className="text-[#C2A284]">NGN 5,000</p>
              </div>

              <div className="w-full flex flex-col justify-center items-center gap-2">
                <img
                  alt="logo"
                  src="/images/dress2.png"
                  className="w-full h-[350px] object-cover object-top"
                />
                <p className="uppercase opacity-60">DRESS</p>
                <p>Aashiikii 540 Dress</p>
                <p className="text-[#C2A284]">NGN 5,000</p>
              </div>

              <div className="w-full flex flex-col justify-center items-center gap-2">
                <img
                  alt="logo"
                  src="/images/dress2.png"
                  className="w-full h-[350px] object-cover object-top"
                />
                <p className="uppercase opacity-60">DRESS</p>
                <p>Aashiikii 540 Dress</p>
                <p className="text-[#C2A284]">NGN 5,000</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px]"></section>
      </div>

      <ScrollToTop />
    </>
  );
};

export default Homepage;
