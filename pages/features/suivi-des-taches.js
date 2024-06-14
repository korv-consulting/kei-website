
import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";


import Head from 'next/head'



const SuiviDesTaches = () => {

  const title1 = 'GEREZ VOS TACHES DE FACON OPTIMALE'
  const source1 ='/tools/planification.jpg'
  
  
  const descTitle = 'GESTION DES TACHES'
  
  const feat1Title = '1. Ajout, édition, archivage, désarchivage et suppression d\'une tache'
  const feat2Title = "2. Exécution d’une Tâche"
  const feat3Title = "3. Previsualiser et Clôturer une Tâche"
  const feat4Title = "4. Liste des taches"
  const feat5Title = "5. Liste des taches"


  const feat1 = `L'ajout de tâches sur notre plateforme est simple et intuitif. Que ce soit depuis un mobile ou une tablette, vous pouvez créer une nouvelle tâche en quelques clics. 
                 Renseignez tous les détails nécessaires tels que le titre, la description, la date d'échéance et assignez la tâche à un membre de votre équipe pour une organisation optimale..
                 Les changements sont inévitables dans la gestion de projets. Notre fonctionnalité d'édition permet de modifier tous les aspects d'une tâche en temps réel.
                 Ajustez les priorités, ajoutez des commentaires ou des pièces jointes et mettez à jour les statuts sans tracas.Pour maintenir une interface propre et dégagée, archivez les 
                 tâches complétées ou non prioritaires. Les tâches archivées ne sont pas perdues; vous pouvez les désarchiver à tout moment si elles redeviennent pertinentes.
                 Une gestion efficace implique parfois de supprimer des tâches obsolètes ou redondantes. Notre fonction de suppression est conçue pour être sécurisée et nécessite une confirmation 
                 pour éviter toute suppression accidentelle.

                 `;

  const feat2 = `Suivez et gérez l'avancement de chaque tâche de manière fluide. Chaque membre de l'équipe peut marquer les étapes de
                 réalisation, signaler les blocages ou les achèvements partiels, et recevoir des notifications en temps réel sur les mises à jour. 
                 Cette traçabilité garantit une transparence totale et une collaboration sans faille.
`


  const feat3 = `Avant de finaliser une tâche, utilisez notre fonction de prévisualisation pour vérifier tous les détails. Générer un PDF de la tâche vous permet de partager facilement 
                  un résumé  imprimable et formel des travaux effectués, complet avec toutes les annotations et les pièces jointes.
                 
                 Une fois qu'une tâche est terminée, marquez-la comme "clôturée". Cette action déclenche automatiquement une notification aux 
                 parties prenantes, et la tâche est déplacée vers les archives. La clôture d'une tâche inclut la possibilité d'ajouter des commentaires 
                 finaux
                 et de confirmer la satisfaction de toutes les exigences initiales.`


  const feat4 = ` Gardez une vue d'ensemble claire et organisée de toutes les tâches en cours, terminées ou archivées grâce à notre liste de tâches.
                  Utilisez des filtres puissants pour trier par priorité, échéance, statut ou membre de l'équipe assigné. Cette fonctionnalité 
                  assure que vous ne manquerez jamais une date limite et que toutes les tâches sont suivies de manière optimale.
                  Avec notre application, chaque aspect de la gestion des tâches est couvert, du début à la fin, assurant une productivité maximale
                  et une organisation impeccable.`



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

export default SuiviDesTaches;
