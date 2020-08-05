import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../styling/App.css";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";
import Default from "./Default";
import { ThemeContextProvider } from "./contexts/ThemeContexts";
import Detail from "./Detail";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/" component={ProductList} />

          <Route path="/product" component={Product} />

          <Route path="/detail" component={Detail} />

          <ThemeContextProvider>
            <Route path="/cart" component={Cart} />
          </ThemeContextProvider>

          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}
