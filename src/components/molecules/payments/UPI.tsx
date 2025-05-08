import { IMAGES } from "../../../app/images/images";

const UPI = () => {
  return (
    <>
      <section>
        <div className="flex space-x-2 items-center  tracking-tighter">
          <img src={IMAGES.UPI} className="w-10 h-5" />
          <h1 className="font-bold text-gray-700">Pay by any UPI App</h1>
        </div>
        <section className="flex mt-3 bg-white px-4 py-4 rounded-2xl space-x-4">
          <div>
            <p className="w-8 border border-gray-400 rounded-lg text-center font-bold text-primary text-lg">
              +
            </p>
          </div>
          <div>
            <h2 className="font-bold text-primary tracking-tighter">
              Add New UPI ID
            </h2>
            <p className="text-gray-500 text-sm">
              You need to have a registered UPI ID
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default UPI;
