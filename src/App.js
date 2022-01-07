
// import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AboutUs from "./Books/Pages/AboutUs";
import Navbar from './Shared/Components/Navigation/Navbar';
import Navbar_2 from './Shared/Components/Navigation/Navbar_2';
import Footer from "./Books/Components/Footer";



import HomePage from "./Books/Pages/HomePage";


function App() {
  return (
    <Router>
      <Navbar />
      <Navbar_2 />
      <Switch>
        <Route exact path="/" element={<HomePage />}>
          <HomePage />
        </Route>

        {/* <Route path="/:userId/places" exact>
<UserPlaces />
</Route> */}
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Redirect to="/" />
      </Switch>

      <Footer />
    </Router>


  );
}

export default App;
