import CatNavbar from "../../molecules/navbar/CatNavbar";
import SideBar from "../../molecules/navbar/SideBar";
import CatProducts from "../../molecules/products/CatProducts";

const Category = () => {
  return (
    <>
      <section className="mx-auto max-w-[1000px] mb-2 bg-gray-100">
        <CatNavbar />
        <section className="flex w-full ">
          <SideBar />
          <CatProducts />
        </section>
      </section>
    </>
  );
};

export default Category;
