import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const PaymentsNavbar = () => {
  return (
    <>
      <section className=" border-b fixed top-0 py-3 max-w-[1000px] w-full bg-white  border-b-gray-200">
        <nav className="flex items-center space-x-4">
          <div>
            <Link to={"/cart"}>
              <GoArrowLeft className="w-10 h-7 text-gray-500" />
            </Link>
          </div>
          <div>
            <h1 className="text-md font-bold tracking-tighter">
              Payments Options
            </h1>
            <p className="text-xs font-medium text-gray-500 tracking-tighter">
              1 item. Total:₹99
            </p>
          </div>
        </nav>
      </section>
    </>
  );
};

export default PaymentsNavbar;
