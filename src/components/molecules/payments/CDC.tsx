const CDC = () => {
  return (
    <>
      <section>
        <div className="flex space-x-2 items-center tracking-tighter">
          <h1 className="font-bold text-gray-700">Credit & Debit Cards</h1>
        </div>
        <section className="flex mt-3 bg-white px-4 py-4 rounded-2xl space-x-4">
          <div>
            <p className="w-8 border border-gray-400 rounded-lg text-center font-bold text-primary text-lg">
              +
            </p>
          </div>
          <div>
            <h2 className="font-bold text-primary tracking-tighter">
              Add New Card
            </h2>
            <p className="text-gray-500 text-sm">Save and Pay via Cards</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default CDC;
