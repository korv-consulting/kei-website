import React, { useState } from 'react';
import styles from "@/styles/PricingOffer.module.css";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from 'next-i18next';

const MonthlyPricingOffer = () => {
  const { t } = useTranslation('montly_pricing');

  const plans = [
    { title: 'solo', price: 10, properties: 100, users: 1, tasks: 5, btnStyle: styles.buy_btn },
    { title: 'duo', price: 15, properties: 100, users: 2, tasks: 10, btnStyle: styles.buy_btn1 },
    { title: 'pro', price: 20, properties: 150, users: 5, tasks: 15, btnStyle: styles.buy_btn2 },
    { title: 'premium', price: 25, properties: 500, users: 'unlimited', tasks: 'unlimited', btnStyle: styles.buy_btn3 }
  ];

  const handleSubscribe = (plan) => {
    window.location.href = `http://kei-app-frontweb.local/signup?plan=${plan}`;
  };

  console.log(plans[0].title);
  return (
    <div className="container">
      <div className="row gy-4">
        {plans.map((plan, index) => (
          <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100" key={index}>
            <div className={`container ${styles.pricing_item} ${styles[`pricing_item_${plan.title}`]}`}>
              <h3 className={styles[`title${index}`]}>{t(plan.title)}</h3>
              <h4 className={styles[`${plan.title}_title`]}>
                <sup>£</sup>{plan.price}<span>{t('perMonth')}</span>
              </h4>
              <hr />
              <ul>
                <li>
                  <GiCheckMark className={`me-2 ${styles[`${plan.title}_check`]}`} />
                  <span>{t('unlimitedReports')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles[`${plan.title}_check`]}`} />
                  <span>{t('unlimitedPhotos')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles[`${plan.title}_check`]}`} />
                  <span><span className="fw-bold">{plan.properties}</span> {t('properties')}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles[`${plan.title}_check`]}`} />
                  <span>{plan.users === 'unlimited' ? t('unlimitedUsers') : <><span className="fw-bold">{plan.users}</span> {t(plan.users > 1 ? 'users' : 'user')}</>}</span>
                </li>
                <li>
                  <GiCheckMark className={`me-2 ${styles[`${plan.title}_check`]}`} />
                  <span>{plan.tasks === 'unlimited' ? t('unlimitedTasks') : <><span className="fw-bold">{plan.tasks}</span> {t('tasks')}</>}</span>
                </li>
              </ul>
              <hr />
              <button className={`btn mt-1 ${plan.btnStyle}`} onClick={() => handleSubscribe(plan.title)}>
                {t('subscribe')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyPricingOffer;
