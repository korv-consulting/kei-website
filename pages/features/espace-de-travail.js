import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";

const EspaceDeTravail = () => {

  const source1 = '/tools/workspace.jpg';
  const title1 = 'CREEZ VOS ESPACES DE TRAVAIL  ET AYEZ LE CONTROLE SUR TOUT !';
  const feat1 = "Gérez facilement vos espaces de travail en les ajoutant, modifiant, archivant, désarchivant ou supprimant selon vos besoins. Gardez une vue d'ensemble de votre environnement de travail et adaptez-le en fonction de l'évolution de vos projets.";
  const feat2 = "Depuis votre espace de travail, créez facilement de nouvelles tâches en les reliant directement à cet espace. Gagnez en efficacité en centralisant la gestion de vos projets dans un seul endroit."
  const feat3 = "  Accédez rapidement à tous les détails d'un espace de travail, notamment la liste de ses tâches et desutilisateurs qui y sont associés. Gardez une vision globale de vos projets et de votre équipe pour une meilleure coordination."
  const feat4 = " Visualisez rapidement tous vos espaces de travail dans une liste centralisée. Naviguez facilement entre vosdifférents projets et accédez aux informations essentielles de chacun d'entre eux en un clin d'œil."
  const descTitle = 'SOYEZ PLUS EFFICACES EN CREANT UN ESPACE DE TRAVAIL'
  const feat1Title = '1. Ajout, édition, archivage, désarchivage et suppression d\'un espace'
  const feat2Title = "2. Ajout d'une tâche à partir d'un espace"
  const feat3Title = "3. Affichage des informations détaillées d'un espace"
  const feat4Title = "4. Liste des espaces de travail"



  return (
    <>
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

export default EspaceDeTravail;




