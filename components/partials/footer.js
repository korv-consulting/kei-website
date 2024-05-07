import styles from "@/styles/app.module.css";
import NewsLetter from "./newsLetter";
import Image from "next/image";
import { BsBrowserChrome, BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiChevronRight, BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className={styles.footer}>
        <NewsLetter />

        <div className={`container ${styles.footer_top}`}>
          <div className="row gy-4">
            <div className={`col-lg-4 col-md-6 ${styles.footer_about}`}>
              <a href="index.html" className="d-flex align-items-center">
                <span className={styles.sitename}>
                  <Image src="/logo-kei-white.png" width={80} height={80} alt="KEI Logo" />
                </span>{" "}
              </a>{" "}
              <div className={`pt-3 ${styles.footer_contact}`}>
                {/* <p> A108 Adam Street </p>  */}
                <p> <FaLocationDot className={`${styles.i}`} /> 12151 Douala, Cameroun </p>{" "}
                <p className="mt-3">
                  {" "}
                  <strong className="me-2"> <FaPhone className={`${styles.i}`} /> </strong> <span>+237 6 77 06 28 56</span>{" "}
                </p>{" "}
                <p>
                  {" "}
                  <strong className="me-2"> <IoMdMail className={`${styles.i}`} /> </strong> <span>contact@korv-consulting.fr</span>{" "}
                </p>{" "}
              </div>{" "}
            </div>

            <div className={`col-lg-2 col-md-3 ${styles.footer_links}`}>
              <h4> Liens Utiles </h4>{" "}
              <ul>
                <li>
                  {" "}
                  <BiChevronRight/>
                   <a href="#">Accueil</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                 <BiChevronRight/>
                  <a href="#">A Propos</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                 <BiChevronRight/>
                  <a href="#">Fonctionnalités</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                 <BiChevronRight/>
                  <a href="#">Offres Tarifaires</a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>

            <div className={`col-lg-2 col-md-3 ${styles.footer_links}`}>
              <h4>Nos Fonctionalités </h4>{" "}
              <ul>
                <li>
                  {" "}
                  <BiChevronRight/>
                  <a href="#">Etat des leux</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <BiChevronRight/>
                  <a href="#">Déclaration d'incidents</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <BiChevronRight/>
                  <a href="#">Rapports d'inspection</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <BiChevronRight/>
                  <a href="#">Suivi des tâches</a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>

            {/* <div className="col-lg-4 col-md-12">
            <h4> Abonnement à notre Newsletter </h4>{" "}
            <NewsLetter />
            </div> */}

            <div className={`col-lg-4 col-md-12 ${styles.footer_platfrom}`}>
              <h4> Télécharger KEI </h4>{" "}
             
              <p className="mt-2">
                  {" "}
                  <a href="#">
                  <strong className="me-2"> <BiLogoPlayStore className={`${styles.icon_store} fs-5`} /> </strong> 
                  <span>Télécharger sur Playstore</span>{" "}
                  </a>
                </p>{" "}
                <p className="mt-2">
                  {" "}
                  <a href="#">
                  <strong className="me-2"> <FaAppStore className={`${styles.icon_store} fs-5`} /> </strong> 
                  <span>Télécharger sur App Sotre</span>{" "}
                  </a>
                
                </p>{" "}
                <p className="mt-2">
                  {" "}
                  <a href="#">
                  <strong className="me-2"> <BsBrowserChrome className={`${styles.icon_store} fs-5`} /> </strong> 
                     <span>Visiter la Plateforme Web</span>{" "}
                  </a>
                  
                </p>{" "}
              {/* <div className={`${styles.social_links} d-flex`}>
                <a href="">
                  {" "}
                  <BsTwitterX />
                </a>
                <a href="https://www.facebook.com/korvconsulting/">
                  {" "}
                  <BsFacebook />
                </a>
                <a href="https://www.instagram.com/invites/contact/?i=1htitrb3x2j8j&utm_content=rxzmvja">
                  {" "}
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7086738201788248068">
                  {" "}
                  <BsLinkedin />
                </a>
              </div>{" "} */}
            </div>
          </div>{" "}
        </div>

        <div
          className={`container copyright ${styles.copyright} mt-4`}
        >
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <p>
                {" "}
                © <span> Copyright </span>{" "}
                <strong className="px-1 sitename">KORV Estatement Inventory</strong>{" "}
                <span> Tous droits réservés </span>
              </p>
              <div className="credits">
                {" "}
                {/* <!-- All the links in the footer should remain intact. -->
                                                                                                                                                                <!-- You can delete the links only if you've purchased the pro version. -->
                                                                                                                                                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                                                                                                                                                <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
                {/* Designed by <a href="https://bootstrapmade.com/"> BootstrapMade </a>{" "} */}
              </div>{" "}
            </div>

            <div className="col-lg-4 col-md-4 ">
              <div className={`${styles.social_links} d-flex`}>
                <a href="">
                  {" "}
                  <BsTwitterX />
                </a>
                <a href="https://www.facebook.com/korvconsulting/">
                  {" "}
                  <BsFacebook />
                </a>
                <a href="https://www.instagram.com/invites/contact/?i=1htitrb3x2j8j&utm_content=rxzmvja">
                  {" "}
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7086738201788248068">
                  {" "}
                  <BsLinkedin />
                </a>
              </div>{" "}
            </div>
          </div>

        </div>
      </footer>{" "}
    </div>
  );
};

export default Footer;
