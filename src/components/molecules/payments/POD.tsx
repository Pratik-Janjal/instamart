import { IMAGES } from "../../../app/images/images";

const POD = () => {
  return (
    <>
      <section>
        <h1 className="font-bold text-gray-700  tracking-tighter">
          Pay on Delivery
        </h1>
        <section className="flex mt-3 bg-white px-4 py-4 rounded-2xl space-x-4">
          <div>
            <img
              src={IMAGES.COD}
              className="w-9 border border-gray-400 rounded-lg"
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-700">Cash/Pay on Delivery</h2>
            <p className="text-gray-500 text-sm">
              Pay cash at the time of delivery.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default POD;
