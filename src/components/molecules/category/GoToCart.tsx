import { Link } from "react-router-dom";

const GoToCart = () => {
  return (
    <>
      <Link to={"/cart"}>
        <button className="text-center">
          <section className="px-4 py-4 absolute  w-[75%] bottom-1 bg-primary rounded-xl ml-45 text-white font-bold text-center z-10">
            Go to Cart
          </section>
        </button>
      </Link>
    </>
  );
};

export default GoToCart;
