import { Link } from "react-router-dom";
import { IMAGES } from "../../../app/images/images"
import InputBtn from "../../atoms/InputBtn"
import LoginBtn from "../../atoms/LoginBtn"


const LoginPage = () => {

  const Auth = "Login";
  const Inputs = "Phone Number"
  return ( 
    <div className="flex justify-center items-center h-screen">
      <section className="px-10 py-20 shadow-2xl">
      <section className="flex font-semibold gap-20 w-100 justify-between pb-2">
         <div>
            <h1 className="text-3xl pb-2">{Auth}</h1>
            <p>or <Link to="/signup" className="text-primary cursor-pointer">create an account</Link></p>
         </div>
         <div>
            <img src={IMAGES.BURGER} alt="" className="w-20 h-20 rounded-full"/>
         </div>
      </section>
      <hr className="w-1/10 pb-5"/>
      <InputBtn  inputs = {Inputs}/>
      <LoginBtn auth={Auth}/>
      <p className="text-xs tracking-wide">By clicking on Login, I accept the <span className="font-semibold">Terms & Conditions </span> &  
      <span className="font-semibold"> Privacy <br/> Policy</span></p>
      </section>
    </div>
  )
}

export default LoginPage