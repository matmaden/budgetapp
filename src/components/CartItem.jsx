import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{item.name}</h3>

      <p>Price: ${item.price}</p>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) =>
          dispatch(
            updateQuantity({
              id: item.id,
              quantity: Number(e.target.value)
            })
          )
        }
      />

      <button
        onClick={() =>
          dispatch(removeItem(item.id))
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
