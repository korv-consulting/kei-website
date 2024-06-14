import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";


import Head from "next/head";


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

export default EspaceDeTravail;




