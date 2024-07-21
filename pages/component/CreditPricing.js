import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/CreditPricing.module.css';

const creditSteps = [10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600];

const getPricePerCredit = (credits) => {
  if (credits >= 500) return 8;
  if (credits >= 400) return 8.5;
  if (credits >= 300) return 9;
  if (credits >= 250) return 9.5;
  if (credits >= 150) return 10;
  return 15;
};

const CreditPricing = () => {
  const { t } = useTranslation('credit');
  const [credits, setCredits] = useState(10);
  const [isScreenSizeLessThan767, setIsScreenSizeLessThan767] = useState(false);
  const pricePerCredit = getPricePerCredit(credits);
  const totalPrice = credits * pricePerCredit;

  const handleSliderChange = (value) => {
    setCredits(value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeLessThan767(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className="mb-8">
          <h3 className="text-start fw-bold mb-0">{t('number_of_reports')}</h3><br />
          <p className="text-start mt-0">{t('access_all_features')}</p>
        </div>

        <div className={styles.sliderContainer}>
          {isScreenSizeLessThan767 ? (
            <Slider
              min={10}
              max={600}
              step={10}
              marks={creditSteps.reduce((acc, step) => {
                acc[step] = step;
                return acc;
              }, {})}
              value={credits}
              onChange={handleSliderChange}
              railStyle={{ backgroundColor: '#ddd', width: 11 }}
              trackStyle={{ backgroundColor: '#4caf50', width: 11 }}
              handleStyle={{
                borderColor: '#37517e',
                height: 15,
                width: 15,
                marginLeft: -2,
                marginTop: -3,
                backgroundColor: '#37517e',
                color: '#37517e'
              }}
              dotStyle={{
                display: 'none', // Remove points under markers
              }}
              vertical
            />
          ) : (
            <Slider
              min={10}
              max={600}
              step={10}
              marks={creditSteps.reduce((acc, step) => {
                acc[step] = step;
                return acc;
              }, {})}
              value={credits}
              onChange={handleSliderChange}
              railStyle={{ backgroundColor: '#ddd', height: 11 }}
              trackStyle={{ backgroundColor: '#37517e', height: 11 }}
              handleStyle={{
                borderColor: '#4caf50',
                height: 15,
                width: 15,
                marginLeft: -2,
                marginTop: -3,
                backgroundColor: '#fff',
              }}
              dotStyle={{
                display: 'none', // Remove points under markers
              }}
            />
          )}
        </div>
        <div className={`mb-2 ${styles.priceInfo}`}>
          <span><span className={styles.bold}>{pricePerCredit.toFixed(2)} {t('per_credit')}</span></span><br />
          <span className={styles.bold}>{t('total')} {totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <center>
        <button className={styles.purchaseButton}>
          {t('buy_credits', { credits })}
        </button>
      </center>
    </div>
  );
};

export default CreditPricing;
