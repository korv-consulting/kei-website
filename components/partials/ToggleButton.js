import React from 'react';
import styles from '@/styles/ToggleButton.module.css';

const ToggleButton = ({ onChange, isCredits }) => {
  return (
    <div className={styles.toggleContainer}>
      <span className={`${styles.label} ${isCredits ? styles.activeLabel : ''}`}>CREDITS</span>
      <div className={styles.toggleButton} onClick={() => onChange(!isCredits)}>
        <div className={`${styles.toggleCircle} ${isCredits ? styles.left : styles.right}`}></div>
      </div>
      <span className={`${styles.label} ${!isCredits ? styles.activeLabel : ''}`}>ABONNEMENT</span>
    </div>
  );
};

export default ToggleButton;
