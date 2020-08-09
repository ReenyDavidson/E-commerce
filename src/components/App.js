import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../styling/App.css";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";
import Default from "./Default";
import Detail from "./Detail";
import Footer from "./Footer";
import Modal from "./Modal";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/" component={ProductList} />

          <Route path="/product" component={Product} />

          <Route path="/detail" component={Detail} />

          <Route path="/cart" component={Cart} />

          <Route component={Default} />
        </Switch>
        <Modal />

        <Footer />
      </React.Fragment>
    );
  }
}
