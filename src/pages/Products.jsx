import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data";

export default function Products({ addToCart }) {
  const [params, setParams] = useSearchParams();
  const initial = params.get("category") || "all";
  const [category, setCategory] = useState(initial);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const catMatch = category === "all" || p.category === category;
      const qMatch = !q || `${p.name} ${p.categoryName} ${p.summary}`.toLowerCase().includes(q);
      return catMatch && qMatch;
    });
  }, [category, search]);

  const changeCategory = (value) => {
    setCategory(value);
    if (value === "all") params.delete("category");
    else params.set("category", value);
    setParams(params);
  };

  return (
    <section className="catalog-page">
      <div className="container">
        <div className="page-hero">
          <div>
            <div className="eyebrow">Product catalog</div>
            <h1>Power products, organized for decisions.</h1>
            <p>Explore systems, components and electrical infrastructure. Add requirements to your enquiry list instead of going through a checkout.</p>
          </div>
          <div className="catalog-count"><strong>{filtered.length}</strong><span>items shown</span></div>
        </div>

        <div className="catalog-toolbar">
          <div className="search-box">
            <Search size={19} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search UPS, PLC, solar, panels..." />
            {search && <button onClick={() => setSearch("")}><X size={16} /></button>}
          </div>
          <div className="filter-label"><SlidersHorizontal size={17} /> Filter by solution</div>
        </div>

        <div className="filter-chips">
          <button className={category === "all" ? "selected" : ""} onClick={() => changeCategory("all")}>All products</button>
          {categories.map((cat) => <button key={cat.id} className={category === cat.id ? "selected" : ""} onClick={() => changeCategory(cat.id)}>{cat.name}</button>)}
        </div>

        {filtered.length ? (
          <div className="product-grid catalog-grid">
            {filtered.map((product) => <ProductCard key={product.id} product={product} onAdd={addToCart} />)}
          </div>
        ) : (
          <div className="no-results"><h3>No matching products</h3><p>Try a broader search or clear the category filter.</p></div>
        )}
      </div>
    </section>
  );
}
