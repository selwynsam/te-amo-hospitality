import clsx from "clsx";
import { createPortal } from "react-dom";
import styles from "./Cover.module.css";
import { IoClose } from "react-icons/io5";
import IconButton from "../Button/IconButton";

export default function Cover({ opened = false, onClose, children }) {
  return createPortal(
    <div className={clsx(styles.root, { show: opened })}>
      <IconButton className={styles.close} onClose={onClose}>
        <IoClose />
      </IconButton>

      <div>{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}
