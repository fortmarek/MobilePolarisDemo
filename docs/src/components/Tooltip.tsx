import React from 'react';
import styles from './Tooltip.module.css';
import type {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  title: string;
  show: boolean;
}
export function Tooltip({title, show}: Props) {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.pasteTooltip}>
      <span className={styles.pasteTooltipTitle}>{title}</span>
    </div>
  );
}
