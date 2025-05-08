import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../components/pages/Home";
import LoginPage from "../../components/molecules/auths/LoginPage";
import SignUpPage from "../../components/molecules/auths/SignUpPage";
import Category from "../../components/organisms/category/Category";
import Profile from "../../components/organisms/profile/Profile";
import Favourite from "../../components/organisms/favourites/Favourite";
import { createContext, useState } from "react";
import Order from "../../components/molecules/orders/Order";
import SwiggyOnes from "../../components/molecules/swiggyones/SwiggyOnes";
import PaymentsPage from "../../components/pages/PaymentsPage";
import CartPage from "../../components/pages/CartPage";

export const FavContext = createContext({
  fav: false,
  handleFavourites: () => any,
});
const Routers = () => {
  const [favourites, setFavourites] = useState(false);
  const handleFavourites = () => {
    setFavourites(!favourites);
  };
  return (
    <>
      <FavContext.Provider
        value={{ fav: favourites, handleFavourites: handleFavourites }}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />}></Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Navigate to="orders" replace />} />
            <Route path="orders" element={<Order />}></Route>
            <Route path="swiggy-ones" element={<SwiggyOnes />}></Route>
          </Route>
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/payments" element={<PaymentsPage />}></Route>
        </Routes>
      </FavContext.Provider>
    </>
  );
};

export default Routers;
