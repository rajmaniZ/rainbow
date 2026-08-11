import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-category">{product.categoryName}</span>
      </Link>
      <div className="product-card-body">
        <h3><Link to={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.summary}</p>
        <div className="product-actions">
          <Link className="text-link" to={`/products/${product.slug}`}>
            View details <ArrowUpRight size={16} />
          </Link>
          <button className="mini-add" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to enquiry`}>
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
