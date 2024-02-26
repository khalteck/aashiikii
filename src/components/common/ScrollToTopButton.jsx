import { VscFoldUp } from "react-icons/vsc";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-[#F1E4D8] text-white py-2 px-4 rounded-full border border-neutral-950/30 z-[100]"
      onClick={handleScrollToTop}
    >
      <VscFoldUp size="25px" color="black" />
    </button>
  );
};

export default ScrollToTopButton;
