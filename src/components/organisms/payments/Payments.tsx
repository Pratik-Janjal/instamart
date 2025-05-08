import PaymentsNavbar from "../../molecules/navbar/PaymentsNavbar";
import Address from "../../molecules/payments/Address";
import CDC from "../../molecules/payments/CDC";
import MOP from "../../molecules/payments/MOP";
import POD from "../../molecules/payments/POD";
import UPI from "../../molecules/payments/UPI";

const Payments = () => {
  return (
    <>
      <section className="bg-[#EFEFEF] pt-15 pb-5  mx-auto max-w-[1000px]">
        <PaymentsNavbar />
        <Address />
        <section className="m-5 space-y-6">
          <POD />
          <UPI />
          <CDC />
          <MOP />
        </section>
      </section>
    </>
  );
};

export default Payments;
