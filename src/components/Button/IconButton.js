import clsx from "clsx";
import styles from "./IconButton.module.css";

export default function IconButton({ className, children, ...props }) {
  return (
    <button
      className={clsx(styles.root, className)}
      aria-label="action button"
      {...props}
    >
      {children}
    </button>
  );
}
