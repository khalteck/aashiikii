import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";
import { useAppContext } from "./contexts/AppContext";

const Homepage = lazy(() => import("./pages/client/Homepage"));
const Categories = lazy(() => import("./pages/client/Categories"));
const Contact = lazy(() => import("./pages/client/Contact"));
const Wishlist = lazy(() => import("./pages/client/Wishlist"));
const Cart = lazy(() => import("./pages/client/Cart"));

const PageNotFound = lazy(() => import("./pages/common/404"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories/:slug" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
