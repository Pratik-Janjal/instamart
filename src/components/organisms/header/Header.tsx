import SearchBtn from "../../atoms/SearchBtn"
import Navbar from "../../molecules/navbar/Navbar"
import { IMAGES } from "../../../app/images/images" 

const Header = () => {
  return (
    <> 
    <section style={{ backgroundImage: `url(${IMAGES.BGIMG})` }} className="rounded-md">
    <section className="mx-5 pt-4 w-100% pb-0.5" >
      <Navbar/>
      <SearchBtn/>
    </section>
    </section>
    </>
  )
}

export default Header