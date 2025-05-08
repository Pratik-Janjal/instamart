import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CartNavbar = () => {
  return (
    <>
      <section className="px-4 py-4 fixed max-w-[1000px] w-full top-0  bg-gray-50 flex items-center justify-between ">
        <nav className="flex items-center">
          <button>
            <Link to={"/category"}>
              <IoIosArrowBack className="w-5 h-5 text-gray-800" />
            </Link>
          </button>
          <p className="font-bold ml-3">Your Cart</p>
        </nav>
        <nav>
          <FiMoreVertical className="text-xl text-gray-400" />
        </nav>
      </section>
    </>
  );
};

export default CartNavbar;
