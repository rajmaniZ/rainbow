import { createContext, useContext, useEffect, useMemo, useState } from "react";
const C = createContext(null);
const KEY = "rainbow-enquiry-cart";
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  });
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(items)), [items]);
  const addItem = (p) =>
    setItems((a) => {
      const x = a.find((i) => i.id === p.id);
      return x
        ? a.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
        : [...a, { ...p, qty: 1 }];
    });
  const update = (id, qty) =>
    qty <= 0
      ? setItems((a) => a.filter((i) => i.id !== id))
      : setItems((a) => a.map((i) => (i.id === id ? { ...i, qty } : i)));
  const remove = (id) => setItems((a) => a.filter((i) => i.id !== id));
  const clear = () => setItems([]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const message = encodeURIComponent(
    `Hello Rainbow,\n\nI would like to enquire about these products:\n\n${items.map((i) => `• ${i.name} — Qty: ${i.qty}`).join("\n")}\n\nPlease share specifications, availability and quotation details.`,
  );
  return (
    <C.Provider
      value={{ items, count, addItem, update, remove, clear, message }}
    >
      {children}
    </C.Provider>
  );
}
export const useCart = () => useContext(C);
