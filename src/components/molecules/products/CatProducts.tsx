import CatProduct from "../../atoms/product/CatProduct";

const CatProducts = () => {
  return (
    <>
      <section className="shadow-xl w-[78%] mt-16  ml-2 rounded-tl-xl pt-2 bg-white overflow-y-scroll h-[100vh] hide-scrollbar">
        <p className="text-sm font-medium text-gray-700 mb-4 pl-2">
          <span className=" text-gray-900 font-bold">109 items</span> in Fresh
          Vegetables
        </p>
        <hr className="text-gray-300" />
        <section className="grid grid-cols-2 pl-2 ">
          <CatProduct />
          <CatProduct />
          <CatProduct />
          <CatProduct />
          <CatProduct />
          <CatProduct />
          <CatProduct />
          <CatProduct />
        </section>
      </section>
    </>
  );
};

export default CatProducts;
