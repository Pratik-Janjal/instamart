import { HiOutlineSearch } from "react-icons/hi";


const SearchBtn = () => {
  return (
    <>
    <section className="relative">
   <input
    type="text"
    placeholder="Search for Dry fruits"
    className="text-sm font-md p-3.5 pr-10 border border-gray-300 rounded-xl mt-4 outline-none w-full bg-white"
  />
   <HiOutlineSearch className="absolute top-1/2 right-4 transform -translate-y-1 text-gray-600 text-xl" />
 </section>
    </>
  )
}

export default SearchBtn