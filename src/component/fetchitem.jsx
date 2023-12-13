import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  /*useEffect(() => {
    if (fetchStatus.fetchdone) return;}
    //const controller = new AbortController();
    //const signal = controller.signal;

    fetch("https://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [fetchStatus]);*/
  return <></>;
}
export default FetchItems;
