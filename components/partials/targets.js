// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import styles from '@/styles/Targets.module.css';
// import { Link } from 'next/link';

// const Targets = () => {
//   const featureRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.animateFadeInUp);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     featureRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       featureRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <div>
//       <div className="container p-5 mb-3">
//         <div className="row d-flex justify-content-center">
//           <div className="text-center">
//             <h2 className={` ${styles.title}`}>

//              CONÇU ET DÉVELOPPÉ POUR LES PROFESSIONNELS DE L'IMMOBILIER </h2>
//           </div>
//         </div>
//         <div
//           className="row d-flex justify-content-center mb-8"
//           ref={(el) => (featureRefs.current[0] = el)}
//         >
//           <div className="col-md-6">
//             <div className={`${styles.featureDescription}`}>
//               <p className={` ${styles.Intro}`}>
//                 Notre application innovante regorge de fonctionnalités conçues spécifiquement pour répondre aux besoins variés des professionnels
//                 de l'immobilier. Parmi nos utilisateurs, nous comptons :
//               </p>
//               <div className="row d-flex justify-content-center">
//                 <div className="col-md-6">
//                   <p className={styles.featureText}>
//                     <ul>
//                       <li>Fournisseurs d'inventaire</li>
//                       <li>Agents immobiliers et de location</li>
//                       <li>Gestionnaires de propriétés</li>
//                       <li>Gestionnaires de blocs résidentiels</li>
//                       <li>Gestionnaires de logements</li>
//                       <li>Inspecteurs en bâtiment</li>
//                       <li>Institutions universitaires</li>
//                       <li>Conseils</li>
//                     </ul>
//                   </p>
//                 </div>
//                 <div className="col-md-6">
//                   <p className={styles.featureText}>
//                     <ul>
//                       <li>Sociétés de construction</li>
//                       <li>Investisseurs immobiliers</li>
//                       <li>Sociétés de location</li>
//                       <li>Compagnies d’assurance</li>
//                       <li>Sociétés de gestion de logements</li>
//                     </ul>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className={`${styles.featureImageContainer}`}>
//               <Image
//                 src="/target.webp"
//                 alt="Ajout et édition des espaces"
//                 width={1400}
//                 height={800}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Targets;





















import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/Targets.module.css';

const Targets = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateFadeInUp);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="container p-5 mb-3">
        <div className="row d-flex justify-content-center">
          <div className="text-center">
            <h2 className={`mb-20 ${styles.title}`}>
              CONÇU ET DÉVELOPPÉ POUR LES PROFESSIONNELS DE L'IMMOBILIER
            </h2>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center mb-8"
          ref={(el) => (featureRefs.current[0] = el)}
        >
          <div className="col-md-6">
            <div className={`${styles.featureDescription}`}>
              <p className={` ${styles.Intro}`}>
                Notre application innovante regorge de fonctionnalités conçues spécifiquement pour répondre aux besoins variés des professionnels de l'immobilier. Parmi nos utilisateurs, nous comptons :
              </p>
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <ul className={styles.featureText}>
                    <li>Inspecteurs en bâtiment</li>
                    <li>Fournisseurs d'inventaire</li>
                    <li>Gestionnaires de logements</li>
                    <li>Gestionnaires de propriétés</li>
                    <li>Agents immobiliers et de location</li>
                    <li>Autorite et régulation du bâtiment </li>
                    <li>Gestionnaires de blocs résidentiels</li>

                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className={styles.featureText}>
                    <li>Sociétés de location</li>
                    <li>Sociétés de location</li>
                    <li>Sociétés de construction</li>
                    <li>Investisseurs immobiliers</li>
                    <li>Institutions universitaires</li>
                    <li>Sociétés de gestion de logements</li>


                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.featureImageContainer}`}>
              <Image
                src="/target.webp"
                alt="Ajout et édition des espaces"
                width={1400}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targets;
