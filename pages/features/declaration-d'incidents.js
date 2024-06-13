
import Header from "components/partials/header";
import FunctionalityPageHeader from "components/partials/featuresDetails/FunctionalityPageHeader";
import styles from '@/styles/features/FunctionalityPage.module.css';
import Slogan from "components/partials/featuresDetails/slogan";
import Footer from "components/partials/footer";
import Description from "components/partials/featuresDetails/Description";



const DeclarationIncidents = () => {

  const title1 = 'INCIDENTS A LA LOUPE'
  const source1 ='/tools/declaration.jpg'
  
  
  const descTitle = 'DECLARATION D\'INCIDENTS'
  
  const feat1Title = '1.Signalement rapide et intuitif'
  const feat2Title = "2.Documentation détaillée et centralisée"
  const feat3Title = "3.Notifications et alerte en temps reel"
  const feat4Title = "4. Analyse et rapports automatisés"


  const feat1 = `Notre plateforme permet aux utilisateurs de signaler des incidents en quelques clics. Que ce soit via un smartphone, une tablette ou un ordinateur, les utilisateurs 
                 peuvent rapidement documenter un  problème en y ajoutant des descriptions, des photos et des vidéos. Cette fonctionnalité garantit une réponse rapide et efficace aux 
                 incidents, améliorant ainsi
                 la gestion des propriétés.
                 `;

  const feat2 = `Chaque incident signalé est automatiquement enregistré dans le système, avec une traçabilité complète des actions entreprises. Les utilisateurs peuvent consulter 
                 l'historique des incidents pour chaque propriété, incluant les détails tels que les dates, les descriptions, les médias joints et les mesures correctives prises. 
                 Cette documentation centralisée facilite la gestion et le suivi des incidents.
`


  const feat3 = `Grâce aux notifications et alertes en temps réel, les parties prenantes sont immédiatement informées lorsqu'un incident est signalé. Cela permet aux gestionnaires de
                 propriétés et aux équipes de maintenance de réagir promptement, réduisant ainsi les temps d'intervention et les potentiels dégâts. Les notifications peuvent être 
                 personnalisées selon les préférences de chaque utilisateur, assurant ainsi une communication efficace.
                 `


  const feat4 = ` Notre outil génère automatiquement des rapports détaillés sur les incidents, incluant des statistiques et des analyses sur les types d'incidents récurrents, les temps 
                    de résolution, et les coûts associés. Ces rapports aident à identifier les tendances et à mettre en place des mesures préventives pour éviter les incidents futurs.
                     Les rapports peuvent être exportés en PDF pour une distribution facile aux parties prenantes.
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

export default DeclarationIncidents;
