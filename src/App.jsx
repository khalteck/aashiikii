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
const ProductDetails = lazy(() => import("./pages/client/ProductDetails"));
const Register = lazy(() => import("./pages/client/Register"));
const RegisterAdditional = lazy(() =>
  import("./pages/client/RegisterAdditional")
);
const Login = lazy(() => import("./pages/client/Login"));

const PageNotFound = lazy(() => import("./pages/common/404"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* client */}
        <Route path="/" element={<Homepage />} />
        <Route path="/categories/:slug" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/step=2" element={<RegisterAdditional />} />
        <Route path="/login" element={<Login />} />

        {/* admin */}

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
