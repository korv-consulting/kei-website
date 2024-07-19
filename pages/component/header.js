import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsList } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/app.module.css';
import LocaleSwitcher from '../../components/LocalSwitcher';

export default function Header() {
  const [isActive, setIsActive] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('header');

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

  // SECTION TARGETING (GET INTO AN ANCHOR FROM ANY APP'S PAGE)
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

          <nav id="navmenu" className={`navmenu navbar navbar-expand-lg ${styles.navmenu}`}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 1 ? styles.active : ''}`} href="/template" onClick={() => setIsActive(1)}>{t('home')}</a>
                    </li>

                    <li className={`nav-item dropdown px-3 ${isActive === 2 ? styles.active : ''}`} onMouseEnter={toggleModal} onMouseLeave={toggleModal} onClick={() => setIsActive(2)}>
                      <a className="nav-link dropdown-toggle" href="/template#features" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {t('features')}
                      </a>
                      {isModalVisible && (
                        <ul className={`dropdown-menu ${styles.verticalList} ${styles.modal} ${styles.verticalModal}`}>
                          <li><a className="dropdown-item bg-transparent" href="/features/espace-de-travail">{t('workspace')}</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/suivi-des-taches">{t('task_tracking')}</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/declaration-d'incidents">{t('incident_reporting')}</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/realisation-des-etats-des-lieux">{t('condition_reports')}</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/planification-des-etats-des-lieux">{t('planning')}</a></li>
                          <li><a className="dropdown-item bg-transparent pt-0" href="/features/rapport-d'incidents-et-d'inspections">{t('reports')}</a></li>
                        </ul>
                      )}
                    </li>

                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 3 ? styles.active : ''}`} href="/template#demo" onClick={() => setIsActive(3)}>{t('demo')}</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 4 ? styles.active : ''}`} href="/template#pricing" onClick={() => setIsActive(4)}>{t('pricing')}</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 6 ? styles.active : ''}`} href="/template#faq-2" onClick={() => setIsActive(6)}>{t('faq')}</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className={`nav-link ${isActive === 5 ? styles.active : ''}`} href="/template/contact" onClick={() => setIsActive(5)}>{t('contact')}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <LocaleSwitcher />
          <a className={`btn-getstarted ${styles.btn_getstarted}`} href="#pricing">{t('get_started')}</a>
        </div>
      </header>
    </>
  );
}
