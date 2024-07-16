import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Targets.module.css';
import { FaCheck, FaBuilding, FaUserTie, FaHome, FaClipboardList, FaUserGraduate, FaUserCog, FaMoneyBillAlt, FaTools, FaChartLine, FaUniversity, FaUsersCog } from 'react-icons/fa';

const Targets = () => {
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
  ];

  const targetIcons = [
    <FaCheck className={styles.targetIcon} />,
    <FaBuilding className={styles.targetIcon} />,
    <FaUserTie className={styles.targetIcon} />,
    <FaHome className={styles.targetIcon} />,
    <FaClipboardList className={styles.targetIcon} />,
    <FaUserGraduate className={styles.targetIcon} />,
    <FaUserCog className={styles.targetIcon} />,
    <FaMoneyBillAlt className={styles.targetIcon} />,
    <FaTools className={styles.targetIcon} />,
    <FaChartLine className={styles.targetIcon} />,
    <FaUniversity className={styles.targetIcon} />,
    <FaUsersCog className={styles.targetIcon} />,
  ];

  const targetList = [
    'Inspecteurs en bâtiment',
    'Fournisseurs d\'inventaire',
    'Gestionnaires de logements',
    'Gestionnaires de propriétés',
    'Agents immobiliers et de location',
    'Autorité et régulation du bâtiment',
    'Gestionnaires de blocs résidentiels',
    'Sociétés de location',
    'Sociétés de construction',
    'Investisseurs immobiliers',
    'Institutions universitaires',
    'Sociétés de gestion de logements',
  ];



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateFadeInUp);
            observer.unobserve(entry.target);//Arrête d'observer l'élément pour éviter que l'animation se répète à chaque intersection.
          }
        });
      },
      {
        threshold: 0.1,//l'animation se declenche lorsque 10% des elements sont visibles
      }
    );


    //si la reference est non nulle l'observation de la section est initiee,la reference est  nulle par defaut lorsque la page ,n'est pas 
    // encore chargee,par consequent lorsque le composant n'est pas encore monte
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    //Handling the AUTO SCROLL OF THE REAL ESTATE AGENTS'S IMAGES

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);//ensures the rotation of the images
    }, 2500);


    //cleaning function to avoid memory losses
    return () => {
      //for the animation
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      //for the images's rotation
      clearInterval(intervalId);
    };
  }, []);



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
                    {targetList.slice(0, 7).map((target, index) => (
                      <li key={index} className={styles.targetListItem}>
                        {targetIcons[index]} {target}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`col-md-6 ${styles.descPart2}`}>
                  <ul className={styles.featureText}>
                    {targetList.slice(7).map((target, index) => (
                      <li key={index + 7} className={styles.targetListItem}>
                        {targetIcons[index + 7]} {target}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.featureImageContainer}`}>
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                width={400}
                height={400}
                className={styles.carouselImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Targets;
