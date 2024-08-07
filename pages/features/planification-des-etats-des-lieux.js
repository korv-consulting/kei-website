
import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";
import Head from 'next/head'



const PlanificationEtatsDesLieux = () => {

  const title1 = 'ORGANISEZ VOS INSPECTIONS A DISTANCCE '
  const source1 ='/tools/plan.jpg'
  
  
  const descTitle = 'PLANIFICATION DES ETATS DES LIEUX'
  
  const feat1Title = '1. Planification Flexible et Facile'
  const feat2Title = "2. Inspections Vidéo à Distance"
  const feat3Title = "3. Documentation en Temps Réel"
  const feat4Title = "4. Suivi et Rapport Simplifiés"


  const feat1 = `Organisez vos états des lieux selon votre emploi du temps. Avec notre outil de planification intégré, vous pouvez facilement sélectionner une
                 date et une heure pour réaliser vos inspections. Plus besoin de coordonner des visites en personne – tout se fait en ligne, à votre convenance.
                 `;

  const feat2 = `Réalisez vos états des lieux via des appels vidéo en direct. Notre plateforme permet de connecter locataires, propriétaires et agents immobiliers 
                pour des inspections en temps réel, sans avoir à se déplacer. Cela garantit une flexibilité maximale et une réduction des déplacements inutiles.
                `


  const feat3 = `Capturez des preuves visuelles en temps réel lors de l’appel vidéo. Prenez des captures d’écran et enregistrez des vidéos pendant l’inspection pour 
                 documenter l'état des lieux avec précision. Toutes les informations sont horodatées et stockées de manière sécurisée pour une consultation ultérieure.
                 `


  const feat4 = `Après chaque inspection vidéo, générez automatiquement des rapports détaillés. Nos modèles de rapport préconfigurés facilitent la création de documents 
                 professionnels, incluant toutes les informations essentielles et les captures d’écran prises pendant l’appel vidéo. Partagez ces rapports avec les parties
                  concernées en quelques clics pour une transparence totale.




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

        <Footer />


      </div>
    </>
  );
};

export default PlanificationEtatsDesLieux;
