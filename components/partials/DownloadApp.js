// import React from 'react';
// import Image from 'next/image';
// import styles from '@/styles/DownloadApp.module.css';
// import QRCode from 'qrcode.react';


// const DownloadApp = () => {

//   const handleDownload = (store) => {
//     if (store === 'playstore') {
//       window.location.href = 'lien-vers-playstore'; // Remplacez par votre lien Play Store
//     } else if (store === 'appstore') {
//       window.location.href = 'lien-vers-appstore'; // Remplacez par votre lien App Store
//     }
//   };

//   return (


//     <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>

//     <div className={styles['download-container']} data-aos="fade-up">
//       {/* Section de l'image du téléphone et du texte */}
//       <div className={styles['phone-section']}>
//         <Image src='/phone-image.jpeg' alt="Phone" objectFit="cover" width={50} height={80}  className={styles['phone-image']} />
//         <div className={styles['phone-text']}>
//           <h2>Téléchargez l'application KEI !</h2>
//           <p>Transformez votre quotidien avec notre application innovante.</p>
//         </div>
//       </div>

//       {/* Section des boutons de téléchargement */}
//       <div className={styles['button-section']}>
//         <button className={styles['store-button']} onClick={() => handleDownload('playstore')}>
//           <Image src='/playstore.svg' alt="Play Store" width={50} height={50} />
//           Télécharger sur Play Store
//         </button>
//         <button className={styles['store-button']} onClick={() => handleDownload('appstore')}>
//           <Image src='/app-store.svg' alt="App Store" width={50} height={50} />
//           Télécharger sur App Store
//         </button>
//       </div>

//       {/* QR Code */}
//       <center>
//       <div className={styles['qr-code-section']}>
//         {/* <Image src='/qrcode.png' alt="QR Code" width={50} height={50}className={styles['qr-code-image']} /> */}
//         <QRCode value='192.168.100.173:3000/template' size={200} />
//       </div>
//       <p >Scannez ce QR code pour télécharger directement l'application.</p>

//       </center>
//     </div>
//     </section>
//   );
// };

// export default DownloadApp;




import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/DownloadApp.module.css';
import QRCode from 'qrcode.react';

const DownloadApp = () => {
  const [qrCodeValue, setQrCodeValue] = useState('');

  useEffect(() => {
    // Assurez-vous que l'adresse IP est correcte pour votre réseau local
    setQrCodeValue('https://1081-154-72-168-198.ngrok-free.app/redirect'); // Changez l'adresse IP ici
  }, []);

  const handleDownload = (store) => {
    if (store === 'playstore') {
      // Utilisez un exemple de package name pour le Play Store
      window.location.href = 'https://play.google.com/store/apps/details?id=com.whatsapp';
    } else if (store === 'appstore') {
      // Utilisez un exemple d'app ID pour l'App Store
      window.location.href = 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997';
    }
  };

  return (
    <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
      <div className={styles['download-container']} data-aos="fade-up">
        {/* Section de l'image du téléphone et du texte */}
        <div className={styles['phone-section']}>
          <Image
            src='/phone-image.jpeg'
            alt="Phone"
            objectFit="cover"
            width={50}
            height={80}
            className={styles['phone-image']}
          />
          <div className={styles['phone-text']}>
            <h2>Téléchargez l&apos;application KEI !</h2>
            <p>Transformez votre quotidien avec notre application innovante.</p>
          </div>
        </div>

        {/* Section des boutons de téléchargement */}
        <div className={styles['button-section']}>
          <button
            className={styles['store-button']}
            onClick={() => handleDownload('playstore')}
          >
            <Image src='/playstore.svg' alt="Play Store" width={50} height={50} />
            Télécharger sur Play Store
          </button>
          <button
            className={styles['store-button']}
            onClick={() => handleDownload('appstore')}
          >
            <Image src='/app-store.svg' alt="App Store" width={50} height={50} />
            Télécharger sur App Store
          </button>
        </div>

        {/* QR Code */}
        <center>
          <div className={styles['qr-code-section']}>
            <QRCode value={qrCodeValue} size={200} />
          </div>
          {/* <div className={styles['qr-code-section']}>
            <QRCode value={qrCodeValue} size={200} />
          </div> */}
          <p>Scannez ce QR code pour télécharger directement l&apos;application.</p>
        </center>
      </div>
    </section>
  );
};

export default DownloadApp;
