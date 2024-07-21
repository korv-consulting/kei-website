import React from 'react';
import styles from "@/styles/PricingOffer.module.css";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from 'next-i18next';

const YearlyPricingOffer = () => {
  const { t } = useTranslation('yearly_pricing');

  const basePrice = 100;
  const basePrice1 = 150;
  const basePrice2 = 200;
  const basePrice3 = 250;

  const handleSubscribe = (plan) => {
    window.location.href = `http://kei-app-frontweb.local/signup?plan=${plan}`;
  };

  return (
    <div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div className={`container ${styles.pricing_item} ${styles.pricing_item_solo}`}>
              <h3 className={styles.title0}>{t('solo')}</h3>
              <h4 className={styles.solo_title}>
                <sup>$</sup>{basePrice}<span> {t('perYear')}</span>
              </h4>
              <hr />
              <ul>
                <li>
                  <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                  <span>{t('unlimitedReports')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                  <span>{t('unlimitedPhotos')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                  <span><span className="fw-bold">100</span> {t('properties')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                  <span><span className="fw-bold">1</span> {t('users')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.solo_check}`} />
                  <span><span className="fw-bold">5</span> {t('tasks')}</span>
                </li>
              </ul>
              <hr />
              <button className={`btn mt-1 ${styles.buy_btn}`} onClick={() => handleSubscribe("solo")}>
                {t('subscribe')}
              </button>
            </div>
          </div>

          {/* STANDARD PRICECARD */}
          <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div className={`container ${styles.pricing_item} ${styles.pricing_item_standard}`}>
              <h3 className={styles.title1}>{t('duo')}</h3>
              <h4 className={styles.standard_title}>
                <sup>$</sup>{basePrice1}<span> {t('perYear')}</span>
              </h4>
              <hr />
              <ul>
                <li>
                  <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                  <span>{t('unlimitedReports')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                  <span>{t('unlimitedPhotos')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                  <span><span className="fw-bold">100</span> {t('properties')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                  <span><span className="fw-bold">2</span> {t('users')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.standard_check}`} />
                  <span><span className="fw-bold">10</span> {t('tasks')}</span>
                </li>
              </ul>
              <hr />
              <button className={`btn mt-1 ${styles.buy_btn1}`} onClick={() => handleSubscribe("duo")}>
                {t('subscribe')}
              </button>
            </div>
          </div>

          {/* MEDIUM */}
          <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div className={`container ${styles.pricing_item} ${styles.pricing_item_medium}`}>
              <h3 className={styles.title2}>{t('pro')}</h3>
              <h4 className={styles.medium_title}>
                <sup>$</sup>{basePrice2}<span> {t('perYear')}</span>
              </h4>
              <hr />
              <ul>
                <li>
                  <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                  <span>{t('unlimitedReports')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                  <span>{t('unlimitedPhotos')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                  <span><span className="fw-bold">150</span> {t('properties')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                  <span><span className="fw-bold">5</span> {t('users')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.medium_check}`} />
                  <span><span className="fw-bold">15</span> {t('tasks')}</span>
                </li>
              </ul>
              <hr />
              <button className={`btn mt-1 ${styles.buy_btn2}`} onClick={() => handleSubscribe("pro")}>
                {t('subscribe')}
              </button>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div className={`container ${styles.pricing_item} ${styles.pricing_item_premium}`}>
              <h3 className={styles.title3}>{t('premium')}</h3>
              <h4 className={styles.premium_title}>
                <sup>$</sup>{basePrice3}<span> {t('perYear')}</span>
              </h4>
              <hr />
              <ul>
                <li>
                  <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                  <span>{t('unlimitedReports')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                  <span>{t('unlimitedPhotos')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                  <span><span className="fw-bold">500</span> {t('properties')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                  <span>{t('unlimitedUsers')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles.premium_check}`} />
                  <span>{t('unlimitedTasks')}</span>
                </li>
              </ul>
              <hr />
              <button className={`btn mt-1 ${styles.buy_btn3}`} onClick={() => handleSubscribe("premium")}>
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyPricingOffer;
