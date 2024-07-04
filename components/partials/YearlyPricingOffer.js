
import React, { useState } from 'react';
import styles from "@/styles/PricingOffer.module.css";
import { GiCheckMark } from "react-icons/gi";
import Tip  from './tooltip';


const YearlyPricingOffer = () => {
  const initialPropertyPrice = 10; // Valeur par défaut des propriétés
  const initialTaskPrice = 5; // Valeur par défaut des tâches

  const [additionalPropertyPrice, setAdditionalPropertyPrice] = useState(initialPropertyPrice);
  const [additionalTaskPrice, setAdditionalTaskPrice] = useState(initialTaskPrice);

  const handlePropertyPriceChange = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalPropertyPrice(additionalPrice); // Mettre à jour l'état du prix supplémentaire des propriétés
    }
  };

  const handleTaskPriceChange = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalTaskPrice(additionalPrice); // Mettre à jour l'état du prix supplémentaire des tâches
    }
  };

  const basePrice = 100;
  const totalPrice = basePrice + additionalPropertyPrice + additionalTaskPrice;


  //STANDARD  CARD STATES


  const initialPropertyPrice1 = 10; // Valeur par défaut des propriétés
  const initialTaskPrice1 = 5; // Valeur par défaut des tâches

  const [additionalPropertyPrice1, setAdditionalPropertyPrice1] = useState(initialPropertyPrice1);
  const [additionalTaskPrice1, setAdditionalTaskPrice1] = useState(initialTaskPrice1);

  const handlePropertyPriceChange1 = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalPropertyPrice1(additionalPrice); // Mettre à jour l'état du prix supplémentaire des propriétés
    }
  };

  const handleTaskPriceChange1 = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalTaskPrice1(additionalPrice); // Mettre à jour l'état du prix supplémentaire des tâches
    }
  };

  const basePrice1 = 150;
  const totalPrice1 = basePrice1 + additionalPropertyPrice1 + additionalTaskPrice1;




  //MeDIUM  CARD STATES



  const initialPropertyPrice2 = 10; // Valeur par défaut des propriétés
  const initialTaskPrice2 = 5; // Valeur par défaut des tâches

  const [additionalPropertyPrice2, setAdditionalPropertyPrice2] = useState(initialPropertyPrice2);
  const [additionalTaskPrice2, setAdditionalTaskPrice2] = useState(initialTaskPrice2);

  const handlePropertyPriceChange2 = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalPropertyPrice2(additionalPrice); // Mettre à jour l'état du prix supplémentaire des propriétés
    }
  };

  const handleTaskPriceChange2 = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalTaskPrice2(additionalPrice); // Mettre à jour l'état du prix supplémentaire des tâches
    }
  };

  const basePrice2 = 200;
  const totalPrice2 = basePrice2 + additionalPropertyPrice2 + additionalTaskPrice2;






  //PREMIUM CARD STATES 



  const initialPropertyPrice3 = 10; // Valeur par défaut des propriétés
  const initialTaskPrice3 = 5; // Valeur par défaut des tâches

  const [additionalPropertyPrice3, setAdditionalPropertyPrice3] = useState(initialPropertyPrice3);
  const [additionalTaskPrice3, setAdditionalTaskPrice3] = useState(initialTaskPrice3);

  const handlePropertyPriceChange3 = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalPropertyPrice3(additionalPrice); // Mettre à jour l'état du prix supplémentaire des propriétés
    }
  };

  const handleTaskPriceChange3 = (event) => {
    const selectElement = event.target;
    const selectedOption = selectElement.selectedOptions[0];
    const priceSpan = selectedOption.querySelector('.right'); // Sélectionner le span contenant le prix
    if (priceSpan) {
      const priceText = priceSpan.textContent.replace('$', ''); // Récupérer le nombre après le symbole dollar
      const additionalPrice = parseInt(priceText, 10); // Convertir le texte en nombre
      setAdditionalTaskPrice3(additionalPrice); // Mettre à jour l'état du prix supplémentaire des tâches
    }
  };

  const basePrice3 = 250;
  const totalPrice3 = basePrice3 + additionalPropertyPrice3 + additionalTaskPrice3;






  const handleSubscribe = (plan) => {
    window.location.href = `http://kei-app-frontweb.local/signup?plan=${plan}`;
  };

  return (
    <div>
    

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div className={`container ${styles.pricing_item} ${styles.pricing_item_solo}`}>
              <Tip
              offer='Solo'
              content={[
                "Rapports illimités",
                "Photos illimitées",
                "5 Propriétés",
                "1 Utilisateur",
                "5 Tâches"
              ]}
            />
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
                    <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialPropertyPrice}`} // Sélectionner la valeur par défaut
                      onChange={handlePropertyPriceChange}
                    >
                      <option value="$10">
                        <span className="left">5 Propriétés</span> - <span className="right">$10</span>
                      </option>
                      <option value="$15">
                        <span className="left">10 propriétés</span> - <span className="right">$15</span>
                      </option>
                      <option value="$20">
                        <span className="left">25 propriétés</span> - <span className="right">$20</span>
                      </option>
                      <option value="$25">
                        <span className="left">50 propriétés</span> - <span className="right">$25</span>
                      </option>
                      <option value="$30">
                        <span className="left">75 propriétés</span> - <span className="right">$30</span>
                      </option>
                      <option value="$35">
                        <span className="left">100 propriétés</span> - <span className="right">$35</span>
                      </option>
                      <option value="$40">
                        <span className="left">125 propriétés</span> - <span className="right">$40</span>
                      </option>
                      <option value="$45">
                        <span className="left">150 propriétés</span> - <span className="right">$45</span>
                      </option>
                    </select>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                    <span>
                      <span className="fw-bold">1</span> utilisateur
                    </span>
                  </li>
                  <li>
                    <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                    <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialTaskPrice}`} // Sélectionner la valeur par défaut
                      onChange={handleTaskPriceChange}
                    >
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$5</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$10</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$15</span>
                      </option>
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$20</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$25</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$5</span>
                      </option>
                    </select>
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
          <Tip
              offer='Standard'
              content={[
                "Rapports illimités",
                "Photos illimitées",
                "5 Propriétés",
                "2 Utilisateurs",
                "5 Tâches"
              ]}
              />
              
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
                    <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialPropertyPrice1}`} // Sélectionner la valeur par défaut
                      onChange={handlePropertyPriceChange1}
                    >
                      <option value="$10">
                        <span className="left">5 Propriétés</span> - <span className="right">$10</span>
                      </option>
                      <option value="$15">
                        <span className="left">10 propriétés</span> - <span className="right">$15</span>
                      </option>
                      <option value="$20">
                        <span className="left">25 propriétés</span> - <span className="right">$20</span>
                      </option>
                      <option value="$25">
                        <span className="left">50 propriétés</span> - <span className="right">$25</span>
                      </option>
                      <option value="$30">
                        <span className="left">75 propriétés</span> - <span className="right">$30</span>
                      </option>
                      <option value="$35">
                        <span className="left">100 propriétés</span> - <span className="right">$35</span>
                      </option>
                      <option value="$40">
                        <span className="left">125 propriétés</span> - <span className="right">$40</span>
                      </option>
                      <option value="$45">
                        <span className="left">150 propriétés</span> - <span className="right">$45</span>
                      </option>
                    </select>
      </li>


      <li>
        <GiCheckMark className={`me-2 ${styles.standard_check}`} />
        <span>
          <span className="fw-bold">2</span> utilisateurs
        </span>
      </li>
      <li>
        <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                  <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialTaskPrice1}`} // Sélectionner la valeur par défaut
                      onChange={handleTaskPriceChange1}
                     >
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$5</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$10</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$15</span>
                      </option>
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$20</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$25</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$5</span>
                      </option>
                    </select>
      </li>
    </ul>
    <hr />
    <button className={`btn mt-1 ${styles.buy_btn}`} onClick={()=>handleSubscribe("standar")}>
      Souscrire
    </button>
  </div>
