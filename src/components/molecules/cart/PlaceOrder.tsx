import { Link } from "react-router-dom";

const PlaceOrder = () => {
  return (
    <>
      <Link to={"/payments"}>
        <button className="text-center">
          <section className="px-4 py-4 fixed  w-[75%] bottom-2 bg-primary rounded-xl ml-3 text-white font-bold text-center z-10">
            Place Order
          </section>
        </button>
      </Link>
    </>
  );
};

export default PlaceOrder;
