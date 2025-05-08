import { CiBank } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";

const MOP = () => {
  return (
    <>
      <section>
        <div className="flex space-x-2 items-center tracking-tighter">
          <h1 className="font-bold text-gray-700">More payments Options </h1>
        </div>
        <section className="mt-3 bg-white px-4 py-4 rounded-2xl space-y-4">
          <div className="flex space-x-4">
            <div>
              <p className="w-8 border border-gray-400 rounded-lg text-center font-bold text-lg p-1.5">
                <LiaWalletSolid />
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-700 tracking-tighter">
                Wallets
              </h2>
              <p className="text-gray-500 text-sm">
                PhonePe, Amazon Pay & more
              </p>
            </div>
          </div>
          <hr />
          <div className="flex space-x-4">
            <div>
              <p className="w-8 border border-gray-400 rounded-lg text-center font-bold text-lg p-1.5">
                <CiBank />
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-700 tracking-tighter">
                Netbanking
              </h2>
              <p className="text-gray-500 text-sm">
                Select form a list of banks
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MOP;
