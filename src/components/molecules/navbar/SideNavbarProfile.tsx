import { FaLocationPin } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { MdFavorite, MdOutlinePayment } from "react-icons/md";
import { SiSwiggy } from "react-icons/si";
import { Link } from "react-router-dom";

const SideNavbarProfile = () => {
  return (
    <>
      <nav className="font-bold bg-[#F2F0EF] m-12 pt-5 pb-5">
        <ul>
          <li className="ml-5 pr-20 py-5 pl-4 hover:bg-white">
            <Link to={"orders"} className="flex items-center space-x-3">
              <span>
                <HiShoppingBag className="w-7 h-7" />
              </span>
              <span>Orders</span>
            </Link>
          </li>
          <li className="ml-5  pr-20 py-5 pl-4 hover:bg-white">
            <Link to={"swiggy-ones"} className="flex items-center space-x-3">
              <span>
                <SiSwiggy className="w-7 h-7" />
              </span>
              <span>Swiggy Ones</span>
            </Link>
          </li>
          <li className="ml-5  pr-20 py-5 pl-4 hover:bg-white">
            <Link to={"/favourites"} className="flex items-center space-x-3 ">
              <span>
                <MdFavorite className="w-7 h-7" />
              </span>
              <span>Favourites</span>
            </Link>
          </li>
          <li className="ml-5  pr-20 py-5 pl-4 hover:bg-white">
            <Link className="flex items-center space-x-3">
              <span>
                <MdOutlinePayment className="w-7 h-7" />
              </span>
              <span>Payments</span>
            </Link>
          </li>
          <li className="ml-5  pr-20 py-5 pl-4 hover:bg-white">
            <Link className="flex items-center space-x-3">
              <span>
                <FaLocationPin className="w-7 h-7" />
              </span>
              <span>Addresses</span>
            </Link>
          </li>
          <li className="ml-5  pr-20 py-5 pl-4 hover:bg-white">
            <Link className="flex items-center space-x-3">
              <span>
                <IoIosSettings className="w-7 h-7 " />
              </span>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideNavbarProfile;
