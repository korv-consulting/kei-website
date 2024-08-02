import React from "react";
import Image from "next/image";
import styles from "@/styles/Ads.module.css";

const Ads = () => {
  return (
    <div className={styles.adsContainer}>
      <div className={styles.adsHeader}>
        <h2>Pourquoi choisir Kei ?</h2>
        <h4>Le meilleur choix pour votre entreprise</h4>
      </div>

      <div className={styles.adsRow}>
        <div className={styles.adsCol}>
          <Image src="/security.svg" alt="La meilleure sécurité" width={790} height={570} layout="responsive" />
          <h3>La meilleure sécurité</h3>
          <p>
            Nous utilisons les technologies les plus récentes pour vous protéger contre les intrusions, les défauts et les fraudes.
          </p>
        </div>

        <div className={styles.adsCol}>
          <Image src="/reports.svg" alt="Des rapports intuitifs et ergonomiques" width={790} height={570} layout="responsive" />
          <h3>Des rapports intuitifs et ergonomiques</h3>
          <p>
            Créez des rapports personnalisés pour analyser vos données, détecter les problèmes et vous orienter vers les solutions efficaces.
          </p>
        </div>

        <div className={styles.adsCol}>
          <Image src="/fees.svg" alt="Les tarifs les plus bas" width={790} height={570} layout="responsive" />
          <h3>Les tarifs les plus bas</h3>
          <p>
            Nous proposons des tarifs tout compris, avec ou sans contrat pour votre entreprise. N'attendez plus pour vous décider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ads;
