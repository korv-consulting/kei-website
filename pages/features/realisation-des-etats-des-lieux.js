
import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";



const RealisationEtatsDesLieux = () => {

  const title1 = 'CAPTUREZ CHAQUE DETAIL,PHOTOGRAPHIEZ ET CONSTATEZ'
  const source1 ='/features/carrying-out-inventory.png'
  
  
  const descTitle = 'REALISATION DES ETATS DES LIEUX'
  
  const feat1Title = '1. Inspection Initiale et Finale:'
  const feat2Title = "2. Documentation Complète et Précise"
  const feat3Title = "3. Suivi et Gestion des Anomalies"
  const feat4Title = "4. Gain de Temps et Efficacité"


  const feat1 = `Réalisez des états des lieux d’entrée et de sortie en toute simplicité. Notre application vous guide à travers chaque étape pour garantir que chaque
                 détail est documenté correctement. Avec la prise de photos intégrée, capturez l'état de la propriété dès le début et à la fin de chaque location pour 
                 éviter toute contestation future.
                 `;

  const feat2 = `Créez des rapports d’état des lieux détaillés avec des photos à l'appui. Chaque constat est horodaté et géolocalisé pour assurer la précision et la
                 fiabilité. Les rapports peuvent être générés en PDF et partagés facilement avec toutes les parties prenantes, garantissant une transparence totale.
`


  const feat3 = `Identifiez et documentez les anomalies dès leur apparition. Notre plateforme permet de suivre l'état de chaque élément de la propriété et
                 d’enregistrer toute détérioration ou réparation nécessaire. Facilitez les discussions avec les locataires et les propriétaires grâce à des
                  preuves photographiques claires.
                 `


  const feat4 = `Avec notre application, l'état des lieux devient une tâche rapide et efficace. Évitez les pertes de temps grâce à des modèles de rapports préconfigurés
                 et des fonctionnalités d’automatisation. La prise de photos et l’ajout de notes se font en quelques clics, ce qui permet de se concentrer sur l'essentiel :
                  assurer une transition fluide entre les locataires.


                  `



  const img1 = ''                
  


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

export default RealisationEtatsDesLieux;
