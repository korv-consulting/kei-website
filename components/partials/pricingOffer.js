import styles from "@/styles/app.module.css";
import { GiCheckMark } from "react-icons/gi";
import Router from "next/router";

const PricingOffer = () => {
  const handleSubscribe = (plan) => {
    window.location.href = `http://kei-app-frontweb.local/signup?plan=${plan}`
  }
  return (
    <div>
      <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2>NOS OFFRES</h2>
          <p>Choississez le plan qui vous convient</p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          <div className="row gy-4">
          <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className={`container ${styles.pricing_item} ${styles.pricing_item_solo}`}>
                <h3>Solo</h3>
                <h4 className={`${styles.solo_title}`}>
                  <sup>$</sup>25<span> / mois</span>
                </h4>
                <hr />
                <ul>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                    <span>
                      Rapports <span className="fw-bold">illimités</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                    <span>
                      Photos <span className="fw-bold">illimitées</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                    <span>
                      <span className="fw-bold">100</span> propriétés 
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                    <span>
                      <span className="fw-bold">1</span> utilisateur
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                    <span>
                      {" "}
                      <span className="fw-bold">5</span> tâches
                    </span>
                  </li>
                </ul>
                <hr />
                <button className={`btn mt-1 ${styles.buy_btn}`} onClick={()=>handleSubscribe("solo")}>
                  Souscrire
                </button>
                
              </div>
            </div>

            <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className={`container ${styles.pricing_item} ${styles.pricing_item_standard}`}>
                <h3>Standard</h3>
                <h4 className={`${styles.standard_title}`}>
                  <sup>$</sup>45<span> / mois</span>
                </h4>
                <hr />
                <ul>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                    <span>
                      Rapports <span className="fw-bold">illimités</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                    <span>
                      Photos <span className="fw-bold">illimitées</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                    <span>
                      <span className="fw-bold">100</span> propriétés 
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                    <span>
                      <span className="fw-bold">2</span> utilisateurs
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                    <span>
                      {" "}
                      <span className="fw-bold">10</span> tâches
                    </span>
                  </li>
                </ul>
                <hr />
                <button className={`btn mt-1 ${styles.buy_btn}`} onClick={()=>handleSubscribe("standar")}>
                  Souscrire
                </button>
                
              </div>
            </div>

            {/* <!-- End Pricing Item --> */}

            <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className={`container ${styles.pricing_item} ${styles.pricing_item_medium}`}>
                <h3>Medium</h3>
                <h4 className={`${styles.medium_title}`}>
                  <sup>$</sup>75<span> / mois</span>
                </h4>
                <hr />
                <ul>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                    <span>
                      Rapports <span className="fw-bold">illimités</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                    <span>
                      Photos <span className="fw-bold">illimitées</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                    <span>
                      <span className="fw-bold">150</span> propriétés 
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                    <span>
                      <span className="fw-bold">5</span> utilisateurs
                    </span>
                  </li>
                  
                  <li>
                    <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                    <span>
                      {" "}
                      <span className="fw-bold">15</span> tâches
                    </span>
                  </li>
                  {/* <li>
                    <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                    <span>
                      Connexion clients <span className="fw-bold">illimités</span>
                    </span>
                  </li> */}
                </ul>
                <hr />
                <button className={`btn mt-1 ${styles.buy_btn}`} onClick={()=>handleSubscribe("medium")}>
                  Souscrire
                </button>
                {/* <a href="#" className={`mt-1 ${styles.buy_btn}`}>
                    Achetez Maintenant
                  </a> */}
              </div>
            </div>

            <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className={`container ${styles.pricing_item} ${styles.pricing_item_premium}`}>
                <h3>Premium</h3>
                <h4 className={`${styles.premium_title}`}>
                  <sup>$</sup>150<span> / mois</span>
                </h4>
                <hr />
                <ul>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                    <span>
                      Rapports <span className="fw-bold">illimités</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                    <span>
                      Photos <span className="fw-bold">illimitées</span>
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                    <span>
                      <span className="fw-bold">500</span> propriétés 
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                    <span>
                      Utilisateurs <span className="fw-bold">illimités</span> 
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                    <span>
                      {" "}
                      Tâches <span className="fw-bold">illimités</span> 
                    </span>
                  </li>
                  
                </ul>
                <hr />
                <button className={`btn mt-1 ${styles.buy_btn}`} onClick={()=>handleSubscribe("premium")}>
                  Souscrire
                </button>
                {/* <a href="#" className={`mt-1 ${styles.buy_btn}`}>
                    Achetez Maintenant
                  </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingOffer;
