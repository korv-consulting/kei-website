import React from 'react';
import styles from '@/styles/features/Slogan.module.css';

const Slogan= () => {
  return (
    <div className={styles.sloganContainer}>
      <h2 className={styles.sloganTitle}>Explorez l'état de vos biens avec un regard neuf</h2>
      <p className={styles.sloganParagraph}>
        Notre plateforme d'inspection immobilière simplifie la capture et le suivi de l'état de vos propriétés, du sol au plafond. Armez-vous d'un outil puissant pour garantir la qualité de votre patrimoine, des rapports détaillés aux photos saisissantes. Libérez-vous des tâches chronophages et concentrez-vous sur l'essentiel - offrir à vos clients une expérience d'expertise inégalée. Avec notre application, votre expertise devient le reflet d'une gestion immobilière hors pair, bâtie sur la transparence et la fiabilité.
      </p>
      <p className={styles.callToAction}>Les autres nous ont fait confiance, pourquoi pas vous ?</p>
      <button className={styles.demoButton}>Obtenir une démo</button>
    </div>
  );
};

export default Slogan;
