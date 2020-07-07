import React from "react";
import { AddToCart } from "../redux/Actions";
import { useDispatch } from "react-redux";

export default function AddCart(props) {
  const dispatch = useDispatch();
  if (props.quantity < 1) return <noscript></noscript>;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      // eslint-disable-next-line no-script-url
      href="javascript:void(0)"
      data-tip="Add to Cart"
      onClick={() => {
        if (props.quantity > 0) dispatch(AddToCart(props.id));
      }}
    >
      <i className="fa fa-shopping-cart"></i>
    </a>
  );
}
