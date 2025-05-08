import { useContext, useState } from "react";
import { IMAGES } from "../../../app/images/images";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FavContext } from "../../../app/routes/Routers";

const CatProduct = () => {
  const [add, setAdd] = useState<number>(0);
  const { fav, handleFavourites } = useContext(FavContext);

  return (
    <>
      <section className="pt-4 w-[90%] pb-2">
        <div className="flex rounded-md justify-between shadow-[0px_1px_2px_rgba(0,0,0,0.25)]">
          <p className="bg-primary font-bold text-white text-[10px] p-[4px] h-[20%] rounded-tl-md rounded-ee-md">
            <p>21%</p>
            <p>OFF</p>
          </p>
          <img src={IMAGES.CARROT} className="w-30 h-32" />
          <p onClick={handleFavourites} className="m-1">
            {fav ? (
              <p className="text-red-500">
                <FaHeart />
              </p>
            ) : (
              <p className=" text-red-500">
                <FaRegHeart />
              </p>
            )}
          </p>
        </div>
        <p className="text-[10px] font-bold text-gray-500 mt-4">16 MINS</p>
        <h3 className="font-bold text-[14px] text-gray-800">Carrot</h3>
        <p className="py-5 text-xs text-gray-500 font-bold">
          Crunchy and sweet, great for salads or cooking
        </p>
        <hr className="text-gray-300" />
        <p className="text-[12px] text-gray-500 font-bold mt-2">500 g</p>
        <h1 className="text-[14px] font-bold">₹23</h1>
        <div className="border w-full rounded-md py-1 text-sm font-bold border-gray-300 mt-2 text-center">
          {add === 0 ? (
            <span
              onClick={() => setAdd((prev) => prev + 1)}
              className="text-green-600"
            >
              ADD
            </span>
          ) : (
            <>
              <div className="flex justify-between px-2 text-green-600">
                <button onClick={() => setAdd((prev) => prev - 1)}>-</button>
                <div>{add}</div>
                <button onClick={() => setAdd((prev) => prev + 1)}>+</button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CatProduct;
