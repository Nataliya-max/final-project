import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Home/Home';
// import Shop from './Shop/Shop';
// import Service from './Service/Service';
// import Cart from './Cart/Cart';

import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Service />} />
        <Route path="/cart" element={<Cart />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;


