import { useDispatch, useSelector } from "react-redux";
import BagAction from "../store/bagslice";
const HomeItem = ({ item }) => {
  const bagitems = useSelector((store) => store.bag);
  const elementfound = bagitems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(BagAction.addToBag(item.id));
  };
  const handleRemovefromBag = () => {
    dispatch(BagAction.removefromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementfound ? (
          <button
            className="btn btn-danger btn-add-bag"
            onClick={handleRemovefromBag}
          >
            Remove from Bag
          </button>
        ) : (
          <button className="btn-add-bag" onClick={handleAddToBag}>
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItem;
