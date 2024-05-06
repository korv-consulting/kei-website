import styles from "@/styles/app.module.css";

const PricingOffer = () => {
  return (
    <div>
      <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className={`container ${styles.pricing_item}`}>
                <h3>Free Plan</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className={styles.buy_btn}>
                  Buy Now
                </a>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className={`${styles.featured} ${styles.pricing_item}`}>
                <h3>Business Plan</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className={styles.buy_btn}>
                  Buy Now
                </a>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div className={styles.pricing_item}>
                <h3>Developer Plan</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className={styles.buy_btn}>
                  Buy Now
                </a>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingOffer;
