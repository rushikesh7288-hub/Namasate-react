import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { useContext } from "react";
import { useSelector } from "react-redux";
const Headers = () => {
  const [btnName, setBtnReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  //selector
  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem)

  useEffect(() => {}, []);
  const onlineStatus = useOnlineStatus();
  return (
    <nav className="flex justify-between bg-pink-100 shadow-lg  sticky m-auto">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 px-4">
          <li className="px-4">Online Status:-{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/conatct">Contact US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart" className="text-xl font-bold">
              Cart({cartItem.length} items)
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login"
                ? setBtnReact("Logout")
                : setBtnReact("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </nav>
  );
};
export default Headers;
