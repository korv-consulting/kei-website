import styles from "@/styles/app.module.css";
import { GiCheckMark } from "react-icons/gi";



const PricingOffer = ({offers}) => {
  return (
    <div>
      <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2>NOS OFFRES</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row gy-4">
            {
              offers.map(offer => 
                <div key={offer.id} className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
                <div className={`container ${styles.pricing_item}`}>
                  <h3>{offer.name}</h3>
                  <h4>
                    <sup>$</sup>0<span> / mois</span>
                  </h4>
                  <hr />
                  <ul>
                    <li>
                    <GiCheckMark className={`me-2 ${styles.check}`} />
                      <span>
                        {offer.max_user_init} utilisateurs</span>
                    </li>
                    <li>
                      <GiCheckMark className={`me-2 ${styles.check}`} />
                      <span> {offer.namax_task_init} tâches</span>
                    </li>
                    <li>
                      <GiCheckMark className={`me-2 ${styles.check}`} />
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li>
                      <GiCheckMark className={`me-2 ${styles.check}`} />
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                    <li>
                      <GiCheckMark className={`me-2 ${styles.check}`} />
                      <span>Nulla at volutpat diam uteera</span>
                    </li>
                  </ul>
                  <hr/>
                  <button className={`btn mt-1 ${styles.buy_btn}`}>
                    Souscrire
                  </button>
                  {/* <a href="#" className={`mt-1 ${styles.buy_btn}`}>
                    Achetez Maintenant
                  </a> */}
                </div>
              </div> 
              )
            }
           
            {/* <!-- End Pricing Item --> */}

           
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingOffer;
