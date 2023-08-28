import React from 'react';
import styles from './ComponentImage.module.css';

interface Props {
  imageUrl: string;
}

export function ComponentImage({imageUrl}: Props) {
  return (
    <div className={styles.ComponentImage}>
      <img
        src={imageUrl}
        srcSet={`${imageUrl} 2x`}
        onError={target => {
          target.currentTarget.src = '/img/fallback_image.png';
        }}
      />
    </div>
  );
}
