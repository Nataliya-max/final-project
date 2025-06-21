import './Shop.css';

function Buttons({filteredItem}) {
  return (
    <div className="cont">
      <button className="change" onClick={() => filteredItem("laptop")}>Laptop</button>
      <button className="change" onClick={() => filteredItem("headphones")} >Headphones</button>
      <button className="change" onClick={() => filteredItem("tablet")} >Tablet</button>
      <button className="change" onClick={() => filteredItem("smartphone")}>Smartphone</button>
      <button className="change"  onClick={() => filteredItem("airpods")}>Airpods</button>
      <button className="change" onClick={() => filteredItem("power bank")}>Power Bank</button>
    </div>
  );
}

export default Buttons;
