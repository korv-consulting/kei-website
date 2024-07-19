
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/Targets.module.css';
import { useTranslation } from 'react-i18next';

const Targets = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateFadeInUp); // Ajouter la classe d'animation lorsque la section est visible
            observer.unobserve(entry.target); // Arrêter d'observer une fois l'animation appliquée
          }
        });
      },
      {
        threshold: 0.1, // Déclencher l'observation lorsque 10% de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Effect exécuté une seule fois au montage du composant
  
  const {t} = useTranslation('target')

  return (
    <section
      id="targets"
      className={` ${styles.targets} ${styles.section}`}
      ref={sectionRef}
    >
      <div className="container p-5 mb-3">
        <div className="row d-flex justify-content-center">
          <div className="text-center">
            <h2 className={`mb-20 ${styles.title}`}>
              {t('title')}
            </h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-8">
          <div className="col-md-6">
            <div className={`${styles.featureDescription}`}>
              <p className={` ${styles.Intro}`}>
                {t('intro')}
              </p>
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <ul className={styles.featureText}>
                    <li>{t('li11')}</li>
                    <li>{t('li12')}</li>
                    <li>{t('li13')}</li>
                    <li>{t('li14')}</li>
                    <li>{t('li15')}</li>
                    <li>{t('li16')}</li>
                    <li>{t('li17')}</li>
                  </ul>
                </div>
                <div className={`col-md-6 ${styles.descPart2}`}>
                  <ul className={styles.featureText}>
                    <li>{t('li21')}</li>
                    <li>{t('li22')}</li>
                    <li>{t('li23')}</li>
                    <li>{t('li24')}</li>
                    <li>{t('li25')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.featureImageContainer}`}>
              <Image
                src="/target.webp"
                alt="Ajout et édition des espaces"
                width={1400}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Targets;
