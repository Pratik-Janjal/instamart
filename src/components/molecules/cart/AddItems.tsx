import { Link } from "react-router-dom";

const AddItems = () => {
  return (
    <>
      <section className="bg-white rounded-2xl p-3 cursor-pointer shadow-sm mt-3 text-center">
        <p className="text-sm font-bold tracking-tighter">
          Missed Something?
          <Link to={"/home"} className="text-primary">
            Add more items
          </Link>
        </p>
      </section>
    </>
  );
};

export default AddItems;
