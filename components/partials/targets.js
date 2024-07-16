
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/Targets.module.css';

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
              CONÇU ET DÉVELOPPÉ POUR LES PROFESSIONNELS DE L'IMMOBILIER
            </h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-8">
          <div className="col-md-6">
            <div className={`${styles.featureDescription}`}>
              <p className={` ${styles.Intro}`}>
                Notre application innovante regorge de fonctionnalités conçues spécifiquement pour répondre aux besoins variés des professionnels de l'immobilier. Parmi nos utilisateurs, nous comptons :
              </p>
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <ul className={styles.featureText}>
                    <li>Inspecteurs en bâtiment</li>
                    <li>Fournisseurs d'inventaire</li>
                    <li>Gestionnaires de logements</li>
                    <li>Gestionnaires de propriétés</li>
                    <li>Agents immobiliers et de location</li>
                    <li>Autorité et régulation du bâtiment</li>
                    <li>Gestionnaires de blocs résidentiels</li>
                  </ul>
                </div>
                <div className={`col-md-6 ${styles.descPart2}`}>
                  <ul className={styles.featureText}>
                    <li>Sociétés de location</li>
                    <li>Sociétés de construction</li>
                    <li>Investisseurs immobiliers</li>
                    <li>Institutions universitaires</li>
                    <li>Sociétés de gestion de logements</li>
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
