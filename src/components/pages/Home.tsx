import Header from "../organisms/header/Header";
import FinalProducts from "../organisms/products/FinalProducts";

const Home = () => {
  return (
    <>
      <section className="space-y-6 mx-auto max-w-[1000px]">
        <Header />
        <FinalProducts />
      </section>
    </>
  );
};

export default Home;
