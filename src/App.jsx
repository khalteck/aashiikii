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
const CreateProduct = lazy(() => import("./pages/admin/CreateProduct"));
const EditProduct = lazy(() => import("./pages/admin/EditProduct"));
const CreateCategory = lazy(() => import("./pages/admin/CreateCategory"));
const Reviews = lazy(() => import("./pages/admin/Reviews"));

const PageNotFound = lazy(() => import("./pages/common/404"));

function App() {
  const { userDetails } = useAppContext();
  const permission = userDetails?.user_data?.permission;
  return (
    <>
      <ToastContainer />

      <Suspense fallback={<Loader />}>
        <Routes>
          {/* client */}
          <Route path="/" element={<Homepage />} />
          <Route path="/categories/:slug" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/wishlist" element={<Wishlist />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/step=2" element={<RegisterAdditional />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-overview" element={<AccountOverview />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/login" element={<Login />} />

          {/* protected routes */}
          <Route
            path="/wishlist"
            element={
              permission?.is_client || permission?.is_admin ? (
                <Wishlist />
              ) : (
                <Login />
              )
            }
          />

          {/* admin */}
          <Route
            path="/admin"
            element={permission?.is_admin ? <Dashboard /> : <Login />}
          />
          <Route
            path="/admin/products"
            element={permission?.is_admin ? <Products /> : <Login />}
          />
          <Route
            path="/admin/create-product"
            element={permission?.is_admin ? <CreateProduct /> : <Login />}
          />
          <Route
            path="/admin/edit-product/:id"
            element={permission?.is_admin ? <EditProduct /> : <Login />}
          />
          <Route
            path="/admin/manage-category"
            element={permission?.is_admin ? <CreateCategory /> : <Login />}
          />
          <Route
            path="/admin/contact"
            element={permission?.is_admin ? <Reviews /> : <Login />}
          />

          {/* page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
