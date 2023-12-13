import { IoPersonCircle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const bag = useSelector((store) => store.bag);
  console.log(bag);
  return (
    <header>
      <div className="logo_container">
        <NavLink to="/" className="text-decoration-none fst-italic">
          <h2 className="logo">GroomUp</h2>
        </NavLink>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <Link
            to="/profile"
            className="text-black text-decoration-none action_container"
          >
            <IoPersonCircle size={40} />
            <span className="action_name">Profile</span>
          </Link>
        </div>

        <div className="action_container text-black">
          <CiHeart size={40} />
          <span className="action_name">Wishlist</span>
        </div>

        <div className="action_container">
          <Link
            to="/bag"
            className="text-black text-decoration-none action_container"
          >
            <IoBagHandleOutline size={40} />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
