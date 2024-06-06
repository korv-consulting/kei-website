import React from 'react';
import Image from 'next/image';
import styles from '@/styles/features/Description.module.css';

const Description = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={`${styles.featuresTitle} `}>SOYEZ PLUS EFFICACE EN CREANT UN ESPACE DE TRAVAIL</h2>
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
              <h3 className={styles.featureTitle}>Ajout, édition, archivage, désarchivage et suppression d'un espace</h3>
              <p className={styles.featureText}>
                Gérez facilement vos espaces de travail en les ajoutant, modifiant, archivant, désarchivant ou supprimant selon vos
                besoins. Gardez une vue d'ensemble de votre environnement de travail et adaptez-le en fonction de l'évolution de
                vos projets.
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
              <h3 className={styles.featureTitle}>Ajout d'une tâche à partir d'un espace</h3>
              <p className={styles.featureText}>
                Depuis votre espace de travail, créez facilement de nouvelles tâches en les reliant directement à cet espace.
                Gagnez en efficacité en centralisant la gestion de vos projets dans un seul endroit.
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
              <h3 className={styles.featureTitle}>Affichage des informations détaillées d'un espace</h3>
              <p className={styles.featureText}>
                Accédez rapidement à tous les détails d'un espace de travail, notamment la liste de ses tâches et des
                utilisateurs qui y sont associés. Gardez une vision globale de vos projets et de votre équipe pour une
                meilleure coordination.
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
              <h3 className={styles.featureTitle}>Liste des espaces de travail</h3>
              <p className={styles.featureText}>
                Visualisez rapidement tous vos espaces de travail dans une liste centralisée. Naviguez facilement entre vos
                différents projets et accédez aux informations essentielles de chacun d'entre eux en un clin d'œil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
