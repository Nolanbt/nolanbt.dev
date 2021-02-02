import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path={["/"]} component={Home}/>
          {/* <Route exact path={"/projects"} component={Projects}/>
          <Route exact path={"/contact"} component={Contact}/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;