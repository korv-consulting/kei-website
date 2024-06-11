



import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsList } from 'react-icons/bs';
import styles from '@/styles/app.module.css';
import {Link} from 'next/link';


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
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <a href="" className={`d-flex align-items-center me-auto ${styles.logo}`}>
            <h1 className={styles.sitename}>
              <Image src="/logo-kei.png" width={100} height={100} alt="KEI Logo" />
            </h1>
          </a>

          <nav id="navmenu" className={`navmenu ${styles.navmenu}`}>
            <ul>
              <li><a href="#home" onClick={() => {setIsActive(1); console.log("Active Menu Item", isActive)}} className={isActive == 1 ? styles.active : ""}>Accueil</a></li>
              <li><a href="#features" onClick={() => setIsActive(2)} className={isActive == 2 ? styles.active : ""}>Fonctionnalités</a></li>
              <li><a href="#demo" onClick={() => setIsActive(3)} className={isActive == 3 ? styles.active : ""}>Démo</a></li>
              {/* <li><a href="#portfolio">Portfolio</a></li> */}
              {/* <li><a href="#team">Team</a></li> */}
              <li><a href="#pricing" onClick={() => setIsActive(4)} className={isActive == 4 ? styles.active : ""}>Offres Tarifaires</a></li>
              <li><a href="/template/contact" onClick={() => setIsActive(5)} className={isActive == 5 ? styles.active : ""}>Contact</a></li>
              <li><a href="#faq-2" onClick={() => setIsActive(6)} className={isActive == 6 ? styles.active : ""}>FAQ</a></li>
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
