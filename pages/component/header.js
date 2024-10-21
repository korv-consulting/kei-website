import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/app.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocaleSwitcher from 'components/LocalSwitcher';
import Link from 'next/link';

export default function Header() {
  const { t } = useTranslation('header');
  const [isActive, setIsActive] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    console.log(" \n  \n  \n      ", router.pathname, "      \n  \n  \n ")
    if (path.includes('/features')) {
      setIsActive(2);
    } else if (path === '/#home') {
      setIsActive(1);
    } else if (path === '/#demo') {
      setIsActive(3);
    } else if (path === '/pricing') {
      setIsActive(4);
    } else if (path === '/contact') {
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
          <Link href="/">
            <a className={`navbar-brand d-flex align-items-center ${styles.logo}`}>
              <Image src="/logo-kei.png" className={styles.sitename} width={100} height={100} alt="KEI Logo" />
            </a>
          </Link>


          <nav id="navmenu" className={`navmenu navbar navbar-expand-lg  ${styles.navmenu}`}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <Link href="/">
                      <a className={`navbar-brand d-flex align-items-center ${styles.logo}`}>
                        <Image src="/logo-kei.png" className={styles.sitename} width={100} height={100} alt="KEI Logo" />
                      </a>
                    </Link>

                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-bock">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item px-2">
                      <Link href="/">
                        <a className={`nav-link ${isActive === 1 ? styles.active : ''}`} onClick={() => setIsActive(1)}>{t('home')}</a>
                      </Link>
                    </li>

                    <li
                      className={`nav-item dropdown px-2 ${isActive === 2 ? styles.active : ''}`}
                      onMouseEnter={toggleModal}
                      onMouseLeave={toggleModal}
                      onClick={() => setIsActive(2)}
                    >
                      <Link href="/#features">
                        <a
                          className="nav-link dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {t('features')}
                        </a>
                      </Link>

                      {isModalVisible && (
                        <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                          <div className={`${styles.column} ${styles.verticalLine}`}>
                            <li>
                              <Link href="/features/espace-de-travail">
                                <a className={`dropdown-item ${styles.dropdownItem}`} >
                                  <span class="material-symbols-outlined me-3">workspaces</span>
                                  <span>{t('workspace')}</span>
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/features/suivi-des-taches">
                                <a className={`dropdown-item ${styles.dropdownItem}`} >
                                  <span class="material-symbols-outlined me-3">task</span>
                                  <span>{t('taskTracking')}</span>
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/features/planification-des-etats-des-lieux">
                                <a className={`dropdown-item ${styles.dropdownItem}`} >
                                  <span class="material-symbols-outlined me-3">where_to_vote</span>
                                  <span>{t('statePlanning')}</span>
                                </a>
                              </Link>

                            </li>
                          </div>
                          <div className={styles.column}>
                            <li>
                              <Link href="/features/declaration-d'incidents">
                                <a className={`dropdown-item ${styles.dropdownItem}`} >
                                  <span class="material-symbols-outlined me-3">where_to_vote</span>
                                  <span>{t('incidentDeclaration')}</span>
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/features/realisation-des-etats-des-lieux">
                                <a className={`dropdown-item ${styles.dropdownItem}`}>
                                  <span class="material-symbols-outlined me-3">home</span>
                                  <span>{t('stateRealization')}</span>
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/features/rapport-d'incidents-et-d'inspections">
                                <a className={`dropdown-item ${styles.dropdownItem}`} >
                                  <span class="material-symbols-outlined me-3">warning</span>
                                  <span>{t('incidentReport')}</span>
                                </a>
                              </Link>
                            </li>
                          </div>
                        </ul>
                      )}
                    </li>

                    <li className="nav-item px-2">
                      <Link href="#demo">
                        <a className={`nav-link ${isActive === 3 ? styles.active : ''}`} onClick={() => setIsActive(3)}>{t('demo')}</a>
                      </Link>
                    </li>
                    <li className="nav-item px-2">
                      <Link href="/pricing">
                        <a className={`nav-link ${isActive === 4 ? styles.active : ''}`} onClick={() => setIsActive(4)}>{t('pricing')}</a>
                      </Link>
                    </li>
                    <li className="nav-item px-2">
                    <Link href="#faq-2">
                      <a className={`nav-link ${isActive === 6 ? styles.active : ''}`} onClick={() => setIsActive(6)}>{t('faq')}</a>
                    </Link>
                    </li>
                    <li className="nav-item px-2">
                    <Link href="/contact">
                      <a className={`nav-link ${isActive === 5 ? styles.active : ''}`} onClick={() => setIsActive(5)}>{t('contact')}</a>
                    </Link>
                    </li>
                    <div className={`ms-4  ${styles.locale}`}><LocaleSwitcher /></div>
                    <div className={`d-lg-none d-md-block my-3  ${styles.locales}`}>
                      <Link href="/pricing">
                        <a className={`btn-getstarted mb-2 ${styles.btn_getstarted}`}>{t('getStarted')}</a>
                      </Link>
                      <Link href="/pricing">
                        <a className={`btn-signin ${styles.btn_signin}`} >{t('signin')}</a>
                      </Link>

                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <div className={`d-flex d-none d-lg-block justify-content-center`}>
            <Link href="/pricing">
              <a className={`btn-getstarted mb-2 ${styles.btn_getstarted}`} >{t('getStarted')}</a>
            </Link>
            <Link href="/pricing">
              <a className={`btn-signin ${styles.btn_signin}`}>{t('signin')}</a>
            </Link>

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