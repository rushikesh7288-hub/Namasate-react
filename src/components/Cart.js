import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const hableClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl ">Cart</h1>
      <button
        className="bg-black p-2 m-2 text-white rounded-lg"
        onClick={hableClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 shadow-sm justify-between bg-gray-100 m-auto">
        <ItemList items={cartItems} />
        {cartItems.length === 0 && <h1>
            your cart is empty </h1>}
      </div>
    </div>
  );
};
export default Cart;
