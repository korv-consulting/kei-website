import Header from "components/partials/header";
import ScrollToTopButton from "components/partials/scrollTop";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import LandingPage from '../../components/partials/landingPage';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";

const EspaceDeTravail = () => {

  const source1 = '/workspace.png';
  const title1 = 'CREEZ VOS ESPACES DE TRAVAIL  ET AYEZ LE CONTROLE SUR TOUT !';
  const feat1 =''
  const feat2 =''
  const feat3 =''
  const feat4 =''
  const descTitle ='SOYEZ PLUS EFFICACES EN CREANT UN ESPACE DE TRAVAIL'
  const feat1Title ='SOYEZ PLUS EFFICACES EN CREANT UN ESPACE DE TRAVAIL'
  

  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <FunctionalityPageHeader title={title1} source={source1} />
        <div className={styles.content}>
          <Slogan />
        </div>
        <Description title={descTitle} feature1={feat1} feature2={feat2} feature3={feat3} feature4={feat4}  />
        <Footer />
      </div>
    </>
  );
};

export default EspaceDeTravail;
