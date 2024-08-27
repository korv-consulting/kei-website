import { useState, useEffect } from 'react';
import styles from '@/styles/LandingPage.module.css';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const { t } = useTranslation('landing');

  const textElements = [
    t('text1'),
    t('text2'),
    t('text3')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textElements.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [textElements]);

  return (
    <div>
      <section id="home" className="hero">
        <div className="container-fluid p-0">
          <div className="row d-flex justify-content-center m-0">
            <div className="col-12 p-0">
              <div className="card text-bg-dark border-0">
                <div className={styles.videoContainer}>
                  <video autoPlay muted loop className={styles.video}>
                    <source src="/cover.webm" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                  </video>
                  <div className={styles.videoOverlay}>
                    <h1 className={`display-lg- w-100  mb-0 ${styles.title}`}>
                      KORV Estatement Inventory
                    </h1>
                    <h3 className={`fs-4 mb-5 w-75 mx-auto ${styles.subtitle} ${isVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutDown'}`}>
                      {textElements[currentIndex]}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
