import './Shop.css';

function ShopItem({ anyItem }) {
  return (
    <div className="products">
      {anyItem.map((itemData, index) => {
        const { image, item, price } = itemData;
        return (
          <div className="product-card" key={index}>
            <img src={image} alt="item" width="250px" height="200px" />
            <div className="product-info">
              <h3>{item}</h3>
              <h4 className="price-tag">$ {price}</h4>
              <button className="add-button">Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShopItem;
