import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import styles from "./ProductCard.module.css";
export default function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className={styles.card}>
      <Link to={`/products/${product.slug}`} className={styles.image}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span>{product.categoryName}</span>
      </Link>
      <div className={styles.body}>
        <small>{product.categoryName}</small>
        <h3>
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.summary || product.description}</p>
        <div className={styles.footer}>
          <Link to={`/products/${product.slug}`}>
            Details <ArrowUpRight size={14} />
          </Link>
          <button onClick={() => addItem(product)} title="Add to enquiry cart">
            <Plus size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}
