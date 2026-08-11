import { Search, X } from "lucide-react";
import styles from "./ProductFilters.module.css";
export default function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <Search size={16} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search UPS, PLC, solar, MCB, panels..."
        />
        {search && (
          <button onClick={() => setSearch("")}>
            <X size={14} />
          </button>
        )}
      </div>
      <div className={styles.label}>Filter by solution</div>
      <div className={styles.chips}>
        <button
          className={category === "all" ? styles.active : ""}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={category === c.id ? styles.active : ""}
            onClick={() => setCategory(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
