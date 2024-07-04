import React, { useState, useEffect } from 'react';
import styles from "@/styles/PricingOffer.module.css";
import MonthlyPricingOffer from './MonthlyPricingOffer';
import YearlyPricingOffer from './YearlyPricingOffer';
import SwitchButton from './SwitchButton';
import PlanComparison from './PlanComparison'
const PricingOffer = () => {
  const [showMonthly, setShowMonthly] = useState(true);

  return (
    <div>
      <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <center>
            <h2>NOS OFFRES</h2>
          </center>
          <p className="mb-4">
            Optimisez votre gestion locative avec nos outils digitaux. Sélectionnez le plan tarifaire qui vous convient et découvrez comment KEI peut 
            transformer votre expérience de location immobilière. Que vous soyez un professionnel ou un particulier, nous avons la solution pour vous.
          </p>

          <SwitchButton
            setShowMonthly={setShowMonthly}
          />
        </div>

        {showMonthly ? <MonthlyPricingOffer /> : <YearlyPricingOffer />}

        <PlanComparison />
      </section>
    </div>
  );
};

export default PricingOffer;
