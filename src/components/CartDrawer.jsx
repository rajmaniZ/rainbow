import { Minus, Plus, Trash2, X, MessageCircle } from "lucide-react";

export default function CartDrawer({ open, items, onClose, onUpdate, onRemove, phone }) {
  const message = encodeURIComponent(
    `Hello Rainbow, I would like an enquiry for:\n\n${
      items.map((item) => `• ${item.name} × ${item.qty}`).join("\n")
    }\n\nPlease share availability and quotation details.`
  );

  return (
    <>
      <div className={`drawer-backdrop ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? "show" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <div>
            <span className="eyebrow">Quick enquiry</span>
            <h3>Selected products</h3>
          </div>
          <button className="icon-btn" onClick={onClose}><X /></button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <MessageCircle size={34} />
              <h4>Your enquiry list is empty</h4>
              <p>Add products from the catalog and send the list to Rainbow.</p>
            </div>
          ) : items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="cart-item-info">
                <strong>{item.name}</strong>
                <span>{item.categoryName}</span>
                <div className="qty-control">
                  <button onClick={() => onUpdate(item.id, item.qty - 1)}><Minus size={14} /></button>
                  <b>{item.qty}</b>
                  <button onClick={() => onUpdate(item.id, item.qty + 1)}><Plus size={14} /></button>
                  <button className="delete-btn" onClick={() => onRemove(item.id)}><Trash2 size={15} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="drawer-footer">
            <a
              className="primary-btn full"
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              Send enquiry on WhatsApp <MessageCircle size={18} />
            </a>
            <p>No payment or account required. Rainbow will confirm pricing, stock and specifications.</p>
          </div>
        )}
      </aside>
    </>
  );
}
