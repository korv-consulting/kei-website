
import React, { useState } from 'react';
import styles from "@/styles/PricingOffer.module.css";
import { GiCheckMark } from "react-icons/gi";


const YearlyPricingOffer = () => {


  const basePrice = 100;
  const totalPrice = basePrice;


  //STANDARD  CARD STATES



  const basePrice1 = 150;
  const totalPrice1 = basePrice1;




  //MeDIUM  CARD STATES

  const basePrice2 = 200;
  const totalPrice2 = basePrice2;


  //PREMIUM CARD STATES 



  const basePrice3 = 250;
  const totalPrice3 = basePrice3 ;






  const handleSubscribe = (plan) => {
    window.location.href = `http://kei-app-frontweb.local/signup?plan=${plan}`;
  };

  return (
    <div>
    

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className={`container ${styles.pricing_item} ${styles.pricing_item_solo}`}>
              <h3 className={styles.title0}>Solo</h3>
                 <h4 className={`${styles.solo_title}`}>
                <sup>$</sup>{totalPrice}<span> / an</span>
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
                <button className={`btn mt-1 ${styles.buy_btn}`} onClick={() => handleSubscribe("solo")}>
                  Souscrire
                </button>
              </div>
            </div>




            {/* STANDARD PRICECARD*/}


<div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
  <div className={`container ${styles.pricing_item} ${styles.pricing_item_standard}`}>
  <h3 className={styles.title1}>Duo</h3>
              
    <h4 className={`${styles.standard_title}`}>
      <sup>$</sup>{totalPrice1}<span> / an</span>
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
    <button className={`btn mt-1 ${styles.buy_btn1}`} onClick={()=>handleSubscribe("standar")}>
      Souscrire
    </button>
  </div>
</div>



{/* MEDIUM */}



<div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
  <div className={`container ${styles.pricing_item} ${styles.pricing_item_medium}`}>
   <h3 className={styles.title2} >Pro</h3>

   <h4 className={`${styles.medium_title}`}>
      <sup>$</sup>{totalPrice2}<span> / an</span>
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
    </ul>
    <hr />
    <button className={`btn mt-1 ${styles.buy_btn2}`} onClick={()=>handleSubscribe("medium")}>
      Souscrire
    </button>
  </div>
</div>




{/*PREMIUM CARD*/}

<div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
  <div className={`container ${styles.pricing_item} ${styles.pricing_item_premium}`}>
  <h3 className={styles.title3}>Premium</h3>
     <h4 className={`${styles.premium_title}`}>
      <sup>$</sup>{totalPrice3}<span> / an</span>
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
        <span> {" "}
                      <span className="fw-bold">500</span> propriétés 
                    </span>
      </li>
      <li>
        <GiCheckMark className={`me-2 ${styles.premium_check}`} />
        <span>
          Utilisateurs <span className="fw-bold"></span> 
        </span>
      </li>
      <li>
        <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                   <span>
                      {" "}
                      Tâches <span className="fw-bold"></span> 
                    </span>
      </li>
    </ul>
    <hr />
    <button className={`btn mt-1 ${styles.buy_btn3}`} onClick={()=>handleSubscribe("premium")}>
      Souscrire
    </button>
  </div>
</div>





          </div>
        </div>
      

      

    </div>
  );
};

export default YearlyPricingOffer;










































