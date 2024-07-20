import React from 'react';
import Image from 'next/image';
import styles from '@/styles/DownloadApp.module.css';
import QRCode from 'qrcode.react';


const DownloadApp = () => {

  const handleDownload = (store) => {
    if (store === 'playstore') {
      window.location.href = 'lien-vers-playstore'; // Remplacez par votre lien Play Store
    } else if (store === 'appstore') {
      window.location.href = 'lien-vers-appstore'; // Remplacez par votre lien App Store
    }
  };

  return (


    <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>

    <div className={styles['download-container']} data-aos="fade-up">
      {/* Section de l'image du téléphone et du texte */}
      <div className={styles['phone-section']}>
        <Image src='/phone-image.jpeg' alt="Phone" objectFit="cover" width={50} height={80}  className={styles['phone-image']} />
        <div className={styles['phone-text']}>
          <h2>Téléchargez l'application KEI !</h2>
          <p>Transformez votre quotidien avec notre application innovante.</p>
        </div>
      </div>

      {/* Section des boutons de téléchargement */}
      <div className={styles['button-section']}>
        <button className={styles['store-button']} onClick={() => handleDownload('playstore')}>
          <Image src='/playstore.svg' alt="Play Store" width={50} height={50} />
          Télécharger sur Play Store
        </button>
        <button className={styles['store-button']} onClick={() => handleDownload('appstore')}>
          <Image src='/app-store.svg' alt="App Store" width={50} height={50} />
          Télécharger sur App Store
        </button>
      </div>

      {/* QR Code */}
      <center>
      <div className={styles['qr-code-section']}>
        {/* <Image src='/qrcode.png' alt="QR Code" width={50} height={50}className={styles['qr-code-image']} /> */}
        <QRCode value='192.168.100.173:3000/template' size={200} />
      </div>
      <p >Scannez ce QR code pour télécharger directement l'application.</p>

      </center>
    </div>
    </section>
  );
};

export default DownloadApp;
