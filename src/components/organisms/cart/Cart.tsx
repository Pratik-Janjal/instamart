import AddItems from "../../molecules/cart/AddItems";
import BillDetails from "../../molecules/cart/BillDetails";
import CartCoupon from "../../molecules/cart/CartCoupon";
import CartList from "../../molecules/cart/CartList";
import Footer from "../../molecules/cart/Footer";
import PlaceOrder from "../../molecules/cart/PlaceOrder";
import CartNavbar from "../../molecules/navbar/CartNavbar";

const Cart = () => {
  return (
    <>
      <section className="bg-[#EFEFEF] pt-18  pb-10  relative mx-auto max-w-[1000px]">
        <CartNavbar />
        <section className="px-4">
          <CartCoupon />
          <CartList />
          <AddItems />
          <BillDetails />
          <Footer />
          <PlaceOrder />
        </section>
      </section>
    </>
  );
};

export default Cart;
