import { useSelector } from "react-redux";

function BagSummary() {
  const bagitem = useSelector((store) => store.bag);
  let totalmrp = 0;
  let totaldiscount = 0;
  const items = useSelector((store) => store.items);
  bagitem.map((data) =>
    items.forEach((item) => {
      if (item.id === data) {
        totalmrp += item.original_price;
        totaldiscount += item.original_price - item.current_price;
      }
    })
  );
  const bagsummary = {
    totalItem: bagitem.length,
    totalMRP: totalmrp,
    totalDiscount: totaldiscount,
    convenience_fee: 99,
    finalPayment: totalmrp - totaldiscount + 99,
  };
  if (totalmrp === 0) {
    bagsummary.finalPayment = 0;
    bagsummary.convenience_fee = 0;
  }
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagsummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagsummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagsummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            ₹{bagsummary.convenience_fee}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{bagsummary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}
export default BagSummary;
