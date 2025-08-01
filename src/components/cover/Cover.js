"use client";

import clsx from "clsx";
import { createPortal } from "react-dom";
import styles from "./Cover.module.css";
import { IoClose } from "react-icons/io5";
import IconButton from "../Button/IconButton";
import { useEffect, useState } from "react";

export default function Cover({ opened = false, onClose, children }) {
  const [targetEle, setTargetEle] = useState(null);

  useEffect(() => {
    setTargetEle(document.getElementById("modal-root"));
  }, []);

  console.log({ targetEle });

  if (!targetEle) return null;

  return createPortal(
    <div className={clsx(styles.root, { [styles.show]: opened })}>
      <IconButton className={styles.close} onClick={onClose}>
        <IoClose />
      </IconButton>

      <div>{children}</div>
    </div>,
    targetEle
  );
}
