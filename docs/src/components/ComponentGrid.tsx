import React from 'react';
import styles from './ComponentGrid.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Status} from '../types';
import {StatusBadge} from './StatusBadge';

interface ComponentGridProps {
  children: React.ReactNode;
}

export function ComponentGrid({children}: ComponentGridProps) {
  return <div className={styles.ComponentGrid}>{children}</div>;
}

interface ComponentGridItemProps {
  title: string;
  description: string;
  url: string;
  status?: Status;
}

export function ComponentGridItem({
  title,
  description,
  url,
  status,
}: ComponentGridItemProps) {
  const src = useBaseUrl(
    `img/generated/${title.replace('.', '')}_PolarisDocs.png`,
  );
  const fallbackSrc = useBaseUrl('img/fallback_image.png');
  const statusBadge = status ? <StatusBadge status={status} /> : null;
  return (
    <a href={url}>
      <div className={styles.ComponentGridItem}>
        <div className={styles.ComponentGridItem_ImageBoxBackground}>
          <div className={styles.ComponentGridItem_ImageBox}>
            <img
              src={src}
              onError={target => {
                target.currentTarget.src = fallbackSrc;
              }}
            />
          </div>
        </div>
        <div className={styles.ComponentGridItem_TextBox}>
          <div className={styles.ComponentGridItem_TitleBox}>
            <h3>{title}</h3>
            {statusBadge}
          </div>
          <p>{description.replace(/\\n/g, '\n')}</p>
        </div>
      </div>
    </a>
  );
}
