import ProductList from "../../molecules/products/ProductList"
import { IMAGES } from "../../../app/images/images";

const FinalProducts = () => {
   const titles = ["Grocery & Kitchen","Snacks & Drinks", "Beauty & Personal Care", "Household Essential"];
  return (
   <>
       <ProductList title={titles[0]} img={IMAGES.PRODUCT}/>
       <ProductList title={titles[1]} img={IMAGES.DRINKS}/>
       <ProductList title={titles[2]} img={IMAGES.BEAUTY}/>
       <ProductList title={titles[3]} img={IMAGES.HOUSEHOLD}/>
   </>
)
}

export default FinalProducts