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

  const targetList = t('targets', { returnObjects: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateFadeInUp);
            observer.unobserve(entry.target); // Stop observing the element to prevent the animation from repeating at each intersection.
          }
        });
      },
      {
        threshold: 0.1, // The animation triggers when 10% of the elements are visible.
      }
    );

    // If the reference is not null, the observation of the section is initiated. The reference is null by default when the page is not yet loaded, so the component is not yet mounted.
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Handling the auto-scroll of the real estate agents' images.
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Ensures the rotation of the images.
    }, 2500);

    // Cleaning function to avoid memory losses.
    return () => {
      // For the animation.
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      // For the images' rotation.
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
            <div className={`${styles.featureDescription}`}>
              <p className={` ${styles.Intro}`}>
                {t('intro')}
              </p>
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <ul className={styles.featureText}>
                    {Array.isArray(targetList) && targetList.slice(8).map((target, index) => (
                      <li key={index} className={styles.targetListItem}>
                        {targetIcons[index]} {target}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`col-md-6 ${styles.descPart2}`}>
                  <ul className={styles.featureText}>
                    {Array.isArray(targetList) && targetList.slice(7).map((target, index) => (
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
                width={300}
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
