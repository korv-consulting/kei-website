import styles from '@/styles/app.module.css'
import { BsList } from 'react-icons/bs';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {

  const [isActive, setIsActive] = useState(1);

  const router = useRouter();
  console.log("Router +++++++++++++", router.asPath);

  return (
    <>
      <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <a href="" className={`d-flex align-items-center me-auto ${styles.logo}`}>
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1 className={styles.sitename}>
              <Image src="/logo-kei.png" width={100} height={100} alt="KEI Logo" />
            </h1>
          </a>

          <nav id="navmenu" className={`navmenu ${styles.navmenu}`}>
            <ul>
              <li><a href="#home" onClick={() => {setIsActive(1); console.log("Active Menu Item", isActive)}} className={isActive == 1 ? styles.active : ""}>Accueil</a></li>
              <li><a href="#about" onClick={() => setIsActive(2)} className={isActive == 2 ? styles.active : ""}>A Propos</a></li>
              <li><a href="#features" onClick={() => setIsActive(3)} className={isActive == 3 ? styles.active : ""}>Fonctionnalités</a></li>
              {/* <li><a href="#portfolio">Portfolio</a></li> */}
              {/* <li><a href="#team">Team</a></li> */}
              <li><a href="#pricing" onClick={() => setIsActive(4)} className={isActive == 4 ? styles.active : ""}>Offres Tarifaires</a></li>
              <li><a href="#contact" onClick={() => setIsActive(5)} className={isActive == 5 ? styles.active : ""}>Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            <BsList className='mobile-nav-toggle d-xl-none'/>
          </nav>

          <a className={`btn-getstarted ${styles.btn_getstarted}`} href="#pricing">Commencez</a>

        </div>
      </header>

    </>
  )
}