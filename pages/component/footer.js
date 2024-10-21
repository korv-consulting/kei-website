import styles from "@/styles/app.module.css";
import NewsLetter from "./newsLetter";
import Image from "next/image";
import { BsBrowserChrome, BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiChevronRight, BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation('footer');
  
  return (
    <div>
      <footer id="footer" className={styles.footer}>
       {/*  <NewsLetter /> */}

        <div className={`container ${styles.footer_top}`}>
          <div className="row gy-4">
            <div className={`col-lg-4 col-md-6 ${styles.footer_about}`}>
              <Link href="/" className="d-flex align-items-center">
                <span className={styles.sitename}>
                  <Image src="/logo-kei-white.png" width={80} height={80} alt="KEI Logo" />
                </span>
              </Link>
              <div className={`pt-3 ${styles.footer_contact}`}>
                <p> <FaLocationDot className={`${styles.i}`} /> <span className="position-relative ms-4 " style={{ top: '-15px' }}>Paris, France</span></p>
                <p className="mt-2">
                  <strong className="me-2"> <FaPhone className={`${styles.i}`} /> </strong>
                  <span className=" ms-3 position-relative " style={{ top: '-15px' }}>+33 6 20 87 15 28</span>
                </p>
                <p>
                  <strong className="me-2"> <IoMdMail className={`${styles.i}`} /> </strong>
                  <span className=" ms-3 position-relative " style={{ top: '-15px' }}>contact@kei.fr</span>
                </p>
              </div>
            </div>

            <div className={`col-lg-2 col-md-3 ${styles.footer_links}`}>
              <h4>{t('title1')}</h4>
              <ul>
                <li> <BiChevronRight/><a href="#">{t('li1')}</a></li>
                <li> <BiChevronRight/><a href="#">{t('li2')}</a></li>
                <li> <BiChevronRight/><a href="#">{t('li3')}</a></li>
                <li> <BiChevronRight/><a href="#">{t('li4')}</a></li>
              </ul>
            </div>

            <div className={`col-lg-2 col-md-3 ${styles.footer_links}`}>
              <h4>{t('title2')}</h4>
              <ul>
                <li> <BiChevronRight/><a href="#">{t('li5')}</a></li>
                <li> <BiChevronRight/><a href="#">{t('li6')}</a></li>
                <li> <BiChevronRight/><a href="#">{t('li7')}</a></li>
                <li> <BiChevronRight/><a href="#">{t('li8')}</a></li>
              </ul>
            </div>

            <div className={`col-lg-4 col-md-12 ${styles.footer_platfrom}`}>
              <h4>{t('title3')}</h4>
              <p className="mt-2">
                <a href="#">
                  <strong className="me-4"> <BiLogoPlayStore className={`${styles.icon_store} fs-5`} /> </strong>
                  <span className="position-relative" style={{ top: '-18px' }}>{t('playstore')}</span>
                </a>
              </p>
              <p className="mt-2">
                <a href="#">
                  <strong className="me-4"> <FaAppStore className={`${styles.icon_store} fs-5`} /> </strong>
                  <span className="position-relative" style={{ top: '-18px' }}>{t('appstore')}</span>
                </a>
              </p>
              <p className="mt-2">
                <a href="#">
                  <strong className="me-4"> <BsBrowserChrome className={`${styles.icon_store} fs-5`} /> </strong>
                  <span className="position-relative" style={{ top: '-18px' }}>{t('web')}</span>
                </a>
              </p>
            </div>

          </div>
        </div>

        <div className={`container copyright ${styles.copyright} mt-4`}>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <p>
                {t('copyright')} <span> KORV Estatement Inventory </span> {t('all_rights_reserved')}
              </p>
              <div className="credits">
                {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className={`${styles.social_links} d-flex`}>
                <a href="#"><BsTwitterX /></a>
                <a href="https://www.facebook.com/korvconsulting/"><BsFacebook /></a>
                <a href="https://www.instagram.com/invites/contact/?i=1htitrb3x2j8j&utm_content=rxzmvja"><BsInstagram /></a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7086738201788248068"><BsLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
