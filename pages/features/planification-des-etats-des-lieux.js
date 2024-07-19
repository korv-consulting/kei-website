import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "../component/header";
import FunctionalityPageHeader from "../component/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "../component/featuresDetails/slogan";
import Footer from "../component/footer";
import Description from "../component/featuresDetails/Description";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PlanificationEtatsDesLieux = () => {
  const { t } = useTranslation('planification_etats_des_lieux');

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{t('title1')}</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link rel="icon" href="/logo-kei.png" />
        <link
          href="./../public/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
      </Head>
      <Header />

      <div className={styles.pageContainer}>
        <FunctionalityPageHeader 
          title={t('title1')} 
          source='/tools/plan.jpg'
        />

        <div className={styles.content}>
          <Slogan />
        </div>

        <Description
          descriptionTitle={t('descTitle')}
          feature1Title={t('feat1Title')}
          feature2Title={t('feat2Title')}
          feature3Title={t('feat3Title')}
          feature4Title={t('feat4Title')}
          feature1Content={t('feat1')}
          feature2Content={t('feat2')}
          feature3Content={t('feat3')}
          feature4Content={t('feat4')} 
        />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['declarationIncident', 'footer','header', 'slogan', 'espace_de_travail', 'incidentReport', 'planification_etats_des_lieux', 'rapports_incidents_inspections', 'realisation_etats_des_lieux', 'suivi_des_taches'])),
    },
  };
}

export default PlanificationEtatsDesLieux;
