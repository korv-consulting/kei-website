import React from 'react';
import styles from '@/styles/CreditPricing.module.css';

export const Handle = ({
  handle: { id, value, percent },
  getHandleProps,
  isVertical,
}) => (
  <div
    role="slider"
    aria-valuemin={10}
    aria-valuemax={600}
    aria-valuenow={value}
    className={isVertical ? styles.handleVertical : styles.handle}
    {...getHandleProps(id)}
  >
    <div className={styles.handleValue}>{value}</div>
  </div>
);

export const Track = ({
  source,
  target,
  getTrackProps,
  isVertical,
}) => (
  <div
    className={isVertical ? styles.trackVertical : styles.track}
    {...getTrackProps()}
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
  />
);
