import React, { useState} from 'react';
import styles from "@/styles/PricingOffer.module.css";
import MonthlyPricingOffer from './MonthlyPricingOffer';
import YearlyPricingOffer from './YearlyPricingOffer';
import SwitchButton from './SwitchButton';
import PlanComparison from './PlanComparison'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PricingOffer = () => {
  const [showMonthly, setShowMonthly] = useState(true);

  return (
    <div>
      <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          {/* <center>
            <h2>TARIFICATION</h2>
          </center>
        */}

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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['planComparaison', 'montly_pricing', 'yearly_pricing', 'switchBtn'])),
  },
});

export default PricingOffer;
