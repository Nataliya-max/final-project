import React from 'react';
import ProductCard from './ProductCard';
import './Shop.css';

export default function ShopItem({ anyItem }) {
  if (!Array.isArray(anyItem)) {
    return <p>Loading items…</p>;
  }

  return (
    <div className="products">
      {anyItem.map((itemData, idx) =>
        itemData && itemData.id ? (
          <ProductCard key={itemData.id} itemData={itemData} />
        ) : (
          <React.Fragment key={idx} />
        )
      )}
    </div>
  );
}