</div>



{/* MEDIUM */}



<div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
  <div className={`container ${styles.pricing_item} ${styles.pricing_item_medium}`}>
  <Tip
              offer='Medium'
              content={[
                "Rapports illimités",
                "Photos illimitées",
                "5 Propriétés",
                "5 Utilisateurs",
                "5 Tâches"
              ]}
              />    <h4 className={`${styles.medium_title}`}>
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
                  <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialPropertyPrice2}`} // Sélectionner la valeur par défaut
                      onChange={handlePropertyPriceChange2}
                     >
                      <option value="$10">
                        <span className="left">5 Propriétés</span> - <span className="right">$10</span>
                      </option>
                      <option value="$15">
                        <span className="left">10 propriétés</span> - <span className="right">$15</span>
                      </option>
                      <option value="$20">
                        <span className="left">25 propriétés</span> - <span className="right">$20</span>
                      </option>
                      <option value="$25">
                        <span className="left">50 propriétés</span> - <span className="right">$25</span>
                      </option>
                      <option value="$30">
                        <span className="left">75 propriétés</span> - <span className="right">$30</span>
                      </option>
                      <option value="$35">
                        <span className="left">100 propriétés</span> - <span className="right">$35</span>
                      </option>
                      <option value="$40">
                        <span className="left">125 propriétés</span> - <span className="right">$40</span>
                      </option>
                      <option value="$45">
                        <span className="left">150 propriétés</span> - <span className="right">$45</span>
                      </option>
                    </select>
      </li>
      <li>
        <GiCheckMark className={`me-2 ${styles.medium_check}`} />
        <span>
          <span className="fw-bold">5</span> utilisateurs
        </span>
      </li>
      <li>
        <GiCheckMark className={`me-2 ${styles.medium_check}`} />
        <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialTaskPrice2}`} // Sélectionner la valeur par défaut
                      onChange={handleTaskPriceChange2}
                     >
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$5</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$10</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$15</span>
                      </option>
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$20</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$25</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$5</span>
                      </option>
                    </select>
      </li>
    </ul>
    <hr />
    <button className={`btn mt-1 ${styles.buy_btn}`} onClick={()=>handleSubscribe("medium")}>
      Souscrire
    </button>
  </div>
