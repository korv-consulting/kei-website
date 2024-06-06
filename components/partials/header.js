
// import styles from '@/styles/app.module.css'
// import { BsList } from 'react-icons/bs';
// import Image from 'next/image'
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Header() {
//   const [isActive, setIsActive] = useState(1);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const router = useRouter();

//   const toggleModal = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   return (
//     <>
//       <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`}>
//         <div className="container-fluid container-xl position-relative d-flex align-items-center">
//           <a href="" className={`d-flex align-items-center me-auto ${styles.logo}`}>
//             <h1 className={styles.sitename}>
//               <Image src="/logo-kei.png" width={100} height={100} alt="KEI Logo" />
//             </h1>
//           </a>

//           <nav id="navmenu" className={`navmenu ${styles.navmenu}`}>
//             <ul>
//               <li><a href="#home" onClick={() => setIsActive(1)} className={isActive == 1 ? styles.active : ""}>Accueil</a></li>
//               <li
//                 onMouseEnter={toggleModal}
//                 onMouseLeave={toggleModal}
//                 onClick={()=> setIsActive(2)}
//                 className={isActive == 2 ? styles.active : ""}
//               >
//                 <a href="#features">Fonctionnalités</a>
//                 {isModalVisible && (
//                   <div className={`${styles.modal} ${styles.verticalModal}`}>
//                     <ul className={styles.verticalList}>
//                       <li><a href="features/espace-de-travail">Espace de travail</a></li>
//                       <li><a href="features/suivi-des-taches">Suivi des taches</a></li>
//                       <li><a href="features/declaration-d'incidents">Declaration d'incident</a></li>

//                       <li><a href="features/realisation-des-etats-des-lieux">Realisation des etats des lieux</a></li>
//                       <li><a href="features/planification-des-etats-des-lieux">Planification de l'etat des lieux</a></li>
//                       <li><a href="features/rapport-d'incidents-et-d'inspections">Rapport d'incidents et d'inspections</a></li>
//                     </ul>
//                   </div>
//                 )}
//               </li>
//               <li><a href="#demo" onClick={() => setIsActive(3)} className={isActive == 3 ? styles.active : ""}>Démo</a></li>
//               <li><a href="#pricing" onClick={() => setIsActive(4)} className={isActive == 4 ? styles.active : ""}>Offres Tarifaires</a></li>
//               <li><a href="#contact" onClick={() => setIsActive(5)} className={isActive == 5 ? styles.active : ""}>Contact</a></li>
//             </ul>
//             <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
//             <BsList className='mobile-nav-toggle d-xl-none' />
//           </nav>

//           <a className={`btn-getstarted ${styles.btn_getstarted}`} href="#pricing">Commencez</a>
//         </div>
//       </header>
//     </>
//   )
// }









import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsList } from 'react-icons/bs';
import styles from '@/styles/app.module.css';

export default function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    if (path.includes('/features')) {
      setIsActive(2);
    } else if (path === '/#home') {
      setIsActive(1);
    } else if (path === '/#demo') {
      setIsActive(3);
    } else if (path === '/#pricing') {
      setIsActive(4);
    } else if (path === '/#contact') {
      setIsActive(5);
    }
  }, [router.pathname]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="" className={`d-flex align-items-center me-auto ${styles.logo}`}>
            <h1 className={styles.sitename}>
              <Image src="/logo-kei.png" width={100} height={100} alt="KEI Logo" />
            </h1>
          </a>

          <nav id="navmenu" className={`navmenu ${styles.navmenu}`}>
            <ul>
              <li><a href="#home" onClick={() => setIsActive(1)} className={isActive == 1 ? styles.active : ""}>Accueil</a></li>
              <li
                onMouseEnter={toggleModal}
                onMouseLeave={toggleModal}
                onClick={() => setIsActive(2)}
                className={isActive == 2 ? styles.active : ""}
              >
                <a href="#features">Fonctionnalités</a>
                {isModalVisible && (
                  <div className={`${styles.modal} ${styles.verticalModal}`}>
                    <ul className={styles.verticalList}>
                      <li><a href="/features/espace-de-travail">Espace de travail</a></li>
                      <li><a href="/features/suivi-des-taches">Suivi des tâches</a></li>
                      <li><a href="/features/declaration-d'incidents">Déclaration d'incidents</a></li>
                      <li><a href="/features/realisation-des-etats-des-lieux">Réalisation des états des lieux</a></li>
                      <li><a href="/features/planification-des-etats-des-lieux">Planification de l'état des lieux</a></li>
                      <li><a href="/features/rapport-d'incidents-et-d'inspections">Rapport d'incidents et d'inspections</a></li>
                    </ul>
                  </div>
                )}
              </li>
              <li><a href="#demo" onClick={() => setIsActive(3)} className={isActive == 3 ? styles.active : ""}>Démo</a></li>
              <li><a href="#pricing" onClick={() => setIsActive(4)} className={isActive == 4 ? styles.active : ""}>Offres Tarifaires</a></li>
              <li><a href="#contact" onClick={() => setIsActive(5)} className={isActive == 5 ? styles.active : ""}>Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            <BsList className='mobile-nav-toggle d-xl-none' />
          </nav>

          <a className={`btn-getstarted ${styles.btn_getstarted}`} href="#pricing">Commencez</a>
        </div>
      </header>
    </>
  );
}
