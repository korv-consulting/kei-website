import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Targets.module.css';
import { FaCheck, FaBuilding, FaUserTie, FaHome, FaClipboardList, FaUserGraduate, FaUserCog, FaMoneyBillAlt, FaTools, FaChartLine, FaUniversity, FaUsersCog } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

const Targets = () => {
  const { t } = useTranslation('target');
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const images = [
    '/agents/Redbuilding.png',
    // '/agents/a1.png',
    '/agents/a2.png',
    '/agents/8.jpg',
    '/agents/3.jpg',
    '/agents/7.jpg',
    // '/agents/9.jpg',
    '/agents/10.jpg',
    // '/agents/4.jpg',
    '/agents/133.jpg',
    '/agents/1.jpg',
    '/agents/11.jpg',
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

  const targetList = t('targets', { returnObjects: true });

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
              {t('title')}
            </h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-8">
          <div className="col-md-6">
            <div className={`${styles.featureDescription} fs-5`}>
              <p className={` ${styles.Intro}`}>
                {t('intro')}
              </p>
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <ul className={styles.featureText}>
                    {Array.isArray(targetList) && targetList.slice(8).map((target, index) => (
                      <li key={index} className={`${styles.targetListItem} `}>
                        {targetIcons[index]} {target}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`col-md-6 ${styles.descPart2}`}>
                  <ul className={styles.featureText}>
                    {Array.isArray(targetList) && targetList.slice(7).map((target, index) => (
                      <li key={index + 7} className={`${styles.targetListItem} `}>
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
                width={500}
                height={400}
                className={`w-100 ${styles.carouselImage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Targets;
