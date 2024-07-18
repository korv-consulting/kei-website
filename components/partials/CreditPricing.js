import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
  const [credits, setCredits] = useState(10);
  const pricePerCredit = getPricePerCredit(credits);
  const totalPrice = credits * pricePerCredit;

  const handleSliderChange = (value) => {
    setCredits(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
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
          trackStyle={{ backgroundColor: '#4caf50', height: 11 }}
          handleStyle={{
            borderColor: '#4caf50',
            height: 15,
            width: 15,
            marginLeft: -2,
            marginTop: -3,
            backgroundColor: '#fff',
          }}
          dotStyle={{
            display: 'none', // Supprime les points sous les marqueurs
          }}
          // vertical min={200}


        />
      </div>
      <div className={`mb-2 ${styles.priceInfo}`}>
        <span><span className={styles.bold}>{pricePerCredit.toFixed(2)} €</span> par crédit</span><br/>
        <span className={styles.bold}>Total: {totalPrice.toFixed(2)} € / an </span>
      </div>
      <button className={styles.purchaseButton}>
        Acheter {credits} crédits
      </button>
    </div>
  );
};

export default CreditPricing;
