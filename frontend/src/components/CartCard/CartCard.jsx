import React from "react";
import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
} from "../../store/slices/cart.slice";
import "./CartCard.scss";
import { decreaseCartApi, increaseCartApi } from "../../services/cart.service";

function CartCard({ id, name, price, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="cartCard">
      <div className="cartInfo">
        <p className="name">{name}</p>
        <p className="price">Rs.{price}</p>
      </div>

      <div className="quantity">
        <button
          type="button"
          className="quantity-buttons"
          onClick={async () => {
            dispatch(increase(id));
            await increaseCartApi(id);
          }}
        >
          +
        </button>
        {quantity}
        <button
          type="button"
          className="quantity-buttons"
          onClick={async () => {
            dispatch(decrease(id));
            await decreaseCartApi(id);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CartCard;
