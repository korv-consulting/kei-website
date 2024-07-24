import React, { useState, useEffect } from 'react';
import Header from 'components/partials/header';
import Footer from 'components/partials/footer';
import SVGComponent from 'components/partials/SvgComponent';
import ToggleButton from 'components/partials/ToggleButton';
import CreditsPricing from 'components/partials/CreditPricing';
import PricingOffer from 'components/partials/pricingOffer';
import styles from '@/styles/PricingPage.module.css';

const Pricing = () => {
  const [loading, setLoading] = useState(true);
  const [isCredits, setIsCredits] = useState(false);

  // ANIMATION
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (isCredits) => {
    setIsCredits(isCredits);
  };

  return (
    <>
      <Header />
      <div className={`${styles.pageContainer} mt-5`}>
        <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
          <div className={`container ${styles.section_title}`} data-aos="fade-up">
            <center>
              <h2>TARIFICATION</h2>
            </center>
          
            <p className='mt-4 mb-6'>
            Optimisez votre gestion locative avec nos outils digitaux. Tout a été pensé pour apporter le plus de flexibilité possible, vous pouvez soit acheter des crédits selon les besoins qui vous satisfassent, ou encore choisir de vous abonner en choisissant un plan tarifaire qui vous convient. Découvrez comment KEI peut transformer votre expérience de location immobilière. Que vous soyez un professionnel ou un particulier, nous avons la solution pour vous.
           </p>

          </div>
          <center>
            <ToggleButton onChange={handleChange} isCredits={isCredits} />
          </center>
        </section>

        {loading ? (
          <div className={styles.spinnerContainer}>
            <SVGComponent />
          </div>
        ) : (
          <div>
            {isCredits ?  <CreditsPricing key="credits" />:<PricingOffer key="offer" />  }
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
