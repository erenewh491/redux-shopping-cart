import React from "react";
import { AddToCart } from "../redux/Actions";
import { useDispatch } from "react-redux";

export default function AddCart(props) {
  const dispatch = useDispatch();
  if (props.quantity < 1) return <noscript></noscript>;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <button
      className="add-to-cart btn btn-default"
      type="button"
      onClick={() => {
        if (props.quantity > 0) dispatch(AddToCart(props.id));
      }}
    >
      add to cart
    </button>
  );
}
