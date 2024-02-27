import { useEffect, useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import products from "../../data/product.json";
import { useParams } from "react-router-dom";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";
import { useAppContext } from "../../contexts/AppContext";
import Description from "../../components/productDetails/Description";
import { FaEye } from "react-icons/fa";

const ProductDetails = () => {
  const { currentPage } = useAppContext();
  const { slug } = useParams();
  const currentProduct = products?.filter((x) => x?.slug === slug)[0];

  //======================================================to handle image display
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(currentProduct?.image?.[index]);

  useEffect(() => {
    setImage(currentProduct?.image[index]);
  }, [index, currentPage]);

  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-neutral-50 pb-[100px]">
        <div className="w-full h-[120px] bg-neutral-50 md:flex justify-center items-center hidden">
          <img
            alt="logo"
            src="/images/logo-no-bg.png"
            className="w-[150px] md:w-[200px] h-auto"
          />
        </div>

        <div className="w-full mt-[80px] flex md:flex-row flex-col gap-12 md:gap-[100px] px-5 md:px-[100px]">
          {/* details */}
          <div className="w-full md:w-1/2 min-h-[400px] flex gap-2">
            <div className="w-[30%] h-full overflow-y-auto flex flex-col gap-4">
              {currentProduct?.image?.map((img, ind) => {
                return (
                  <div
                    key={ind}
                    onClick={() => setIndex(ind)}
                    className="relative w-full max-w-[100px] sm:max-w-[130px] h-[100px] sm:w-[130px] sm:h-[130px] cursor-pointer border border-neutral-950/20 hover:border-neutral-950/70"
                  >
                    <img
                      src={img}
                      alt="product image"
                      className={`w-full h-full object-cover object-top cursor-pointer`}
                    />
                    {ind === index && (
                      <div className="w-full h-full absolute top-0 left-0 bg-neutral-950/50 flex justify-center items-center">
                        <FaEye size="25px" color="white" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-[70%] flex justify-center border border-neutral-950/30 relative">
              <img
                src={image}
                alt="product image"
                className="w-full md:min-w-[200px] object-cover h-auto"
              />
            </div>
          </div>

          <Description currentProduct={currentProduct} />
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProductDetails;
