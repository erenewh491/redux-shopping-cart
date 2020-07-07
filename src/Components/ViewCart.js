/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ViewCart.css";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../redux/Actions";
import { Link } from "react-router-dom";

export default function ViewCart() {
  const List = useSelector((state) => state.List);
  const Cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  if (Cart.counter < 1) return <h1>No Items in the cart</h1>;
  var Added = [];

  Cart.items.map((id, index) => {
    var Found = Added.findIndex((element) => element.id === id);
    if (Found === -1) return Added.push({ id, quantity: 1 });
    else Added[Found].quantity += 1;
  });
  var total = 0;

  const HandleClick = (id) => {
    const fnd = Cart.items.indexOf(id);
    if (fnd === -1) return console.log("Not found");
    dispatch(RemoveFromCart(fnd, id));
  };
  return (
    <div>
      <br />
      <br />
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col" className="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {Added.map((item, index) => {
                    var listid = List.findIndex(
                      (element) => element.id === item.id
                    );
                    if (listid !== -1) {
                      total += item.quantity * List[listid].price;
                      return (
                        <tr key={item.id}>
                          <td>
                            <img
                              src={List[listid].imgurl}
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                          <td>{List[listid].title}</td>
                          <td>{item.quantity}</td>
                          <td>{item.quantity * List[listid].price}</td>
                          <td className="text-right">
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => HandleClick(item.id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    } else console.log("Not found: " + item.id);
                  })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td className="text-right">
                      <strong>Rs. {total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button className="btn btn-block btn-light">
                    Continue Shopping
                  </button>
                </Link>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <button className="btn btn-lg btn-block btn-success text-uppercase">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
