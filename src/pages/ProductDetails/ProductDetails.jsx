import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  MessageCircle,
  ShoppingCart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

import { products } from "../../data.js";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/products/ProductCard/ProductCard";

import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { addItem } = useCart();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <span>PRODUCT CATALOG</span>

          <h1>Product not found.</h1>

          <p>
            The product you are looking for may have been removed or the URL
            may be incorrect.
          </p>

          <Link to="/products" className={styles.notFoundButton}>
            <ArrowLeft size={16} />
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  /* ADD PRODUCT TO ENQUIRY CART */
  const handleAddToCart = () => {
    addItem(product);
  };

  /* WHATSAPP ENQUIRY */
  const handleWhatsApp = () => {
    const message = `
Hello Rainbow,

I am interested in the following product.

━━━━━━━━━━━━━━━━━━━━
PRODUCT DETAILS
━━━━━━━━━━━━━━━━━━━━

Product: ${product.name}
Category: ${product.categoryName || product.category}
Product ID: ${product.id}
Slug: ${product.slug}

Description:
${product.summary || product.description || "Not provided"}

Product specifications:
${
  product.specs?.length
    ? product.specs.map((item) => `• ${item}`).join("\n")
    : "Not provided"
}

━━━━━━━━━━━━━━━━━━━━
SOURCE
━━━━━━━━━━━━━━━━━━━━

Product page:
${window.location.href}

I would like to receive more information, availability and quotation.

Thank you.
`.trim();

    /*
 * Replace this number with your actual WhatsApp number
 * or import it from your company data if available.
 */
    const whatsappNumber = "919876543210";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /*
 * EMAIL ENQUIRY
 * Sends the user to the contact page with product
 * information stored in sessionStorage.
 * Your Contact page can read:
 * sessionStorage.getItem("rainbow_product_enquiry")
 */
  const handleEmailEnquiry = () => {
    const enquiryData = {
      productId: product.id,
      productName: product.name,
      category: product.categoryName || product.category,
      description: product.summary || product.description || "",
      specifications: product.specs || [],
      productUrl: window.location.href,
    };

    sessionStorage.setItem(
      "rainbow_product_enquiry",
      JSON.stringify(enquiryData),
    );

    navigate("/contact?source=product");
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* BREADCRUMB */}

        <div className={styles.topBar}>
          <Link to="/products" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to products</span>
          </Link>

          <span className={styles.catalogText}>
            Electrical & Electronics
          </span>
        </div>

        {/* PRODUCT HERO */}

        <section className={styles.productHero}>
          {/* IMAGE */}

          <div className={styles.mediaColumn}>
            <div className={styles.productImage}>
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <ShoppingCart size={42} />
                  <span>Product image</span>
                </div>
              )}

              <span className={styles.imageBadge}>ENQUIRY ONLY</span>

              <div className={styles.imageBottomBar}>
                <span>{product.categoryName || product.category}</span>

                <span className={styles.imageStatus}>
                  <ShieldCheck size={15} />
                  Technical quotation
                </span>
              </div>
            </div>
          </div>

          {/* PRODUCT CONTENT */}

          <div className={styles.productContent}>
            <span className={styles.category}>
              {product.categoryName || product.category}
            </span>

            <h1>{product.name}</h1>

            <p className={styles.description}>
              {product.summary ||
                product.description ||
                "Electrical product available through direct enquiry."}
            </p>

            {/* QUOTATION NOTICE */}

            <div className={styles.notice}>
              <div className={styles.noticeIcon}>
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Technical quotation available</strong>

                <p>
                  Rainbow confirms the suitable configuration,
                  specification, availability and quotation after reviewing
                  the application.
                </p>
              </div>
            </div>

            {/* SPECIFICATIONS */}

            {product.specs?.length > 0 && (
              <div className={styles.specifications}>
                <span className={styles.sectionEyebrow}>
                  PRODUCT SUPPORT
                </span>

                <h2>Key specifications</h2>

                <div className={styles.specGrid}>
                  {product.specs.map((specification) => (
                    <div
                      className={styles.specItem}
                      key={specification}
                    >
                      <CheckCircle2 size={17} />
                      <span>{specification}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ACTIONS */}

            <div className={styles.actionSection}>
              <span className={styles.actionEyebrow}>
                CHOOSE HOW TO CONTINUE
              </span>

              <div className={styles.actionGrid}>
                {/* ADD TO CART */}

                <button
                  type="button"
                  className={`${styles.actionButton} ${styles.cartButton}`}
                  onClick={handleAddToCart}
                >
                  <span className={styles.actionIcon}>
                    <ShoppingCart size={19} />
                  </span>

                  <span className={styles.actionText}>
                    <strong>Add to enquiry cart</strong>
                    <small>Save this product for later</small>
                  </span>

                  <ArrowRight
                    size={17}
                    className={styles.actionArrow}
                  />
                </button>

                {/* EMAIL */}

                <button
                  type="button"
                  className={`${styles.actionButton} ${styles.emailButton}`}
                  onClick={handleEmailEnquiry}
                >
                  <span className={styles.actionIcon}>
                    <Mail size={18} />
                  </span>

                  <span className={styles.actionText}>
                    <strong>Email enquiry</strong>
                    <small>Open enquiry form</small>
                  </span>

                  <ArrowRight
                    size={17}
                    className={styles.actionArrow}
                  />
                </button>

                {/* WHATSAPP */}

                <button
                  type="button"
                  className={`${styles.actionButton} ${styles.whatsappButton}`}
                  onClick={handleWhatsApp}
                >
                  <span className={styles.actionIcon}>
                    <FaWhatsapp size={19} />
                  </span>

                  <span className={styles.actionText}>
                    <strong>WhatsApp enquiry</strong>
                    <small>Send product details directly</small>
                  </span>

                  <ArrowRight
                    size={17}
                    className={styles.actionArrow}
                  />
                </button>
              </div>

              <p className={styles.actionNote}>
                Add the product to your enquiry cart, send an email enquiry,
                or discuss this product directly through WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCT INFORMATION */}

        <section className={styles.information}>
          <div className={styles.informationHeading}>
            <span className={styles.sectionEyebrow}>
              PRODUCT INFORMATION
            </span>

            <h2>
              Selected around the application.
            </h2>

            <div className={styles.headingLine} />
          </div>

          <div className={styles.informationText}>
            <p>
              {product.summary ||
                product.description ||
                "This product is available through direct enquiry."}
            </p>

            <p>
              Rainbow can support product selection based on application,
              capacity, configuration and project requirements.
            </p>
          </div>
        </section>

        {/* RELATED PRODUCTS */}

        {relatedProducts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  RELATED PRODUCTS
                </span>

                <h2>More from this category.</h2>
              </div>

              <Link
                to={`/products?category=${product.category}`}
                className={styles.viewCategory}
              >
                View category
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className={styles.relatedGrid}>
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
