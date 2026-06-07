import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Monstera",
    price: 25
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 30
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Plant Shop</h1>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>

          <button
            onClick={() =>
              dispatch(addItem(product))
            }
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
