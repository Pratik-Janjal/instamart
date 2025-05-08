import ProfileNavbar from "../../molecules/navbar/ProfileNavbar";
import { FavContext } from "../../../app/routes/Routers";
import { useContext } from "react";
import CatProduct from "../../atoms/product/CatProduct";

const Favourite = () => {
  const { fav } = useContext(FavContext);
  return (
    <>
      <ProfileNavbar />
      <section className="mt-30 w-[30%]  shadow-md ml-5 pl-5">
        {fav ? <CatProduct /> : ""}
      </section>
    </>
  );
};

export default Favourite;
