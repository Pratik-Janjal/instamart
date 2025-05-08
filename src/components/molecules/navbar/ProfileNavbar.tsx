import { PiBagSimpleBold } from "react-icons/pi";
import { IMAGES } from "../../../app/images/images";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHelpBuoy } from "react-icons/io";

const ProfileNavbar = () => {
  return (
    <>
      <nav className=" fixed top-0 w-full bg-white">
        <div className="shadow-[0px_1px_4px_-1px_rgba(0,0,0,0.3)]  py-2 flex justify-between items-center font-bold">
          <div className="flex items-center">
            <Link to={"/home"}>
              <img src={IMAGES.SWIGGYLOGO} className="w-30 h-15" />
            </Link>
            <p className="uppercase text-sm ">My account</p>
          </div>
          <div className="flex space-x-12 pr-6">
            <Link to={"/profile"} className="flex items-center space-x-2.5">
              <PiBagSimpleBold className="w-5 h-5" />
              <span className="hover:text-primary">Swiggy Corporate</span>
            </Link>

            <Link to={"/profile"} className="flex items-center space-x-2.5">
              <IoSearch className="w-5 h-5" />
              <span className="hover:text-primary">Search</span>
            </Link>

            <Link to={"/profile"} className="flex items-center space-x-2.5">
              <BiSolidOffer className="w-5 h-5" />
              <span className="hover:text-primary">Offers</span>
            </Link>

            <Link to={"/profile"} className="flex items-center space-x-2.5">
              <IoMdHelpBuoy className="w-5 h-5" />
              <span className="hover:text-primary">Help</span>
            </Link>

            <Link to={"/profile"} className="flex items-center space-x-2.5">
              <IoPersonOutline className="w-5 h-5" />
              <span className="hover:text-primary">Name</span>
            </Link>

            <Link to={"/profile"} className="flex items-center space-x-2.5">
              <LuShoppingCart className="w-5 h-5" />
              <span className="hover:text-primary">Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProfileNavbar;
