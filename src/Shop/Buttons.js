
import './Shop.css';

function Buttons({ filteredItem, totalItems }) {
  return (
    <div className="cont">
      <button className="change" onClick={() => filteredItem("laptop")}>Laptop</button>
      <button className="change" onClick={() => filteredItem("headphones")}>Headphones</button>
      <button className="change" onClick={() => filteredItem("tablet")}>Tablet</button>
      <button className="change" onClick={() => filteredItem("smartphone")}>Smartphone</button>
      <button className="change" onClick={() => filteredItem("airpods")}>Airpods</button>
      <button className="change" onClick={() => filteredItem("power bank")}>Power Bank</button>

      <div className="cart-icon">
        <span>🛒 </span>
        {totalItems > 0 && <span className="cart-count"> {totalItems}</span>}
      </div>
    </div>
  );
}

export default Buttons;

