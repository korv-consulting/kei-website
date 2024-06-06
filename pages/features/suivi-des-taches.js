
import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";



const SuiviDesTaches = () => {

  const title1 = 'GEREZ VOS TACHES DE FACON OPTIMALE'
  const source1 ='/features/stain-tracking.webp'
  return (

    <>
      <Header />

      <div className={styles.pageContainer}>
        <FunctionalityPageHeader title={title1} source={source1}/>
        <div className={styles.content}>
          <Slogan/>
        </div>
        <Description/>
        <Footer/>
      </div>

      
      
    </>
  );
};

export default SuiviDesTaches;
