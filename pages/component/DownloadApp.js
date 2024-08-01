import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/DownloadApp.module.css';
import QRCode from 'qrcode.react';

const DownloadApp = () => {
  const { t } = useTranslation('downloadApp');

  const handleDownload = (store) => {
    if (store === 'playstore') {
      window.location.href = 'lien-vers-playstore'; // Replace with your Play Store link
    } else if (store === 'appstore') {
      window.location.href = 'lien-vers-appstore'; // Replace with your App Store link
    }
  };

  return (
    <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
      <div className={styles['download-container']} data-aos="fade-up">
        <div className={styles['phone-section']}>
          <Image src='/phone-image.jpeg' alt="Phone" objectFit="cover" width={50} height={80} className={styles['phone-image']} />
          <div className={styles['phone-text']}>
            <h2 className='fs-3'>{t('download_app')}</h2>
            <p>{t('transform_life')}</p>
          </div>
        </div>

        <div className={styles['button-section']}>
          <button className={styles['store-button']} onClick={() => handleDownload('playstore')}>
            <Image src='/playstore.svg' alt="Play Store" width={50} height={50} />
            {t('download_playstore')}
          </button>
          <button className={styles['store-button']} onClick={() => handleDownload('appstore')}>
            <Image src='/app-store.svg' alt="App Store" width={50} height={50} />
            {t('download_appstore')}
          </button>
        </div>

        <center>
          <div className={styles['qr-code-section']}>
            <QRCode value='192.168.100.173:3000/template' size={200} />
          </div>
          <p>{t('scan_qr')}</p>
        </center>
      </div>
    </section>
  );
};

export default DownloadApp;
