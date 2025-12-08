import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  Registration,
  Auth,
  CategoriesPage,
  ShopList,
} from "../pages/index";
import { Header, Footer } from "../layouts/index";
import "./index.css";
import { ROUTES } from "../utils/routes";
import { ViewProduct } from "../pages/index";
export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.REGISTER} element={<Registration />} />
        <Route path={ROUTES.LOGIN} element={<Auth />} />
        <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
        <Route path={ROUTES.BASKET} element={<ShopList />} />
        <Route path={ROUTES.VIEWPRODUCT} element={<ViewProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
