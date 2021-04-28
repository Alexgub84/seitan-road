import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { ShopApp } from "./pages/ShopApp";
import { Control } from "./pages/Control";
import { About } from "./pages/About";
import { Supply } from "./pages/Supply";
import { OurStory } from "./pages/OurStory";
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
      <Router>
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
            <Route component={OurStory} path="/ourstory" />
            <Route component={About} path="/about" />
            <Route component={Supply} path="/supply" />
            <Route component={Home} path="/" />
          </Switch>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
