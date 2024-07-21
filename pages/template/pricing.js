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

const Pricing = () => {
  const { t } = useTranslation('pricing');
  const [loading, setLoading] = useState(true);
  const [isCredits, setIsCredits] = useState(true);

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
              <h2>{t('pricingTitle')}</h2>
            </center>
            <p className='mt-4 mb-6'>
              {t('pricingDescription')}
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
            {isCredits ? <PricingOffer key="offer" /> : <CreditsPricing key="credits" /> }
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Pricing;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['pricing','header','footer', 'planComparaison', 'montly_pricing', 'yearly_pricing', 'credit', 'tooglebtn','newsletter']),
  },
});
