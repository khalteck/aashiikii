import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";
import { useAppContext } from "./contexts/AppContext";
import ToastContainer from "./components/common/toast/ToastContainer";

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
const OrderHistory = lazy(() => import("./pages/client/OrderHistory"));
const AccountOverview = lazy(() => import("./pages/client/AccountOverview"));

// admin imorts
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Reviews = lazy(() => import("./pages/admin/Reviews"));

const PageNotFound = lazy(() => import("./pages/common/404"));

function App() {
  return (
    <>
      <ToastContainer />

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
          <Route path="/account-overview" element={<AccountOverview />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/login" element={<Login />} />

          {/* admin */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/reviews" element={<Reviews />} />

          {/* page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
