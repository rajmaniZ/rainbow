import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { company } from "../../data.js";

import styles from "./Cart.module.css";


/* =========================================================
   HELPERS
========================================================= */

const formatLabel = (value) => {
  return String(value)
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) =>
      char.toUpperCase(),
    );
};


const formatValue = (value) => {
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
        if (
          item &&
          typeof item === "object"
        ) {
          return Object.entries(item)
            .map(
              ([key, val]) =>
                `${formatLabel(key)}: ${val}`,
            )
            .join(", ");
        }

        return String(item);
      })
      .filter(Boolean)
      .join(", ");
  }

  if (
    typeof value === "object"
  ) {
    return Object.entries(value)
      .map(
        ([key, val]) =>
          `${formatLabel(key)}: ${formatValue(val)}`,
      )
      .join(", ");
  }

  return "";
};


const getProductUrl = (item) => {
  if (!item?.slug) {
    return "";
  }

  return `${window.location.origin}/products/${item.slug}`;
};


/* =========================================================
   BUILD COMPLETE ENQUIRY MESSAGE
========================================================= */

const buildEnquiryMessage = (
  items,
) => {
  const message = [];

  message.push("Hello Rainbow,");
  message.push("");

  message.push(
    "I would like to enquire about the following electrical products.",
  );

  message.push("");

  message.push(
    "━━━━━━━━━━━━━━━━━━━━",
  );

  message.push(
    "PRODUCT ENQUIRY",
  );

  message.push(
    "━━━━━━━━━━━━━━━━━━━━",
  );

  message.push("");


  items.forEach(
    (item, index) => {
      message.push(
        `${index + 1}. ${item.name}`,
      );

      message.push(
        `Quantity: ${item.qty}`,
      );

      if (item.categoryName) {
        message.push(
          `Category: ${item.categoryName}`,
        );
      }

      if (item.brand) {
        message.push(
          `Brand: ${item.brand}`,
        );
      }

      if (item.type) {
        message.push(
          `Type: ${item.type}`,
        );
      }

      if (item.model) {
        message.push(
          `Model: ${item.model}`,
        );
      }

      if (item.sku) {
        message.push(
          `SKU: ${item.sku}`,
        );
      }

      if (item.summary) {
        message.push("");

        message.push(
          `Summary: ${item.summary}`,
        );
      }

      if (item.description) {
        message.push("");

        message.push(
          `Description: ${item.description}`,
        );
      }


      /* =====================================================
         SPECIFICATIONS
      ===================================================== */

      if (
        item.specifications
      ) {
        message.push("");

        message.push(
          "Specifications:",
        );

        if (
          Array.isArray(
            item.specifications,
          )
        ) {
          item.specifications.forEach(
            (spec) => {
              if (
                typeof spec ===
                "string"
              ) {
                message.push(
                  `• ${spec}`,
                );

                return;
              }

              if (
                spec &&
                typeof spec ===
                  "object"
              ) {
                Object.entries(
                  spec,
                ).forEach(
                  ([key, value]) => {
                    message.push(
                      `• ${formatLabel(
                        key,
                      )}: ${formatValue(
                        value,
                      )}`,
                    );
                  },
                );
              }
            },
          );
        } else if (
          typeof item.specifications ===
          "object"
        ) {
          Object.entries(
            item.specifications,
          ).forEach(
            ([key, value]) => {
              message.push(
                `• ${formatLabel(
                  key,
                )}: ${formatValue(
                  value,
                )}`,
              );
            },
          );
        }
      }


      /* =====================================================
         SPECS
      ===================================================== */

      if (
        Array.isArray(item.specs) &&
        item.specs.length
      ) {
        message.push("");

        message.push(
          "Product support / specifications:",
        );

        item.specs.forEach(
          (spec) => {
            message.push(
              `• ${spec}`,
            );
          },
        );
      }


      /* =====================================================
         FEATURES
      ===================================================== */

      if (
        Array.isArray(
          item.features,
        ) &&
        item.features.length
      ) {
        message.push("");

        message.push(
          "Features:",
        );

        item.features.forEach(
          (feature) => {
            message.push(
              `• ${feature}`,
            );
          },
        );
      }


      /* =====================================================
         PRODUCT LINK
      ===================================================== */

      const url =
        getProductUrl(item);

      if (url) {
        message.push("");

        message.push(
          `Product link: ${url}`,
        );
      }

      message.push("");
      message.push(
        "────────────────────",
      );
      message.push("");
    },
  );


  message.push(
    "Please share availability, suitable configuration, technical specifications and quotation.",
  );

  message.push("");

  message.push(
    "This enquiry was created from the Rainbow website.",
  );

  return message.join("\n");
};


