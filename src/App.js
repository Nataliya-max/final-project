import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home/Home';
/*import Shop from './Shop/Shop';
import Service from './Service/Service';
import Cart from './Cart/Cart';*/
import Navbar from './Navbar/navbar';

function App() {
  return <Router>
    <Navbar/>
     <Home/>
  </Router>
  

}


export default App