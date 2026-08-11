import { useEffect, useMemo, useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  PackageSearch,
  RotateCcw,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { useSearchParams } from "react-router-dom";

import SectionHeader from "../../components/common/SectionHeader";
import ProductCard from "../../components/products/ProductCard/ProductCard";

import {
  categories as productCategories,
  company,
  products,
} from "../../data.js";

import { useCart } from "../../context/CartContext";

import styles from "./Products.module.css";


/* =========================================================
   SETTINGS
========================================================= */

const PRODUCTS_PER_PAGE = 20;


/* =========================================================
   HELPERS
========================================================= */

/*
 * Converts an object key such as:
 *
 * maxCapacity
 *
 * into:
 *
 * Max Capacity
 */
const formatLabel = (value) => {
  return String(value)
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) =>
      char.toUpperCase()
    );
};


/*
 * Converts any product value into readable
 * WhatsApp text.
 *
 * This allows us to send:
 *
 * strings
 * numbers
 * arrays
 * objects
 * nested objects
 */
const formatValue = (value, level = 0) => {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        const result =
          formatValue(
            item,
            level + 1
          );

        return result
          ? `• ${result}`
          : "";
      })
      .filter(Boolean)
      .join("\n");
  }

  if (
    typeof value === "object"
  ) {
    return Object.entries(value)
      .map(([key, item]) => {
        const result =
          formatValue(
            item,
            level + 1
          );

        if (!result) {
          return "";
        }

        return `${formatLabel(
          key
        )}: ${result}`;
      })
      .filter(Boolean)
      .join("\n");
  }

  return "";
};


/*
 * Convert relative image path into
 * absolute URL where possible.
 */
const getAbsoluteUrl = (value) => {
  if (!value) {
    return "";
  }

  try {
    return new URL(
      value,
      window.location.origin
    ).href;
  } catch {
    return value;
  }
};


/* =========================================================
   WHATSAPP MESSAGE
========================================================= */

const buildWhatsAppMessage = (
  product
) => {
  const productUrl =
    `${window.location.origin}/products/${product.slug}`;

  const imageUrl =
    getAbsoluteUrl(product.image);

  /*
   * Do not send the image object itself
   * as raw object data.
   */
  const excludedKeys = new Set([
    "image",
  ]);

  const productDetails =
    Object.entries(product)
      .filter(
        ([key]) =>
          !excludedKeys.has(key)
      )
      .map(([key, value]) => {
        const formatted =
          formatValue(value);

        if (!formatted) {
          return "";
        }

        return `${formatLabel(
          key
        )}:\n${formatted}`;
      })
      .filter(Boolean)
      .join("\n\n");

  const lines = [
    "Hello Rainbow,",
    "",
    "I am interested in this product and would like to receive availability, technical confirmation and quotation.",
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "PRODUCT ENQUIRY",
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    productDetails,
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "PRODUCT LINK",
    "━━━━━━━━━━━━━━━━━━━━",
    productUrl,
  ];

  if (imageUrl) {
    lines.push(
      "",
      "PRODUCT IMAGE",
      imageUrl
    );
  }

  lines.push(
    "",
    "Please share the suitable configuration, availability, technical specifications and quotation.",
    "",
    "Thank you."
  );

  return lines.join("\n");
};


/* =========================================================
   COMPONENT
========================================================= */

