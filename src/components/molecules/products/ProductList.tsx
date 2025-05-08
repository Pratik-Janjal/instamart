import Product from "../../atoms/product/Product";

const ProductList = ({ title, img }) => {
  return (
    <>
      <section className="mb-15 mx-5">
        <section className="flex gap-4 items-center">
          <h2 className="text-xs font-bold text-gray-600 tracking-widest uppercase">
            {title}
          </h2>
          <h1 className="border border-gray-200 w-[70%]"></h1>
        </section>
        <section className="grid grid-cols-7">
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
          <Product img={img} />
        </section>
      </section>
    </>
  );
};

export default ProductList;
