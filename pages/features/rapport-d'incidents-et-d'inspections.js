
import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";
import IncidentReports from "components/partials/featuresDetails/IncidentReports"

import Head from 'next/head'


const RapportsIncidentsInspections = () => {

  const title1 = 'VOTRE OUTIL DE RAPPORTS QUOTIDIENS,EXPORTEZ VOS RAPPORTS EN UN CLIC '
  const source1 ='/tools/rapport.jpg'
  
  
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

      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title> KEI Website </title> <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link rel="icon" href="/logo-kei.png" />
        <link
          href="./../public/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
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

        <IncidentReports /> 

        <Footer />


      </div>
    </>
  );
};

export default RapportsIncidentsInspections;
