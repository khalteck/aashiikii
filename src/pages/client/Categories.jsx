import { useState } from "react";
import ScrollToTop from "../../ScrollToTop";
import ProductCard from "../../components/common/ProductCard";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/header/Header";
import Section1 from "../../components/categories/Section1";
import Section2 from "../../components/categories/Section2";
import ScrollToTopButton from "../../components/common/ScrollToTopButton";

const Categories = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-neutral-50">
        <Section1 />

        <Section2 />

        <ScrollToTopButton />
        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
};

export default Categories;
