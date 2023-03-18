import Header from "./Header";
import Footer from "./Footer";

function Order() {
  return (
    <div className="Order">
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1>Order</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Order;
