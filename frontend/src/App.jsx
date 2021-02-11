import React from "react";
import { Switch, Route } from "react-router-dom";

import { ShopApp } from "./pages/ShopApp";
import { Control } from "./pages/Control";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Checkout } from "./pages/Checkout";
import { ItemDetails } from "./pages/ItemDetails";
import { NavBar } from "./cmps/Header/NavBar";
import { Banner } from "./cmps/Header/Banner";
import { Footer } from "./cmps/Footer";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Banner />
      </header>
      <div className="App">
        <Switch>
          <Route component={Control} path="/control" />
          <Route component={Login} path="/login" />
          <Route component={ItemDetails} path="/details/:id?" />
          <Route component={Checkout} path="/checkout" />
          <Route component={ShopApp} path="/shop" />
          <Route component={Home} path="/" />
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
