import React from "react";
import "./App.css";
import Header from "./Components/header";
import Item from "./Components/Item";
import QuickView from "./Components/QuickView";
import ViewCart from "./Components/ViewCart";
// redux
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const List = useSelector((state) => state.List);
  const Cart = useSelector((state) => state.Cart);
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="text-right font-weight-bold pr-5 h4 text-black">
          <Link to="/cart" data-tip="View Cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="text-black-50"> {Cart.counter}</span>
          </Link>
        </div>
        <Route
          path="/"
          exact
          render={(props) => (
            <React.Fragment>
              <h3 className="h3">Items Available: {List.length}</h3>
              <br />
              <div className="container">
                <div className="row">
                  {List.map((item, index) => {
                    return (
                      <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        url={item.imgurl}
                        quantity={item.quantity}
                      />
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          )}
        />
        <Route path="/cart" exact component={ViewCart} />
        <Route path="/view/:id" exact component={QuickView} />
      </Router>
    </div>
  );
}

export default App;
