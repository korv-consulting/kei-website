import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/app.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocaleSwitcher from 'components/LocalSwitcher';

export default function Header() {
  const { t } = useTranslation('header');
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
    } else if (path === '/pricing') {
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
      <header id="header" className={`${styles.header} d-flex align-items-center justify-content-center fixed-top`}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-around">
          
          <a className={`navbar-brand d-flex align-items-center ${styles.logo}`} href="/template">
            <Image src="/logo-kei.png" className={styles.sitename} width={100} height={100} alt="KEI Logo" />
          </a>

          <nav id="navmenu" className={`navmenu navbar navbar-expand-lg  ${styles.navmenu}`}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <a className={`navbar-brand d-flex align-items-center ${styles.logo}`} href="/template">
                      <Image src="/logo-kei.png" className={styles.sitename} width={100} height={100} alt="KEI Logo" />
                    </a>
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-bock">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item px-2">
                      <a className={`nav-link ${isActive === 1 ? styles.active : ''}`} href="/template" onClick={() => setIsActive(1)}>{t('home')}</a>
                    </li>

                    <li
                      className={`nav-item dropdown px-2 ${isActive === 2 ? styles.active : ''}`}
                      onMouseEnter={toggleModal}
                      onMouseLeave={toggleModal}
                      onClick={() => setIsActive(2)}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="/template#features"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {t('features')}
                      </a>
                      {isModalVisible && (
                        <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                          <div className={`${styles.column} ${styles.verticalLine}`}>
                            <li>
                              <a className={`dropdown-item ${styles.dropdownItem}`} href="/features/espace-de-travail">
                                <span class="material-symbols-outlined">workspaces</span>
                                <span>{t('workspace')}</span>
                              </a>
                            </li>
                            <li>
                              <a className={`dropdown-item ${styles.dropdownItem}`} href="/features/suivi-des-taches">
                                <span class="material-symbols-outlined">task</span>  
                                <span>{t('taskTracking')}</span>
                              </a>
                            </li>
                            <li>
                              <a className={`dropdown-item ${styles.dropdownItem}`} href="/features/planification-des-etats-des-lieux">
                              <span class="material-symbols-outlined">where_to_vote</span>  
                                <span>{t('statePlanning')}</span>
                              </a>
                            </li>
                          </div>
                          <div className={styles.column}>
                            <li>
                              <a className={`dropdown-item ${styles.dropdownItem}`} href="/features/declaration-d'incidents">
                                <span>{t('incidentDeclaration')}</span>
                              </a>
                            </li>
                            <li>
                              <a className={`dropdown-item ${styles.dropdownItem}`} href="/features/realisation-des-etats-des-lieux">
                                <span>{t('stateRealization')}</span>
                              </a>
                            </li>
                            <li>
                              <a className={`dropdown-item ${styles.dropdownItem}`} href="/features/rapport-d'incidents-et-d'inspections">
                                <span>{t('incidentReport')}</span>
                              </a>
                              </li>
                          </div>
                        </ul>
                      )}
                    </li> 
                    
                    <li className="nav-item px-2">
                      <a className={`nav-link ${isActive === 3 ? styles.active : ''}`} href="/template#demo" onClick={() => setIsActive(3)}>{t('demo')}</a>
                    </li>
                    <li className="nav-item px-2">
                      <a className={`nav-link ${isActive === 4 ? styles.active : ''}`} href="/template/pricing" onClick={() => setIsActive(4)}>{t('pricing')}</a>
                    </li>
                    <li className="nav-item px-2">
                      <a className={`nav-link ${isActive === 6 ? styles.active : ''}`} href="/template#faq-2" onClick={() => setIsActive(6)}>{t('faq')}</a>
                    </li>
                    <li className="nav-item px-2">
                      <a className={`nav-link ${isActive === 5 ? styles.active : ''}`} href="/template/contact" onClick={() => setIsActive(5)}>{t('contact')}</a>
                    </li>
                    <div className="ms-4"><LocaleSwitcher/></div>
                    <div className={`d-md-none d-sm-block my-3  ${styles.locales}`}>
                    {/* <div className="me-3"><LocaleSwitcher/></div> */}
                    <a className={`btn-getstarted ${styles.btn_getstarted}`} href="/template/pricing">{t('getStarted')}</a>
                    <a className={`btn-signin ${styles.btn_signin}`} href="/template/pricing">{t('signin')}</a>
                  </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <div className={`d-flex d-none d-md-block justify-content-center  ${styles.locales}`}>
            {/* <div className="me-3"><LocaleSwitcher/></div> */}
            <a className={`btn-getstarted ${styles.btn_getstarted}`} href="/template/pricing">{t('getStarted')}</a>
            <a className={`btn-signin ${styles.btn_signin}`} href="/template/pricing">{t('signin')}</a>
          </div>
          
        </div>
      </header>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});

/* text-shadow: -40px -40px 4px #4CCE23; */ 