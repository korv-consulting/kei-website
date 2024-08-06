import React from "react";
import Image from "next/image";
import styles from "@/styles/Ads.module.css";

const Ads = () => {
  return (
    <div className={styles.adsContainer}>
      <div className={styles.adsHeader} data-aos="fade-up">
        <h2>Pourquoi choisir Kei ?</h2>
        <h4>Le meilleur choix pour votre entreprise</h4>
      </div>
<center>
      <div className={styles.adsRow}>
        <div className={styles.adsCol} data-aos="fade-right" data-aos-delay="300">
          <Image src="/security.svg" alt="La meilleure sécurité" width={100} height={100} layout="responsive" />
          <h3>La meilleure sécurité</h3>
          <p>
            Nous utilisons les technologies les plus récentes pour vous protéger contre les intrusions, les défauts et les fraudes.
          </p>
        </div>

        <div className={styles.adsCol} data-aos="fade-up" data-aos-delay="500">
          <Image src="/reports.svg" alt="Des rapports intuitifs et ergonomiques" width={100} height={100} layout="responsive" />
          <h3>Des rapports intuitifs et ergonomiques</h3>
          <p>
            Créez des rapports personnalisés pour analyser vos données, détecter les problèmes et vous orienter vers les solutions efficaces.
          </p>
        </div>

        <div className={styles.adsCol} data-aos="fade-left" data-aos-delay="700">
          <Image src="/fees.svg" alt="Les tarifs les plus bas" width={100} height={100} layout="responsive" />
          <h3>Les tarifs les plus bas</h3>
          <p>
            Nous proposons des tarifs tout compris, avec ou sans contrat pour votre entreprise. N'attendez plus pour vous décider.
          </p>
        </div>
        
      </div>
      </center>
    </div>
    
  );
};

export default Ads;
