import styles from "./SectionHeader.module.css";
export default function SectionHeader({ eyebrow, title, text, action }) {
  return (
    <div className={styles.header}>
      <div>
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action}
    </div>
  );
}
