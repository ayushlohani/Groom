import React from "react";
import BagSummary from "../component/bagsummary";
import BagItem from "../component/bagitem";
import { useDispatch, useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";
import store from "../store/index";
import { UserAction } from "../store/userSlice";
function Profile() {
  const dispatch = useDispatch();
  const bagitem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const item = items.filter((item) => bagitem.indexOf(item.id) >= 0);
  const user = useSelector((store) => store.user);
  return (
    <div className="profile-sec" style={{ marginTop: "20vh", margin: "10vh" }}>
      <div className="m-2 profile-info">
        <div className="justify-content-center align-content-center">
          <img
            src={user.ProfilePic}
            className="profile-pic"
            style={{ width: "150px", height: "150px" }}
          ></img>
          <div className="m-5">
            <p className="m-3">{user.Name}</p>
            <hr />
            <p className="m-3">D.O.B:-{user.DOB}</p>
            <hr />
            <p className="m-3">Phone no.:-{user.PhoneNo}</p>
            <hr />
            <p className="m-3">Email:-{user.Gmail}</p>
            <hr />
            <p className="m-3">Rating:-{user.Rating}</p>
            <hr />
            <p className="m-3">Total Order:-{user.TotalOrder}</p>
            <hr />
          </div>
          <div>
            <button className="profile-edit-btn float-end px-5 py-2">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="dashboard">
          <BagSummary />
        </div>
        <div className="dashboard overflow-x-hidden">
          {bagitem.length === 0 ? (
            <center>
              <div className="bag-items-container">
                <GrCart size={100} />
                <h1>
                  <div>Empty</div>
                </h1>
              </div>
            </center>
          ) : (
            <div className="bag-items-container " style={{ width: "100%" }}>
              {item.map((item) => (
                <BagItem item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
