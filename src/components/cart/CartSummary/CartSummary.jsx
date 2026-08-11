import { ClipboardList, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../../data.js";
import { useCart } from "./../../../context/CartContext.jsx";
import styles from "./CartSummary.module.css";
export default function CartSummary() {
  const { items, count, message, clear } = useCart();
  return (
    <aside className={styles.card}>
      <div className={styles.top}>
        <span>ENQUIRY SUMMARY</span>
        <ClipboardList size={17} />
      </div>
      <b className={styles.count}>{count}</b>
      <small>selected item{count === 1 ? "" : "s"}</small>
      <div className={styles.note}>
        <ShieldCheck size={17} />
        <p>
          No payment. Rainbow confirms technical specification, availability and
          quotation.
        </p>
      </div>
      <a
        className={items.length ? styles.whatsapp : styles.disabled}
        href={
          items.length
            ? `https://wa.me/${company.whatsapp}?text=${message}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={16} /> Send enquiry on WhatsApp
      </a>
      <Link to="/contact" className={styles.contact}>
        Need a custom requirement?
      </Link>
      {items.length > 0 && (
        <button className={styles.clear} onClick={clear}>
          Clear enquiry list
        </button>
      )}
    </aside>
  );
}
