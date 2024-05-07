import styles from "@/styles/app.module.css";
import NewsLetter from "./newsLetter";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

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
                  <Image src="/logo-kei.png" width={80} height={80} alt="KEI Logo"/> 
                </span>{" "}
              </a>{" "}
              <div className={`pt-3 ${styles.footer_contact}`}>
                {/* <p> A108 Adam Street </p>  */}
                <p> 12151 Douala, Cameroun </p>{" "}
                <p className="mt-3">
                  {" "}
                  <strong> Phone: </strong> <span>+237 6 77 06 28 56</span>{" "}
                </p>{" "}
                <p>
                  {" "}
                  <strong> Email: </strong> <span>contact@korv-consulting.fr</span>{" "}
                </p>{" "}
              </div>{" "}
            </div>

            <div className={`col-lg-2 col-md-3 ${styles.footer_links}`}>
              <h4> Liens Utiles </h4>{" "}
              <ul>
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i> <a href="#">Home</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">About us</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Services</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Terms of service</a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>

            <div className={`col-lg-2 col-md-3 ${styles.footer_links}`}>
              <h4>Nos Fonctionalités </h4>{" "}
              <ul>
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Etat des leux</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Déclaration d'incidents</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Rapports d'inspection</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Suivi des tâches</a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>

            {/* <div className="col-lg-4 col-md-12">
            <h4> Abonnement à notre Newsletter </h4>{" "}
            <NewsLetter />
            </div> */}

            <div className="col-lg-4 col-md-12">
              <h4> Suivez-nous </h4>{" "}
              <p>
                {" "}
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies{" "}
              </p>{" "}
              <div className={`${styles.social_links} d-flex`}>
                <a href="">
                  {" "}
                  <BsTwitterX/>
                </a>
                <a href="https://www.facebook.com/korvconsulting/">
                  {" "}
                  <BsFacebook/>
                </a>
                <a href="https://www.instagram.com/invites/contact/?i=1htitrb3x2j8j&utm_content=rxzmvja">
                  {" "}
                  <BsInstagram/>
                </a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7086738201788248068">
                  {" "}
                  <BsLinkedin/>
                </a>
              </div>{" "}
            </div>
          </div>{" "}
        </div>

        <div
          className={`container copyright ${styles.copyright} text-center mt-4`}
        >
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
      </footer>{" "}
    </div>
  );
};

export default Footer;
