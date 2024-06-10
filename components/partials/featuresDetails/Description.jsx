import React from 'react';
import Image from 'next/image';
import styles from '@/styles/features/Description.module.css';

const Description = ({descriptionTitle,feature1Title,feature2Title,feature3Title,feature4Title,feature1Content,feature2Content,feature3Content,feature4Content}) => {
  return (
    <div className={styles.featuresContainer}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={`${styles.featuresTitle} `}>{descriptionTitle}</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <div className={styles.featureImageContainer}>
              <Image src="/features/workspace-add-edit.png" alt="Ajout et édition des espaces" width={400} height={300} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.featureDescription}>
              <h3 className={styles.featureTitle}>{feature1Title}</h3>
              <p className={styles.featureText}>
               {feature1Content}
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-md-6 order-md-2">
            <div className={styles.featureImageContainer}>
              <Image src="/features/workspace-task-add.png" alt="Ajout de tâche depuis un espace" width={400} height={300} />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className={styles.featureDescription}>
              <h3 className={styles.featureTitle}> {feature2Title}  </h3>
              <p className={styles.featureText}>               {feature2Content}

              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <div className={styles.featureImageContainer}>
              <Image src="/features/workspace-details.png" alt="Informations détaillées d'un espace" width={400} height={300} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.featureDescription}>
              <h3 className={styles.featureTitle}>               {feature3Title}
              </h3>
              <p className={styles.featureText}>
              {feature3Content}

              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-md-6 order-md-2">
            <div className={styles.featureImageContainer}>
              <Image src="/features/workspace-list.png" alt="Liste des espaces de travail" width={400} height={300} />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className={styles.featureDescription}>
              <h3 className={styles.featureTitle}>               {feature4Title}
              </h3>
              <p className={styles.featureText}>
              {feature4Content}

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
