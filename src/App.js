
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


function App() { 

  return (
    <Router>
      <Navbar />
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


