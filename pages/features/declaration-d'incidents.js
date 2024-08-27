import Head from "next/head";
import Header from "../component/header";
import FunctionalityPageHeader from "../component/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "../component/featuresDetails/slogan";
import Footer from "../component/footer";
import Description from "../component/featuresDetails/Description";
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DeclarationIncidents = () => {
  const { t } = useTranslation('declarationIncident');

  const title1 = t('title');
  const source1 = '/tools/declaration.jpg';

  const descTitle = t('descriptionTitle');
  const feat1Title = t('feat1Title');
  const feat2Title = t('feat2Title');
  const feat3Title = t('feat3Title');
  const feat4Title = t('feat4Title');

  const feat1 = t('feat1');
  const feat2 = t('feat2');
  const feat3 = t('feat3');
  const feat4 = t('feat4');

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KEI Website - Declaration d'Incidents</title>
        <meta name="description" content={t('metaDescription')} />
        <meta name="keywords" content={t('metaKeywords')} />
        <link rel="icon" href="/logo-kei.png" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <Header />
      <div className={styles.pageContainer}>
        <FunctionalityPageHeader 
          title={title1} 
          source={source1} 
        />
        <div className={styles.content}>
          <Slogan />
        </div>
        <Description
          descriptionTitle={descTitle}
          feature1Title={feat1Title}
          feature2Title={feat2Title}
          feature3Title={feat3Title}
          feature4Title={feat4Title}
          feature1Content={feat1}
          feature2Content={feat2}
          feature3Content={feat3}
          feature4Content={feat4} 
        />
        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['declarationIncident', 'footer','header', 'slogan', 'espace_de_travail', 'incidentReport', 'planification_etats_des_lieux', 'rapports_incidents_inspections', 'realisation_etats_des_lieux', 'suivi_des_taches', 'newsletter'])),
    },
  };
}

export default DeclarationIncidents;
