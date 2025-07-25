import './Shop.css';
import { Link } from 'react-router-dom';

function ShowMore({ itemData, isExpanded, shortDesc, toggleShowMore }) {
  const { id, title, image, description, price } = itemData;

  return (
    <div className="product-card" key={id}>
      <Link to={`/shop/${title}`} className="product-link">
        <img src={image} alt={title} width="250" height="200" />
      </Link>
      <div className="product-info">
        <h3>{isExpanded ? description : shortDesc}</h3>
        {description.length > 26 && (
          <button
            className="showMore-button"
            onClick={() => toggleShowMore(id)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
        <h4 className="tag-button">$ {price}</h4>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
}

export default ShowMore;
