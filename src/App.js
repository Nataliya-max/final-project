
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import Home from './Home/Home';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Navbar from './Navbar/Navbar';
import ShopItem from './Shop/ShopItem';
import { DigitalKit } from './DigitalKit/DigitalKit';
import LoaderPage from './Loader/LoaderPage';
import { useState, useEffect } from 'react';


function App() {

  const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <Navbar />
       { stateLoader && <LoaderPage/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop"element={<Shop/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/digital" element={<DigitalKit/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:title" element={<ShopItem/>}/>
      </Routes>
    </Router>
  );
}

export default App;


