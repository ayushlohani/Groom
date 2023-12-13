import BagItem from "../component/bagitem";
import BagSummary from "../component/bagsummary";
import { useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";
function Bag() {
  const bagitem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalitem = items.filter((item) => bagitem.indexOf(item.id) >= 0);
  return (
    <>
      <div className="bag-page">
        {bagitem.length === 0 ? (
          <div className="bag-items-container">
            <center>
              <GrCart size={100} />
              <h1>
                <div>Empty</div>
              </h1>
            </center>
          </div>
        ) : (
          <div className="bag-items-container">
            {finalitem.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
        )}
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </>
  );
}
export default Bag;
