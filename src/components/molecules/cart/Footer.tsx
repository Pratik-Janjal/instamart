const Footer = () => {
  return (
    <>
      <section className="mt-6 mb-4">
        <h2 className="text-[16px] font-bold text-gray-700 pl-2 tracking-tighter">
          Review your order to avoid cancellations
        </h2>
        <section className="bg-white rounded-2xl p-3 cursor-pointer shadow-sm mt-3 flex justify-center ">
          <div className="text-sm font-bold leading-8">
            <p className="text-gray-500">
              <span className="uppercase text-pink-700">Note: </span>
              Order cannot be cancelled and are non-refundable once packed for
              delivery
            </p>
            <p className="underline decoration-dashed text-primary">
              Read Cancellation Policy
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;