export default function Products() {
  const [params, setParams] =
    useSearchParams();

  /*
   * Support both names so the page remains
   * compatible with either CartContext version.
   */
  const {
    addToCart,
    addItem,
  } = useCart();

  /*
   * Prefer addToCart because this is the
   * current catalog API.
   *
   * Fallback to addItem for compatibility
   * with the existing ProductCard / older
   * CartContext implementation.
   */
  const addProductToCart =
    typeof addToCart === "function"
      ? addToCart
      : typeof addItem === "function"
        ? addItem
        : null;


  /* =======================================================
     STATE
  ======================================================= */

  const [category, setCategory] =
    useState(
      params.get("category") ||
        "all"
    );

  const [search, setSearch] =
    useState(
      params.get("search") || ""
    );

  const [visibleCount, setVisibleCount] =
    useState(
      PRODUCTS_PER_PAGE
    );

  const [mobileFilters, setMobileFilters] =
    useState(false);

  const [addedProductId, setAddedProductId] =
    useState(null);


  /* =======================================================
     SYNC URL → STATE
  ======================================================= */

  useEffect(() => {
    setCategory(
      params.get("category") ||
        "all"
    );

    setSearch(
      params.get("search") ||
        ""
    );

    setVisibleCount(
      PRODUCTS_PER_PAGE
    );
  }, [params]);


  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filteredProducts =
    useMemo(() => {
      const query =
        search
          .toLowerCase()
          .trim();

      return products.filter(
        (product) => {
          const matchesCategory =
            category === "all" ||
            product.category ===
              category;

          if (
            !matchesCategory
          ) {
            return false;
          }

          if (!query) {
            return true;
          }

          const searchableValues = [
            product.id,
            product.name,
            product.slug,
            product.category,
            product.categoryName,
            product.summary,
            product.description,
            product.brand,
            product.type,
            product.model,
            product.sku,
          ];

          if (
            Array.isArray(
              product.features
            )
          ) {
            searchableValues.push(
              ...product.features
            );
          }

          if (
            Array.isArray(
              product.specs
            )
          ) {
            searchableValues.push(
              ...product.specs
            );
          }

          if (
            Array.isArray(
              product.specifications
            )
          ) {
            searchableValues.push(
              ...product.specifications.map(
                (item) =>
                  typeof item ===
                  "string"
                    ? item
                    : Object.values(
                        item || {}
                      ).join(" ")
              )
            );
          }

          if (
            product.specifications &&
            typeof product.specifications ===
              "object" &&
            !Array.isArray(
              product.specifications
            )
          ) {
            searchableValues.push(
              ...Object.entries(
                product.specifications
              ).map(
                ([key, value]) =>
                  `${key} ${value}`
              )
            );
          }

          const searchableText =
            searchableValues
              .filter(Boolean)
              .join(" ")
              .toLowerCase();

          return searchableText.includes(
            query
          );
        }
      );
    }, [
      category,
      search,
    ]);


  /* =======================================================
     ONLY SHOW 20 PRODUCTS
  ======================================================= */

  const visibleProducts =
    filteredProducts.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    filteredProducts.length;


  /* =======================================================
     CATEGORY CHANGE
  ======================================================= */

  const handleCategoryChange = (
    value
  ) => {
    const nextParams =
      new URLSearchParams(
        params
      );

    if (value === "all") {
      nextParams.delete(
        "category"
      );
    } else {
      nextParams.set(
        "category",
        value
      );
    }

    setParams(nextParams);

    setCategory(value);

    setVisibleCount(
      PRODUCTS_PER_PAGE
    );

    setMobileFilters(false);
  };


  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearchChange = (
    event
  ) => {
    const value =
      event.target.value;

    const nextParams =
      new URLSearchParams(
        params
      );

    if (value.trim()) {
      nextParams.set(
        "search",
        value
      );
    } else {
      nextParams.delete(
        "search"
      );
    }

    setSearch(value);

    setParams(nextParams);

    setVisibleCount(
      PRODUCTS_PER_PAGE
    );
  };


  /* =======================================================
     CLEAR SEARCH
  ======================================================= */

  const clearSearch = () => {
    const nextParams =
      new URLSearchParams(
        params
      );

    nextParams.delete(
      "search"
    );

    setSearch("");

    setParams(nextParams);

    setVisibleCount(
      PRODUCTS_PER_PAGE
    );
  };


  /* =======================================================
     RESET
  ======================================================= */

  const resetFilters = () => {
    setSearch("");
    setCategory("all");

    setParams({});

    setVisibleCount(
      PRODUCTS_PER_PAGE
    );
  };


  /* =======================================================
     VIEW MORE
  ======================================================= */

  const handleViewMore = () => {
    setVisibleCount(
      (current) =>
        current +
        PRODUCTS_PER_PAGE
    );
  };


  /* =======================================================
     ADD TO CART
  ======================================================= */

  const handleAddToCart = (
    product
  ) => {
    if (
      typeof addProductToCart !==
      "function"
    ) {
      console.error(
        "CartContext must provide addToCart() or addItem()."
      );

      return;
    }

    /*
     * This is the actual cart operation.
     */
    addProductToCart(product);

    /*
     * Temporary visual confirmation.
     */
    setAddedProductId(
      product.id
    );

    window.setTimeout(() => {
      setAddedProductId(
        null
      );
    }, 1800);
  };


  /* =======================================================
     WHATSAPP
  ======================================================= */

  const handleWhatsApp = (
    product
  ) => {
    const phone =
      String(
        company?.whatsapp || ""
      ).replace(/\D/g, "");

    if (!phone) {
      console.error(
        "WhatsApp number is not configured in company data."
      );

      return;
    }

    const message =
      buildWhatsAppMessage(
        product
      );

    const url =
      `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };


  /* =======================================================
     FILTER STATE
  ======================================================= */

  const hasFilters =
    category !== "all" ||
    search.trim() !== "";


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      className={styles.page}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className={styles.hero}
      >
        <div
          className={
            styles.heroCircuit
          }
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
        </div>

        <div
          className={
            styles.container
          }
        >
          <div
            className={
              styles.heroContent
            }
          >
            <div
              className={
                styles.eyebrow
              }
            >
              <i />
              PRODUCT CATALOG
            </div>

            <h1>
              Electrical products
              <span>
                {" "}
                for real applications.
              </span>
            </h1>

            <p>
              Explore Rainbow's
              portfolio of UPS
              systems, batteries,
              stabilizers, inverters,
              solar systems, control
              panels and electrical
              components.
            </p>

            <div
              className={
                styles.heroMeta
              }
            >
              <div>
                <strong>
                  {products.length}
                </strong>

                <span>
                  Products
                </span>
              </div>

              <div>
                <strong>
                  {
                    productCategories.length
                  }
                </strong>

                <span>
                  Categories
                </span>
              </div>

              <div>
                <strong>
                  Enquiry
                </strong>

                <span>
                  Based pricing
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              styles.heroVisual
            }
            aria-hidden="true"
          >
            <div
              className={
                styles.visualCircle
              }
            >
              <ShoppingCart
                size={28}
              />
            </div>

            <div
              className={
                styles.visualLine
              }
            >
              <span />
              <span />
              <span />
            </div>

            <strong>
              SELECT
            </strong>

            <span>
              ENQUIRE · SOURCE · SUPPORT
            </span>
          </div>
        </div>
      </section>


      {/* =====================================================
          CATALOG
      ===================================================== */}

      <section
        className={styles.catalog}
      >
        <div
          className={
            styles.container
          }
        >

          <SectionHeader
            eyebrow="PRODUCT CATALOG"
            title="Find the equipment or component you need."
            text="Search the catalog, filter by solution and add products to your enquiry cart. You can also send complete product information directly to Rainbow through WhatsApp."
          />


          {/* =================================================
              SEARCH
          ================================================= */}

          <div
            className={
              styles.toolbar
            }
          >
            <div
              className={
                styles.searchBox
              }
            >
              <Search
                size={18}
              />

              <input
                type="search"
                value={search}
                onChange={
                  handleSearchChange
                }
                placeholder="Search UPS, battery, PLC, panel, solar..."
                aria-label="Search products"
              />

              {search && (
                <button
                  type="button"
                  className={
                    styles.clearSearch
                  }
                  onClick={
                    clearSearch
                  }
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <button
              type="button"
              className={`${styles.filterToggle} ${
                mobileFilters
                  ? styles.filterToggleActive
                  : ""
              }`}
              onClick={() =>
                setMobileFilters(
                  (value) =>
                    !value
                )
              }
            >
              <SlidersHorizontal
                size={16}
              />

              Filters

              {category !==
                "all" && (
                <b>1</b>
              )}
            </button>
          </div>


          {/* =================================================
              RESULT BAR
          ================================================= */}

          <div
            className={
              styles.catalogBar
            }
          >
            <div>
              <strong>
                {
                  filteredProducts.length
                }
              </strong>

              <span>
                {filteredProducts.length ===
                1
                  ? " product found"
                  : " products found"}
              </span>

              {filteredProducts.length >
                visibleProducts.length && (
                <small>
                  {" "}
                  · Showing{" "}
                  {
                    visibleProducts.length
                  }
                </small>
              )}
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={
                  resetFilters
                }
                className={
                  styles.resetButton
                }
              >
                <RotateCcw
                  size={13}
                />

                Reset filters
              </button>
            )}
          </div>


          {/* =================================================
              CATALOG LAYOUT
          ================================================= */}

          <div
            className={`${styles.catalogLayout} ${
              mobileFilters
                ? styles.mobileFiltersOpen
                : ""
            }`}
          >

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside
              className={
                styles.filters
              }
            >
              <div
                className={
                  styles.filtersHeader
                }
              >
                <div>
                  <span>
                    FILTER BY
                  </span>

                  <strong>
                    Product category
                  </strong>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setMobileFilters(
                      false
                    )
                  }
                  aria-label="Close filters"
                >
                  <X size={17} />
                </button>
              </div>

              <div
                className={
                  styles.categoryList
                }
              >

                <button
                  type="button"
                  className={
                    category ===
                    "all"
                      ? styles.categoryActive
                      : ""
                  }
                  onClick={() =>
                    handleCategoryChange(
                      "all"
                    )
                  }
                >
                  <span>
                    All products
                  </span>

                  <b>
                    {products.length}
                  </b>
                </button>

                {productCategories.map(
                  (item) => {
                    const count =
                      products.filter(
                        (
                          product
                        ) =>
                          product.category ===
                          item.id
                      ).length;

                    return (
                      <button
                        type="button"
                        key={
                          item.id
                        }
                        className={
                          category ===
                          item.id
                            ? styles.categoryActive
                            : ""
                        }
                        onClick={() =>
                          handleCategoryChange(
                            item.id
                          )
                        }
                      >
                        <span>
                          {
                            item.name
                          }
                        </span>

                        <b>
                          {count}
                        </b>
                      </button>
                    );
                  }
                )}
              </div>
            </aside>


            {/* =================================================
                PRODUCT AREA
            ================================================= */}

            <div
              className={
                styles.productsArea
              }
            >

              {visibleProducts.length >
              0 ? (
                <>
                  <div
                    className={
                      styles.grid
                    }
                  >
                    {visibleProducts.map(
                      (product) => {
                        const isAdded =
                          addedProductId ===
                          product.id;

                        return (
                          <article
                            key={
                              product.id
                            }
                            className={
                              styles.productWrapper
                            }
                          >

                            {/* PRODUCT CARD */}

                            <div
                              className={
                                styles.cardArea
                              }
                            >
                              <ProductCard
                                product={
                                  product
                                }
                              />
                            </div>


                            {/* ACTIONS */}

                            <div
                              className={
                                styles.productActions
                              }
                            >

                              {/* ADD TO CART */}

                              <button
                                type="button"
                                className={`${styles.cartButton} ${
                                  isAdded
                                    ? styles.cartButtonAdded
                                    : ""
                                }`}
                                onClick={() =>
                                  handleAddToCart(
                                    product
                                  )
                                }
                              >
                                <ShoppingCart
                                  size={16}
                                />

                                <span>
                                  {isAdded
                                    ? "Added to Cart"
                                    : "Add to Cart"}
                                </span>
                              </button>


                              {/* WHATSAPP */}

                              <button
                                type="button"
                                className={
                                  styles.whatsappButton
                                }
                                onClick={() =>
                                  handleWhatsApp(
                                    product
                                  )
                                }
                              >
                                <FaWhatsapp
                                  size={19}
                                />

                                <span>
                                  WhatsApp
                                </span>
                              </button>
                            </div>
                          </article>
                        );
                      }
                    )}
                  </div>


                  {/* =================================================
                      VIEW MORE
                  ================================================= */}

                  {hasMore && (
                    <div
                      className={
                        styles.viewMoreWrap
                      }
                    >
                      <div
                        className={
                          styles.viewMoreInfo
                        }
                      >
                        Showing{" "}
                        <strong>
                          {
                            visibleProducts.length
                          }
                        </strong>{" "}
                        of{" "}
                        <strong>
                          {
                            filteredProducts.length
                          }
                        </strong>{" "}
                        products
                      </div>

                      <button
                        type="button"
                        className={
                          styles.viewMoreButton
                        }
                        onClick={
                          handleViewMore
                        }
                      >
                        View More Products

                        <ArrowRight
                          size={16}
                        />
                      </button>
                    </div>
                  )}


                  {/* =================================================
                      ALL PRODUCTS SHOWN
                  ================================================= */}

                  {!hasMore &&
                    filteredProducts.length >
                      PRODUCTS_PER_PAGE && (
                      <div
                        className={
                          styles.allLoaded
                        }
                      >
                        <CheckCircle2
                          size={15}
                        />

                        <span>
                          All{" "}
                          {
                            filteredProducts.length
                          }{" "}
                          matching products
                          are displayed.
                        </span>
                      </div>
                    )}
                </>
              ) : (
                <div
                  className={
                    styles.empty
                  }
                >
                  <div
                    className={
                      styles.emptyIcon
                    }
                  >
                    <PackageSearch
                      size={28}
                    />
                  </div>

                  <h3>
                    No products found
                  </h3>

                  <p>
                    Try another product
                    name, category or
                    search keyword.
                  </p>

                  <button
                    type="button"
                    onClick={
                      resetFilters
                    }
                    className={
                      styles.emptyButton
                    }
                  >
                    <RotateCcw
                      size={14}
                    />

                    View all products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}