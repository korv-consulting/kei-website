import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/features/Slogan.module.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

const Slogan = () => {
  const { t } = useTranslation('slogan');

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     delay:0,
  //     once: true,
  //   });
  // }, []);

  return (
    <div className={styles.sloganContainer} data-aos="zoom-out-up">
      <h2 className={styles.sloganTitle}>{t('title')}</h2>
      <p className={styles.sloganParagraph}>
        {t('paragraph')}
      </p>
      <p className={styles.callToAction}>{t('callToAction')}</p>
      <button className={styles.demoButton}>{t('demoButton')}</button>
    </div>
  );
};

export default Slogan;