</div>




{/*PREMIUM CARD*/}

<div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
  <div className={`container ${styles.pricing_item} ${styles.pricing_item_premium}`}>
  <Tip
              offer='Premium'
              content={[
                "Rapports illimités",
                "Photos illimitées",
                "5 Propriétés",
                "Utilisateurs illimites",
                "5 Tâches"
              ]}
              />    <h4 className={`${styles.premium_title}`}>
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
        <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialPropertyPrice3}`} // Sélectionner la valeur par défaut
                      onChange={handlePropertyPriceChange3}
                     >
                      <option value="$10">
                        <span className="left">5 Propriétés</span> - <span className="right">$10</span>
                      </option>
                      <option value="$15">
                        <span className="left">10 propriétés</span> - <span className="right">$15</span>
                      </option>
                      <option value="$20">
                        <span className="left">25 propriétés</span> - <span className="right">$20</span>
                      </option>
                      <option value="$25">
                        <span className="left">50 propriétés</span> - <span className="right">$25</span>
                      </option>
                      <option value="$30">
                        <span className="left">75 propriétés</span> - <span className="right">$30</span>
                      </option>
                      <option value="$35">
                        <span className="left">100 propriétés</span> - <span className="right">$35</span>
                      </option>
                      <option value="$40">
                        <span className="left">125 propriétés</span> - <span className="right">$40</span>
                      </option>
                      <option value="$45">
                        <span className="left">150 propriétés</span> - <span className="right">$45</span>
                      </option>
                    </select>
      </li>
      <li>
        <GiCheckMark className={`me-2 ${styles.premium_check}`} />
        <span>
          Utilisateurs <span className="fw-bold">illimités</span> 
        </span>
      </li>
      <li>
        <GiCheckMark className={`me-2 ${styles.premium_check}`} />
        <select
                      className={`float-right ${styles.customSelect}`}
                      defaultValue={`$${initialTaskPrice3}`} // Sélectionner la valeur par défaut
                      onChange={handleTaskPriceChange3}
                     >
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$5</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$10</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$15</span>
                      </option>
                      <option value="$5">
                        <span className="left">5 tâches</span> - <span className="right">$20</span>
                      </option>
                      <option value="$5">
                        <span className="left">10 tâches</span> - <span className="right">$25</span>
                      </option>
                      <option value="$5">
                        <span className="left">25 tâches</span> - <span className="right">$5</span>
                      </option>
                    </select>
      </li>
    </ul>
    <hr />
    <button className={`btn mt-1 ${styles.buy_btn}`} onClick={()=>handleSubscribe("premium")}>
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










































