import { IMAGES } from "../../../app/images/images";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const CatNavbar = () => {
  return (
    <>
      <section className="px-5 py-2 flex justify-between items-center  shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] fixed  max-w-[1000px] w-full top-0  bg-white">
        <nav className="flex gap-2">
          <button>
            <Link to={"/home"}>
              <HiOutlineArrowLeft className="w-5 h-5 text-gray-800" />
            </Link>
          </button>
          <img src={IMAGES.PRODUCT} className="w-10 h-10 ml-3 rounded-md"></img>
          <div>
            <h2 className="font-bold">Fresh Vegetables</h2>
            <p className="text-xs text-gray-500">601 items</p>
          </div>
        </nav>
        <nav className="top-1/2">
          <HiOutlineSearch className="mr-12 w-12 h-5 text-gray-600" />
        </nav>
      </section>
    </>
  );
};

export default CatNavbar;
