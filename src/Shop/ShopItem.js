import './Shop.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function ShopItem({ anyItem }) {
  const [showMoreMap, setShowMoreMap] = useState({});

  const toggleShowMore = (itemId) => {
    setShowMoreMap(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="products">
      {anyItem.map((itemData) => {
        const { id, image, description, price, title } = itemData;
        const isExpanded = showMoreMap[id] || false;

        const shortDesc = description.length > 26
          ? description.slice(0, 26).trimEnd().split(' ').slice(0, -1).join(' ') + "..."
          : description;

        return (
          <div className="product-card" key={id}>
            <Link to={`/shop/${title}`} className="product-link">
              <img src={image} alt={title} width="250" height="200" />
            </Link>
            <div className="product-info">
              <h3>{isExpanded ? description : shortDesc}</h3>
              <button className="showMore-button" onClick={() => toggleShowMore(id)}>
                {isExpanded ? "Show less" : "Show more"}
              </button>
              <h4 className="tag-button">$ {price}</h4>
              <button className="add-button">Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShopItem;
