import { useState } from "react";
import { IMAGES } from "../../../app/images/images";

const CartList = () => {
  const [numOfItems, setNumOfItems] = useState(1);
  const handleIncrease = () => {
    setNumOfItems(numOfItems + 1);
  };
  const handleDecrease = () => {
    if (numOfItems === 1) return;
    setNumOfItems(numOfItems - 1);
  };
  return (
    <>
      <section className="mt-6 mb-4">
        <h2 className="text-[16px] font-bold text-gray-700 pl-2 tracking-tighter">
          Review your Order
        </h2>
        <section className="bg-white rounded-2xl p-3 cursor-pointer shadow-sm mt-3">
          <div className="flex justify-between">
            <div className="font-bold">
              <p className="text-[12px] text-gray-500">Delivery in</p>
              <p className="text-md">36 Mins</p>
            </div>
            <div className="font-bold">
              <p className="text-[12px] text-gray-400">1 item</p>
            </div>
          </div>
          <hr className="text-gray-200 my-3.5" />
          <div className="flex justify-between">
            <div className="flex">
              <img src={IMAGES.DRINKS} className="w-14 h-14" />
              <p className="text-sm ml-2.5 font-semibold">
                Drinks - Can coke
                <br />
                <span className="text-[12px] text-gray-400">100ml</span>
              </p>
            </div>
            <div className="flex items-center">
              <button className="mr-10 border border-gray-300 px-2 rounded-md font-bold shadow-md">
                <div className="text-green-500 space-x-5 py-0.5 ">
                  <span>
                    <button onClick={handleDecrease} className="">
                      -
                    </button>
                  </span>
                  <span>{numOfItems}</span>
                  <span>
                    <button onClick={handleIncrease}>+</button>
                  </span>
                </div>
              </button>
              <p className="text-sm">
                <p className="text-gray-400 line-through">₹20</p>
                <p className="font-bold">₹18</p>
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default CartList;
