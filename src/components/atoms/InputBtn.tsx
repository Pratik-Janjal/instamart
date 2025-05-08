interface props {
  inputs : string
}

const InputBtn:React.FC<props> = ({inputs}) => {
  return (
   <>
   <div className="relative">
    <input type="text" id={inputs} className="block px-3.5 pb-10 w-100 mt-5 text-sm text-gray-900 bg-transparent  border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder="" />

    <label htmlFor={inputs} className="absolute ml-5  text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] bg-white px-4 peer-focus:px-2 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
    {inputs}
    </label>
</div>
</>
  )
}

export default InputBtn;