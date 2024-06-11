
import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";
import IncidentReports from "components/partials/featuresDetails/IncidentReports"



const RapportsIncidentsInspections = () => {

  const title1 = 'VOTRE OUTIL DE RAPPORTS QUOTIDIENS,EXPORTEZ VOS RAPPORTS EN UN CLIC '
  const source1 ='/features/report.jpg'
  
  
  const descTitle = 'RAPPORTS  D\'INCIDENTS ET D\'INSPECTIONS'
  
  const feat1Title = '1. Création Facile de Rapports'
  const feat2Title = "2. Gestion Efficace des Rapports"
  const feat3Title = "3. Documentation Complète et Précise"
  const feat4Title = "4. Exportation et Partage Simplifiés"


  const feat1 = `Créez des rapports d'incident et d'inspection directement depuis votre mobile ou tablette. Notre application simplifie le processus de documentation,
                 vous permettant de saisir rapidement toutes les informations nécessaires, y compris des descriptions détaillées, des photos et des annotations.
                 `;

  const feat2 = `Gérez tous vos rapports en un seul endroit. Classez, filtrez et retrouvez facilement vos rapports d'incident et d'inspection. Avec une interface 
                 utilisateur intuitive, accédez rapidement à toutes les informations importantes et assurez un suivi rigoureux de chaque incident ou inspection.
                `


  const feat3 = `Capturez chaque détail avec précision. Notre application permet d’inclure des photos, des signatures et des annotations dans vos rapports,
                 garantissant ainsi une documentation complète et fidèle des incidents et inspections. Chaque rapport est horodaté et signé pour une traçabilité maximale.

                 `


  const feat4 = `Exportez vos rapports en un clic. Générez des fichiers PDF professionnels à partir de vos rapports et partagez-les facilement avec les parties 
                 concernées. Que ce soit pour une analyse interne ou pour des besoins de conformité, nos outils d’exportation rendent le processus rapide et sans tracas.




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

        <IncidentReports /> 

        <Footer />


      </div>
    </>
  );
};

export default RapportsIncidentsInspections;
