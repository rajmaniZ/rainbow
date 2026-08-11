import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.css";
export default function CartItem({ item, onUpdate, onRemove }) {
  return;
  <article className={styles.item}>
    <Link to={`/products/${item.slug}`} className={styles.image}>
      <img src={item.image} alt={item.name} />
    </Link>
    <div>
      <small>{item.categoryName}</small>
      <h3>
        <Link to={`/products/${item.slug}`}>{item.name}</Link>
      </h3>
      <p>
        Quotation required — final specification and price are confirmed by
        Rainbow.
      </p>
      <div className={styles.controls}>
        <div>
          <button onClick={() => onUpdate(item.id, item.qty - 1)}>
            <Minus size={13} />
          </button>
          <b>{item.qty}</b>
          <button onClick={() => onUpdate(item.id, item.qty + 1)}>
            <Plus size={13} />
          </button>
        </div>
        <button className={styles.remove} onClick={() => onRemove(item.id)}>
          <Trash2 size={14} /> Remove
        </button>
      </div>
    </div>
  </article>;
}
