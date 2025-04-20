import React, { useEffect } from "react";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalCartItems, setCart } from "../../store/slices/cart.slice";
import { useNavigate } from "react-router-dom";
import { getCartAPI } from "../../services/cart.service";
import cart from "../../assets/cart.png";

function Navbar() {
  const totalItems = useSelector(selectTotalCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await getCartAPI();
        if (res.status === 200) {
          const data = await res.json();

          console.log(data);

          const cartItems = data.map((item) => ({
            id: item.product._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          }));

          dispatch(setCart(cartItems));
        }
      } catch (err) {
        console.error("Faiiled to fetch cart", err);
      }
    };

    fetchCart();
  }, []);


  return (
    <div className="navbar">
      <span className="storeName">Hyperlocal Stores</span>

      <div className="cart-div">
        <img
          src={cart}
          alt="cart"
          className="cartImg"
          onClick={() => navigate("/cart")}
        />
        {totalItems > 0 && <span className="totalItems">{totalItems}</span>}
      </div>
    </div>
  );
}

export default Navbar;
