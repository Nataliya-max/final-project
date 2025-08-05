
import ProductCard from './ProductCard';
import './Shop.css';

export default function ShopItem({ anyItem }) {
  if (!anyItem) {
    return <p>Loading items…</p>;
  }

  return (
    <div className="products">
      {anyItem.map((itemData, idx) =>
        itemData && itemData.id ? (
          <ProductCard key={itemData.id} itemData={itemData} />
        ) : null 
      )}
    </div>
  );
}
