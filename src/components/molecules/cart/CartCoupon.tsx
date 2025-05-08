import { IoIosArrowForward } from "react-icons/io";
import { IMAGES } from "../../../app/images/images";

const CartCoupon = () => {
  return (
    <>
      <section className="bg-white rounded-2xl p-3 cursor-pointer shadow-md">
        <button className="flex justify-between w-full cursor-pointer">
          <section className="leading-8">
            <p className="uppercase text-gray-400 text-[12px]  font-bold tracking-widest">
              Saving Corner
            </p>
            <p className="flex items-center">
              <img src={IMAGES.COUPON} className="w-5 h-5" />
              <span className="font-semibold text-[14px] ml-3 text-gray-600">
                Apply Coupon
              </span>
            </p>
          </section>
          <section className="mt-10">
            <IoIosArrowForward className="text-gray-400" />
          </section>
        </button>
      </section>
    </>
  );
};

export default CartCoupon;
