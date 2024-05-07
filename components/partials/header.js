import styles from '@/styles/app.module.css'
import { BsList } from 'react-icons/bs';
import Image from 'next/image'
import { useState } from 'react';

export default function Header() {

  const [isActive, setIsActive] = useState(1);
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
              <li><a href="#home" onClick={() => setIsActive(1)} className={isActive ? styles.active_menu_item : ""}>Accueil</a></li>
              <li><a href="#about" onClick={() => setIsActive(2)}>A Propos</a></li>
              <li><a href="#features" onClick={() => setIsActive(3)}>Fonctionnalités</a></li>
              {/* <li><a href="#portfolio">Portfolio</a></li> */}
              {/* <li><a href="#team">Team</a></li> */}
              <li><a href="#pricing" onClick={() => setIsActive(4)}>Offres Tarifaires</a></li>
              {/* <li className={`dropdown ${styles.dropdown}`}><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className={`dropdown ${styles.dropdown}`}><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> */}
              <li><a href="#contact" onClick={() => setIsActive(5)}>Contact</a></li>
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