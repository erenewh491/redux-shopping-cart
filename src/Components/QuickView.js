/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./QuickView.css";
import AddToCart from "./AddCartButtonProduct";
import { useSelector } from "react-redux";

export default function AddCart() {
  const List = useSelector((state) => state.List);
  var id =
    window.location.search &&
    window.location.search.slice(1, window.location.search.length);

  const Found = List.findIndex((item) => item.id === id);
  console.log(Found);
  if (Found === -1) return <h1>Error Not found</h1>;
  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src={List[Found].imgurl} alt={List[Found].title} />
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{List[Found].title}</h3>
              <p className="product-description">{List[Found].description}</p>
              <h4 className="price">
                current price: <span>Rs.{List[Found].price}</span>
              </h4>
              <div className="action">
                <AddToCart
                  id={List[Found].id}
                  quantity={List[Found].quantity}
                />
                <br />
                <br />
                {List[Found].quantity < 1 ? (
                  <h3 style={{ color: "red" }}>Out of Stock</h3>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
