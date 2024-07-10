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
    } else if (path === '/template/contact') {
      setIsActive(5);
    }
  }, [router.pathname]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  //SECTION TARGETING (GET INTO AN ANCHOR FROM ANY APP'S PAGE)
  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [router.asPath]);

  return (
    <>
      <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a className={`navbar-brand d-flex align-items-center ${styles.logo}`} href="/template">
            <Image src="/logo-kei.png" className={styles.sitename} width={100} height={100} alt="KEI Logo" />
          </a>

          <nav id="navmenu" className={`navmenu navbar navbar-expand-lg  ${styles.navmenu}`}>
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                    <a className={`navbar-brand d-flex align-items-center ${styles.logo}`} href="/template">
                      <Image src="/logo-kei.png" className={styles.sitename} width={100} height={100} alt="KEI Logo" />
                    </a>
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body d-bock">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 1 ? styles.active : ''}`} href="/template" onClick={() => setIsActive(1)}>Accueil</a>
                    </li>


                     <li className={`nav-item dropdown px-3 ${isActive === 2 ? styles.active : ''}`} onMouseEnter={toggleModal} onMouseLeave={toggleModal} onClick={() => setIsActive(2)}>
                      <a className="nav-link dropdown-toggle" href="/template#features" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fonctionnalités
                      </a>
                      {isModalVisible && (
                        <ul className={`dropdown-menu ${styles.verticalList} ${styles.modal} ${styles.verticalModal}`}>
                          <li><a className="dropdown-item bg-transparent " href="/features/espace-de-travail">Espace de travail</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/suivi-des-taches">Suivi des tâches</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/declaration-d'incidents">Déclaration d'incidents</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/realisation-des-etats-des-lieux">Réalisation des états des lieux</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/planification-des-etats-des-lieux">Planification de l'état des lieux</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/rapport-d'incidents-et-d'inspections">Rapport d'incidents et d'inspections</a></li>
                        </ul>
                      )}
                    </li>  

{/* 
                     <li
      className={`nav-item dropdown px-3 ${isActive === 2 ? 'active' : ''}`}
      onMouseEnter={toggleModal}
      onMouseLeave={toggleModal}
    >
      <Dropdown>
        <Dropdown.Button className="nav-link dropdown-toggle">
          Fonctionnalités
        </Dropdown.Button>
        {isActive === 2 && (
          <Dropdown.Menu aria-label="Fonctionnalités">
            <Dropdown.Item href="/features/espace-de-travail">
              Espace de travail
            </Dropdown.Item>
            <Dropdown.Item href="/features/suivi-des-taches">
              Suivi des tâches
            </Dropdown.Item>
            <Dropdown.Item href="/features/declaration-d'incidents">
              Déclaration d'incidents
            </Dropdown.Item>
            <Dropdown.Item href="/features/realisation-des-etats-des-lieux">
              Réalisation des états des lieux
            </Dropdown.Item>
            <Dropdown.Item href="/features/planification-des-etats-des-lieux">
              Planification de l'état des lieux
            </Dropdown.Item>
            <Dropdown.Item href="/features/rapport-d'incidents-et-d'inspections">
              Rapport d'incidents et d'inspections
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </li> */}



                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 3 ? styles.active : ''}`} href="/template#demo" onClick={() => setIsActive(3)}>Démo</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 4 ? styles.active : ''}`} href="/template#pricing" onClick={() => setIsActive(4)}>Tarifs</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 6 ? styles.active : ''}`} href="/template#faq-2" onClick={() => setIsActive(6)}>FAQ</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 5 ? styles.active : ''}`} href="/template/contact" onClick={() => setIsActive(5)}>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

        

          <a className={`btn-getstarted ${styles.btn_getstarted}`} href="/template/pricing">Commencez</a>
        </div>
      </header>
    </>
  );
}


















