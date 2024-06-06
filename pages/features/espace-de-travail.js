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

  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <FunctionalityPageHeader title={title1} source={source1} />
        <div className={styles.content}>
          <Slogan />
        </div>
        <Description />
        <Footer />
      </div>
    </>
  );
};

export default EspaceDeTravail;
