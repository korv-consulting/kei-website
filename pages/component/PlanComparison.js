import { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/PlanComparison.module.css';
import { useTranslation } from 'next-i18next';

const { Panel } = Collapse;

const PlanComparison = () => {
  const { t } = useTranslation('planComparaison');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    'reports': [
      { feature: t('unlimitedReports'), solo: true, duo: true, pro: true, premium: true },
      /* { feature: t('unlimitedReports'), solo: true, duo: true, pro: true, premium: true },
      { feature: t('unlimitedPhotos'), solo: true, duo: true, pro: true, premium: true } */
    ],
    'users': [
      { feature: t('numberOfProperties'), solo: true, duo: true, pro: true, premium: true },
      { feature: t('numberOfUsers'), solo: true, duo: true, pro: true, premium: true },
      { feature: t('numberOfTasks'), solo: true, duo: true, pro: true, premium: true }
    ],
    'application': [
      { feature: t('inspection'), solo: true, duo: true, pro: true, premium: true },
      { feature: t('tasks'), solo: true, duo: true, pro: true, premium: true },
      { feature: t('compter'), solo: true, duo: true, pro: true, premium: true }
    ],
    'support': [
      { feature: t('emailSupport'), solo: false, duo: true, pro: true, premium: true },
      { feature: t('phoneSupport'), solo: false, duo: false, pro: false, premium: true },
      { feature: t('centerSupport'), solo: false, duo: false, pro: false, premium: true }
    ],
    'customization': [
      { feature: t('customThemes'), solo: false, duo: true, pro: true, premium: true },
      { feature: t('customTemplates'), solo: false, duo: false, pro: true, premium: true }
    ],
    'video': [
      { feature: t('videoRecording'), solo: true, duo: true, pro: true, premium: true }
    ],
    'security': [
      { feature: t('userAccessControls'), solo: false, duo: false, pro: false, premium: true },
      { feature: t('dataEncryption'), solo: true, duo: true, pro: true, premium: true },
      { feature: t('addLocation'), solo: true, duo: true, pro: true, premium: true },
      { feature: t('mandataire'), solo: true, duo: true, pro: true, premium: true },
    ]
  };

  return (
    <div className={styles.planComparisonContainer}>
      <div className={styles.planComparisonHeader}>
        <div className={styles.headerContent} data-aos="zoom-in">
          <h2>{t('comparison')}</h2>
          <p>{t('description')}</p>
        </div>
      </div>

      <div className={styles.tableContainer} data-aos="zoom-in">
        <div className={`${styles.tableHeader}`}>
          <div className={`${styles.planColumn} ${styles.solo}`}>
            <div className={` ${styles.headerCard}`}>
              <h3 className={styles.headerCardTitle}>{t('solo')}</h3>
              <p>{t('forIndividuals')}</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.duo}`}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle}>{t('duo')}</h3>
              <p>{t('forSmallTeams')}</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.pro}`}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle}>{t('pro')}</h3>
              <p>{t('forProfessionals')}</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.premium}`}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle}>{t('premium')}</h3>
              <p>{t('forEnterprises')}</p>
            </div>
          </div>
        </div>

        <div className={styles.tableContent}>
          <Collapse accordion data-aos="zoom-in" className={isMobile ? styles.mobileCollapse : ''}>
            {Object.keys(data).map((category, index) => (
              <Panel header={t(category)} key={index} className={styles.panelHeader}>
                {data[category].map((item, idx) => (
                  <div key={`${index}-${idx}`} className={styles.mobileFeature}>
                    <div className={styles.featureName}>{item.feature}</div>
                    <div className={styles.mobileHeader}>
                      <div className={`${styles.mobilePlanColumn} ${styles.solo}`}>{t('solo')}</div>
                      <div className={`${styles.mobilePlanColumn} ${styles.duo}`}>{t('duo')}</div>
                      <div className={`${styles.mobilePlanColumn} ${styles.pro}`}>{t('pro')}</div>
                      <div className={`${styles.mobilePlanColumn} ${styles.premium}`}>{t('premium')}</div>
                    </div>
                    <div className={`${styles.mobileRow}`}>
                      <div className={`${styles.planColumn} ${styles.solo} ${item.solo ? styles.check : styles.close}`}>
                        {item.solo ? <CheckOutlined className={styles.icon} /> : <MinusOutlined className={styles.icon} />}
                      </div>
                      <div className={`${styles.planColumn} ${styles.duo} ${item.duo ? styles.check : styles.close}`}>
                        {item.duo ? <CheckOutlined className={styles.icon} /> : <MinusOutlined className={styles.icon} />}
                      </div>
                      <div className={`${styles.planColumn} ${styles.pro} ${item.pro ? styles.check : styles.close}`}>
                        {item.pro ? <CheckOutlined className={styles.icon} /> : <MinusOutlined className={styles.icon} />}
                      </div>
                      <div className={`${styles.planColumn} ${styles.premium} ${item.premium ? styles.check : styles.close}`}>
                        {item.premium ? <CheckOutlined className={styles.icon} /> : <MinusOutlined className={styles.icon} />}
                      </div>
                    </div>
                  </div>
                ))}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
