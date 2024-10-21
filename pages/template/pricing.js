import React, { useState, useEffect } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import SVGComponent from 'components/partials/SvgComponent';
import ToggleButton from 'pages/component/ToggleButton';
import CreditsPricing from 'pages/component/CreditPricing';
import PricingOffer from 'pages/component/pricingOffer';
import styles from '@/styles/PricingPage.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PlanComparison from 'pages/component/PlanComparison';
import DownloadApp from 'pages/component/DownloadApp';

const Pricing = () => {
  const { t } = useTranslation('pricing');
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
      
        <section id="pricing" className={` ${styles.pricing} ${styles.section} `}>
        <div className={`${styles.pageContainer} mt-5`}>
          <div className={`container ${styles.section_title}`} data-aos="fade-up">
            <center>
              <h2>{t('pricingTitle')}</h2>
            </center>
            <p className='mt-4 mb-6'>
              {t('pricingDescription')}
            </p>
          </div>
          <center>
            <ToggleButton onChange={handleChange} isCredits={isCredits} />
          </center>
       

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
      </section>

      <PlanComparison />
        <DownloadApp/>

  
      <Footer />
    </>
  );
};

export default Pricing;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['pricing','header','footer', 'planComparaison', 'montly_pricing', 'yearly_pricing', 'credit', 'tooglebtn','newsletter', 'switchBtn', 'downloadApp']),
  },
});
