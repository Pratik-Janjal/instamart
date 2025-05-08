import Product from "../../atoms/product/Product";
import { IMAGES } from "../../../app/images/images";

const SideBar = () => {
  return (
    <nav className="w-[22%]  text-center flex justify-center rounded-tr-xl mt-16 bg-white shadow-xd overflow-y-scroll h-[100vh] hide-scrollbar">
      <section className="space-y-12">
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
        <Product img={IMAGES.PRODUCT} className="w-10 ml-5" />
      </section>
    </nav>
  );
};

export default SideBar;
