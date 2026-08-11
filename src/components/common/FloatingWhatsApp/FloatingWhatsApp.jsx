import { FaWhatsapp } from "react-icons/fa";
import { company } from "../../../data.js";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  const phone = String(company?.whatsapp || "").replace(/\D/g, "");

  const message =
    "Hello Rainbow, I would like to discuss an electrical requirement.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Chat with Rainbow on WhatsApp"
    >
      {/* Notification pulse */}
      <span className={styles.pulse} />

      {/* Main icon */}
      <span className={styles.icon}>
        <FaWhatsapp />
      </span>

      {/* Desktop hover content */}
      <span className={styles.label}>
        <strong>Talk to Rainbow</strong>
        <small>WhatsApp enquiry</small>
      </span>

      {/* Small arrow */}
      <span className={styles.arrow}>↗</span>
    </a>
  );
}
