import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Outlet,
} from 'react-router-dom';
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
import Navbar from './Navbar';
// import CartScreen from '../Screens/CartScreen';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

function RouteConfig() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" component={ProductScreen} />
          {/* <Route exact path="/Cart" component={CartScreen} /> */}
          <Route path="*" component={() => <h2>404 page not found</h2>} />
        </Switch>
      </main>
    </Router>
  );
}

export default RouteConfig;
