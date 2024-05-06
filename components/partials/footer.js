import styles from "@/styles/app.module.css";
import NewsLetter from "./newsLetter";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className={styles.footer}>
        <NewsLetter />

        <div className={`container ${styles.footer_top}`}>
          <div className="row gy-4">
            <div className={`col-lg-4 col-md-6 ${styles.footer_about}`}>
              <a href="index.html" className="d-flex align-items-center">
                <span className={styles.sitename}> Arsha </span>{" "}
              </a>{" "}
              <div className={`pt-3 ${styles.footer_contact}`}>
                <p> A108 Adam Street </p> <p> New York, NY 535022 </p>{" "}
                <p className="mt-3">
                  {" "}
                  <strong> Phone: </strong> <span>+1 5589 55488 55</span>{" "}
                </p>{" "}
                <p>
                  {" "}
                  <strong> Email: </strong> <span>info@example.com</span>{" "}
                </p>{" "}
              </div>{" "}
            </div>

            <div className={`col-lg-2 col-md-3 ${styles.footer_links}`}>
              <h4> Useful Links </h4>{" "}
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
              <h4> Our Services </h4>{" "}
              <ul>
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Web Design</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Web Development</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Product Management</a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <i className="bi bi-chevron-right"> </i>{" "}
                  <a href="#">Marketing</a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>

            <div className="col-lg-4 col-md-12">
              <h4> Follow Us </h4>{" "}
              <p>
                {" "}
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies{" "}
              </p>{" "}
              <div className="social-links d-flex">
                <a href="">
                  {" "}
                  <i className="bi bi-twitter"> </i>
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-facebook"> </i>
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-instagram"> </i>
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-linkedin"> </i>
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
            <strong className="px-1 sitename">Arsha</strong>{" "}
            <span> All Rights Reserved </span>
          </p>
          <div className="credits">
            {" "}
            {/* <!-- All the links in the footer should remain intact. -->
                                                                                                                                                                <!-- You can delete the links only if you've purchased the pro version. -->
                                                                                                                                                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                                                                                                                                                <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            Designed by <a href="https://bootstrapmade.com/"> BootstrapMade </a>{" "}
          </div>{" "}
        </div>
      </footer>{" "}
    </div>
  );
};

export default Footer;