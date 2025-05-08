const BillDetails = () => {
  return (
    <>
      <section className="mt-6 mb-4">
        <h2 className="text-[16px] font-bold text-gray-700 pl-2 tracking-tighter">
          Bill Details
        </h2>
        <section className="bg-white rounded-2xl p-3 cursor-pointer shadow-sm mt-3 font-medium text-[14.5px]">
          <div className="flex justify-between leading-7">
            <div className="text-gray-500 ">
              <p>Item Total</p>
              <p className="underline decoration-dashed">Handling Fee</p>
            </div>
            <div className="flex flex-col  items-end font-bold text-gray-700">
              <p className="flex">
                <div className=" text-gray-500 line-through mr-2">₹500</div>
                <div>₹480</div>
              </p>
              <div>₹9.80</div>
            </div>
          </div>
          <hr className="text-gray-200 my-3.5" />
          <div className="flex justify-between text-gray-500 ">
            <p>Delivery Tip</p>
            <p className="text-primary  font-bold">Add a tip</p>
          </div>
          <hr className="text-gray-200 my-3.5" />
          <div className="flex justify-between leading-7">
            <div className="text-gray-500 ">
              <p className="underline decoration-dashed">
                Delivery Partner fee
              </p>
              <p className="underline decoration-dashed">GST and Charges</p>
            </div>
            <div className="flex flex-col  items-end font-bold">
              <p className="flex">
                <div className=" text-gray-500 line-through mr-2">₹16</div>
                <div className="text-green-600">FREE</div>
              </p>
              <div className="text-gray-700">₹1.72</div>
            </div>
          </div>
          <hr className="text-gray-200 my-3.5" />
          <div className="flex justify-between">
            <p className="font-bold">To Pay</p>
            <p>
              <span className="text-gray-500 line-through mr-2">₹567</span>
              <span className="font-bold">₹678</span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default BillDetails;
