import './Shop.css';
import { useState } from "react";
import ShowMore from './ShowMore';

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
        const { id, description } = itemData;
        const isExpanded = showMoreMap[id] || false;

        const shortDesc = description.length > 26
          ? description.slice(0, 26).trimEnd().split(' ').slice(0, -1).join(' ') + "..."
          : description;

        return (
          <ShowMore
            key={id}
            itemData={itemData}
            isExpanded={isExpanded}
            shortDesc={shortDesc}
            toggleShowMore={toggleShowMore}
          />
        );
      })}
    </div>
  );
}

export default ShopItem;

