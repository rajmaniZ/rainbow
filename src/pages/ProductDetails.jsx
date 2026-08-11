import { ArrowLeft, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data";

export default function ProductDetails({ addToCart }) {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <section className="section"><div className="container no-results"><h2>Product not found</h2><Link className="primary-btn" to="/products">Back to catalog</Link></div></section>;
  }

  return (
    <section className="product-detail-page">
      <div className="container">
        <Link className="back-link" to="/products"><ArrowLeft size={16} /> Back to products</Link>
        <div className="detail-grid">
          <div className="detail-image"><img src={product.image} alt={product.name} /></div>
          <div className="detail-copy">
            <span className="product-category">{product.categoryName}</span>
            <h1>{product.name}</h1>
            <p className="detail-summary">{product.summary}</p>
            <div className="detail-points">
              {product.specs.map((spec) => <div key={spec}><Check size={17} /> {spec}</div>)}
            </div>
            <div className="quote-note"><ShieldCheck size={20} /><div><strong>Configuration-based quotation</strong><span>We confirm capacity, specifications, availability and pricing based on your requirement.</span></div></div>
            <div className="detail-actions">
              <button className="primary-btn" onClick={() => addToCart(product)}>Add to enquiry <MessageCircle size={18} /></button>
              <Link className="secondary-btn" to="/contact">Talk to Rainbow</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
