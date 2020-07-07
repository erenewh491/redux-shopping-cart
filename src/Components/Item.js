/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from "react";
import "./Item.css";
import AddCartButton from "./AddCartButton";
import { Link } from "react-router-dom";
export class Item extends Component {
  render() {
    const { id, title, price, url, quantity } = this.props;
    return (
      <div className="col-md-3 col-sm-6 mt-2">
        <div className="product-grid6">
          <div className="product-image6">
            <img
              className="pic-1"
              src={process.env.PUBLIC_URL + url}
              alt={title}
            />
            {quantity < 1 ? (
              <img
                className="outofstock"
                src="/dist/outofstock.png"
                alt="out of stock"
              />
            ) : (
              ""
            )}
          </div>
          <div className="product-content">
            <h3 className="title">{title}</h3>
            <div className="price">Rs. {price}</div>
          </div>
          <ul className="social">
            <li>
              <Link to={"/view/id?" + id} data-tip="Quick View">
                <i className="fa fa-search"></i>
              </Link>
            </li>
            <li>
              <AddCartButton id={id} quantity={quantity} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Item;
