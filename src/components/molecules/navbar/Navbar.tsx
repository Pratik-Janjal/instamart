import { IMAGES } from "../../../app/images/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <div className="flex gap-2">
          <button className="bg-primary text-white px-2.5 rounded-[10px] ">
            <p className="font-bold text-[20px]">16</p>
            <p className="text-[10px] font-bold">MINS</p>
          </button>
          <h3 className="text-[13px] font-bold pt-1.5">Delivery to Other</h3>
        </div>
        <div>
          <Link to={"/profile"}>
            <img src={IMAGES.PROFILE} className="w-10"></img>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
