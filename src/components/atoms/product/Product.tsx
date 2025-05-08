import { Link } from "react-router-dom";

interface props {
  img: string;
  className: string;
}

const Product: React.FC<props> = ({ img, className }) => {
  return (
    <>
      <section>
        <Link to={"/category"}>
          <section className="w-25 space-y-2 text-center mt-5">
            <img src={img} className={className} />
            <p className="text-[12px] font-bold">Fresh Vegetables</p>
          </section>
        </Link>
      </section>
    </>
  );
};

export default Product;