/* =========================================================
   COMPONENT
========================================================= */

export default function Cart() {
  const {
    items,
    count,
    update,
    remove,
    clear,
  } = useCart();


  /* =======================================================
     TOTAL PRODUCT TYPES
  ======================================================= */

  const productTypes =
    items.length;


  /* =======================================================
     COMPLETE WHATSAPP MESSAGE
  ======================================================= */

  const enquiryMessage =
    buildEnquiryMessage(
      items,
    );


  /* =======================================================
     WHATSAPP
  ======================================================= */

  const whatsappPhone =
    String(
      company?.whatsapp || "",
    ).replace(/\D/g, "");


  const whatsappUrl =
    items.length &&
    whatsappPhone
      ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
          enquiryMessage,
        )}`
      : "#";


  /* =======================================================
     EMAIL
  ======================================================= */

  const emailSubject =
    `Rainbow Product Enquiry - ${productTypes} Product${
      productTypes === 1
        ? ""
        : "s"
    }`;


  const emailUrl =
    items.length
      ? `mailto:${
          company?.email || ""
        }?subject=${encodeURIComponent(
          emailSubject,
        )}&body=${encodeURIComponent(
          enquiryMessage,
        )}`
      : "#";


  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className={styles.hero}
      >
        <div
          className={styles.heroGrid}
          aria-hidden="true"
        />

        <div
          className={styles.heroGlow}
          aria-hidden="true"
        />

        <div
          className={styles.container}
        >
          <div
            className={styles.heroContent}
          >
            <span
              className={
                styles.eyebrow
              }
            >
              <i />
              ENQUIRY CART
            </span>

            <h1>
              Your selected
              <span>
                {" "}
                electrical requirements.
              </span>
            </h1>

            <p>
              Review your selected
              products, adjust
              quantities and send
              the complete enquiry
              directly to Rainbow.
            </p>

            <div
              className={
                styles.heroStats
              }
            >
              <div>
                <strong>
                  {productTypes}
                </strong>

                <span>
                  Product types
                </span>
              </div>

              <div>
                <strong>
                  {count}
                </strong>

                <span>
                  Total quantity
                </span>
              </div>

              <div>
                <strong>
                  0%
                </strong>

                <span>
                  Payment required
                </span>
              </div>
            </div>
          </div>


          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div
            className={
              styles.heroVisual
            }
            aria-hidden="true"
          >
            <div
              className={
                styles.visualRing
              }
            >
              <div
                className={
                  styles.visualIcon
                }
              >
                <ShoppingCart
                  size={30}
                />
              </div>
            </div>

            <div
              className={
                styles.visualLabel
              }
            >
              <strong>
                ENQUIRE
              </strong>

              <span>
                SELECT · REVIEW · SEND
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section
        className={styles.content}
      >
        <div
          className={styles.container}
        >

          {items.length > 0 ? (
            <>
              {/* =============================================
                  TOP BAR
              ============================================= */}

              <div
                className={styles.topBar}
              >
                <Link
                  to="/products"
                  className={styles.back}
                >
                  <ArrowLeft
                    size={16}
                  />

                  Continue browsing
                </Link>

                <div
                  className={
                    styles.productCount
                  }
                >
                  <ShoppingCart
                    size={15}
                  />

                  <strong>
                    {productTypes}
                  </strong>

                  <span>
                    product type
                    {productTypes ===
                    1
                      ? ""
                      : "s"}
                  </span>
                </div>
              </div>


              {/* =============================================
                  MAIN GRID
              ============================================= */}

              <div
                className={styles.layout}
              >

                {/* =========================================
                    PRODUCTS
                ========================================= */}

                <section
                  className={
                    styles.products
                  }
                >
                  <div
                    className={
                      styles.sectionHeading
                    }
                  >
                    <div>
                      <span>
                        SELECTED PRODUCTS
                      </span>

                      <h2>
                        Your enquiry list
                      </h2>
                    </div>

                    <button
                      type="button"
                      className={
                        styles.clearButton
                      }
                      onClick={clear}
                    >
                      Clear all
                    </button>
                  </div>


                  <div
                    className={
                      styles.itemList
                    }
                  >
                    {items.map(
                      (item) => (
                        <article
                          className={
                            styles.item
                          }
                          key={
                            item.id
                          }
                        >

                          {/* IMAGE */}

                          <Link
                            to={`/products/${item.slug}`}
                            className={
                              styles.itemImage
                            }
                          >
                            <img
                              src={
                                item.image
                              }
                              alt={
                                item.name
                              }
                              loading="lazy"
                            />

                            <span>
                              {
                                item.categoryName
                              }
                            </span>
                          </Link>


                          {/* DETAILS */}

                          <div
                            className={
                              styles.itemDetails
                            }
                          >
                            <span
                              className={
                                styles.itemCategory
                              }
                            >
                              {
                                item.categoryName
                              }
                            </span>

                            <h3>
                              <Link
                                to={`/products/${item.slug}`}
                              >
                                {
                                  item.name
                                }
                              </Link>
                            </h3>

                            <p>
                              {item.summary ||
                                item.description}
                            </p>


                            {/* PRODUCT META */}

                            <div
                              className={
                                styles.meta
                              }
                            >
                              {item.brand && (
                                <span>
                                  <b>
                                    Brand
                                  </b>
                                  {
                                    item.brand
                                  }
                                </span>
                              )}

                              {item.type && (
                                <span>
                                  <b>
                                    Type
                                  </b>
                                  {
                                    item.type
                                  }
                                </span>
                              )}

                              {item.sku && (
                                <span>
                                  <b>
                                    SKU
                                  </b>
                                  {
                                    item.sku
                                  }
                                </span>
                              )}
                            </div>


                            {/* CONTROLS */}

                            <div
                              className={
                                styles.itemBottom
                              }
                            >
                              <div
                                className={
                                  styles.quantity
                                }
                              >
                                <span>
                                  Quantity
                                </span>

                                <div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      update(
                                        item.id,
                                        item.qty -
                                          1,
                                      )
                                    }
                                    aria-label={`Decrease ${item.name} quantity`}
                                  >
                                    <Minus
                                      size={15}
                                    />
                                  </button>

                                  <strong>
                                    {
                                      item.qty
                                    }
                                  </strong>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      update(
                                        item.id,
                                        item.qty +
                                          1,
                                      )
                                    }
                                    aria-label={`Increase ${item.name} quantity`}
                                  >
                                    <Plus
                                      size={15}
                                    />
                                  </button>
                                </div>
                              </div>

                              <button
                                type="button"
                                className={
                                  styles.remove
                                }
                                onClick={() =>
                                  remove(
                                    item.id,
                                  )
                                }
                              >
                                <Trash2
                                  size={15}
                                />

                                Remove
                              </button>
                            </div>
                          </div>
                        </article>
                      ),
                    )}
                  </div>
                </section>


                {/* =========================================
                    SUMMARY
                ========================================= */}

                <aside
                  className={
                    styles.summary
                  }
                >
                  <div
                    className={
                      styles.summaryHeader
                    }
                  >
                    <div>
                      <span>
                        ENQUIRY SUMMARY
                      </span>

                      <h2>
                        Ready to send
                      </h2>
                    </div>

                    <div
                      className={
                        styles.summaryIcon
                      }
                    >
                      <ShoppingCart
                        size={19}
                      />
                    </div>
                  </div>


                  <div
                    className={
                      styles.summaryCount
                    }
                  >
                    <strong>
                      {count}
                    </strong>

                    <span>
                      total selected
                      quantity
                    </span>
                  </div>


                  {/* SUMMARY DETAILS */}

                  <div
                    className={
                      styles.summaryRows
                    }
                  >
                    <div>
                      <span>
                        Product types
                      </span>

                      <strong>
                        {
                          productTypes
                        }
                      </strong>
                    </div>

                    <div>
                      <span>
                        Quantity
                      </span>

                      <strong>
                        {count}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Pricing
                      </span>

                      <strong>
                        On quotation
                      </strong>
                    </div>
                  </div>


                  {/* NOTICE */}

                  <div
                    className={
                      styles.notice
                    }
                  >
                    <ShieldCheck
                      size={18}
                    />

                    <div>
                      <strong>
                        Technical
                        confirmation
                      </strong>

                      <p>
                        Rainbow will
                        confirm the
                        suitable
                        specification,
                        availability
                        and quotation
                        before supply.
                      </p>
                    </div>
                  </div>


                  {/* ENQUIRY BUTTONS */}

                  <div
                    className={
                      styles.enquiryActions
                    }
                  >
                    <a
                      href={
                        emailUrl
                      }
                      className={
                        styles.emailButton
                      }
                      aria-disabled={
                        !items.length
                      }
                    >
                      <Mail
                        size={18}
                      />

                      <span>
                        <strong>
                          Email Enquiry
                        </strong>

                        <small>
                          Send complete
                          product list
                        </small>
                      </span>
                    </a>


                    <a
                      href={
                        whatsappUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className={
                        styles.whatsappButton
                      }
                      aria-disabled={
                        !items.length ||
                        !whatsappPhone
                      }
                    >
                      <FaWhatsapp
                        size={21}
                      />

                      <span>
                        <strong>
                          WhatsApp Enquiry
                        </strong>

                        <small>
                          Send directly
                          to Rainbow
                        </small>
                      </span>
                    </a>
                  </div>


                  <p
                    className={
                      styles.summaryNote
                    }
                  >
                    No payment is
                    required. This is an
                    enquiry cart for
                    technical review and
                    quotation.
                  </p>
                </aside>
              </div>


              {/* =============================================
                  HELP STRIP
              ============================================= */}

              <div
                className={
                  styles.help
                }
              >
                <div
                  className={
                    styles.helpIcon
                  }
                >
                  <CheckCircle2
                    size={18}
                  />
                </div>

                <div>
                  <strong>
                    Need help selecting
                    the right equipment?
                  </strong>

                  <span>
                    Share your load,
                    application or site
                    requirement with
                    Rainbow's engineering
                    team.
                  </span>
                </div>

                <Link
                  to="/contact"
                  className={
                    styles.helpButton
                  }
                >
                  Contact team
                </Link>
              </div>
            </>
          ) : (

            /* =================================================
               EMPTY CART
            ================================================= */

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
                <ShoppingCart
                  size={30}
                />
              </div>

              <span>
                ENQUIRY CART
              </span>

              <h2>
                Your enquiry cart
                is empty.
              </h2>

              <p>
                Browse Rainbow's
                electrical product
                catalog and add the
                products you would
                like us to quote.
              </p>

              <Link
                to="/products"
                className={
                  styles.browseButton
                }
              >
                Browse products

                <ArrowLeft
                  size={15}
                  className={
                    styles.browseArrow
                  }
                />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}