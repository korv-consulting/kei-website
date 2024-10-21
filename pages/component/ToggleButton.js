import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/ToggleButton.module.css';

const ToggleButton = ({ onChange, isCredits }) => {
  const { t } = useTranslation('tooglebtn');

  return (
    <div className={styles.toggleContainer}>
      <span className={`${styles.label} ${isCredits ? styles.inactiveLabel : styles.activeLabel}`}>
        {t('subscription')}
      </span>
      <div
        className={styles.toggleButton}
        onClick={() => onChange(!isCredits)}
      >
        <div
          className={`${styles.toggleCircle} ${isCredits ? styles.right : styles.left}`}
        ></div>
      </div>
      <span className={`${styles.label} ${!isCredits ? styles.inactiveLabel : styles.activeLabel}`}>
        {t('credits')}
      </span>
    </div>
  );
};

export default ToggleButton;
