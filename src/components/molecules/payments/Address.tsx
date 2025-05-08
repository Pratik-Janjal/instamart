import { RiLinksLine } from "react-icons/ri";

const Address = () => {
  return (
    <>
      <section className="bg-white py-6 px-4 text-sm space-y-2 rounded-b-3xl ">
        <section className="flex space-x-4">
          <div className="text-purple-500 font-bold">
            <RiLinksLine />
          </div>
          <div className="space-y-1">
            <p className="space-x-3">
              <span>Instamart</span>
              <span className="text-gray-500">
                | Property bearing no 449/25/01, H Siddaiah Road, Wilson Garden,
                Bangalore - 560027
              </span>
            </p>
            <p className="space-x-3">
              <span>OTHER</span>
              <span className="text-gray-500">
                | Chamrajpet, Bengaluru, Karnataka, India
              </span>
            </p>
          </div>
        </section>

        <section className="pl-7.5 tracking-tighter">
          <div>
            <span className="text-gray-500">Delivery In : </span>
            <span className="font-bold">49 mins</span>
          </div>
        </section>
      </section>
    </>
  );
};

export default Address;
