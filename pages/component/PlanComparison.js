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
    Rapports: [
      { feature: 'Rapports illimités', solo: true, duo: true, pro: true, premium: true },
      { feature: 'Rapports ', solo: true, duo: true, pro: true, premium: true },
      { feature: 'Photos illimitées', solo: true, duo: true, pro: true, premium: true },
    ],
    Utilisateurs: [
      { feature: 'Nombre de propriétés', solo: true, duo: true, pro: true, premium: true },
      { feature: "Nombre d'utilisateurs", solo: true, duo: true, pro: true, premium: true },
      { feature: 'Nombre de tâches', solo: true, duo: true, pro: true, premium: true },
    ],
    Support: [
      { feature: 'Support email', solo: false, duo: true, pro: true, premium: true },
      { feature: 'Assistance téléphonique', solo: false, duo: false, pro: false, premium: true },
    ],
    Personnalisation: [
      { feature: 'Thèmes personnalisés', solo: false, duo: true, pro: true, premium: true },
      { feature: 'Templates personnalisés', solo: false, duo: false, pro: true, premium: true },
    ],
    Vidéo: [
      { feature: 'Enregistrement vidéo', solo: true, duo: true, pro: true, premium: true },
    ],
    Sécurité: [
      { feature: "Contrôles d'accès des utilisateurs", solo: false, duo: false, pro: false, premium: true },
      { feature: 'Chiffrement des données', solo: true, duo: true, pro: true, premium: true },
    ],
  };

  return (
    <div className={styles.planComparisonContainer}>
      <div className={styles.planComparisonHeader}>
        <div className={styles.headerContent} data-aos="zoom-in">
          <h2>COMPARAISON</h2>
          <p className='text-center w-100'>Découvrez nos différentes formules et leurs avantages, et enfin trouvez l'offre qui vous convient</p>
        </div>
      </div>

      <div className={styles.tableContainer} data-aos="zoom-in">
        {/* En-tête visible seulement pour desktop */}
        <div className={`${styles.tableHeader}`}>
          <div className={styles.featureColumn}></div> {/* Empty cell for features */}
          <div className={`${styles.planColumn} ${styles.solo}`}>
            <div className={`${styles.headerCard}`}>
              <h3 className={styles.headerCardTitle0}>SOLO</h3>
              <p>Pour les particuliers</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.duo}`}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle1}>DUO</h3>
              <p>Pour les petites équipes</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.pro}`}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle2}>PRO</h3>
              <p>Pour les professionnels</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.premium}`}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle3}>PREMIUM</h3>
              <p>Pour les entreprises</p>
            </div>
          </div>
        </div>

        <div className={styles.tableContent}>
          <Collapse accordion data-aos="zoom-in" className={isMobile ? styles.mobileCollapse : ''}>
            {Object.keys(data).map((category, index) => (
              <Panel header={t(category)} key={index} className={styles.panelHeader}>
                {data[category].map((item, idx) => (
                  <div key={`${index}-${idx}`} className={isMobile ? styles.mobileRow : styles.tableRow}>
                    {/* Ligne de caractéristiques pour mobile */}
                    {isMobile ? (
                      <>
                        <div className={styles.mobileFeatureColumn}>{item.feature}</div>
                        <div className={styles.mobilePlanColumn}>
                          <div className={styles.mobilePlanName}>SOLO</div>
                          {item.solo ? <CheckOutlined className={styles.icon} /> : <MinusOutlined className={styles.icon} />}
                        </div>
                        <div className={styles.mobilePlanColumn}>
                          <div className={styles.mobilePlanName1}>DUO</div>
                          {item.duo ? <CheckOutlined className={styles.icon1} /> : <MinusOutlined className={styles.icon1} />}
                        </div>
                        <div className={styles.mobilePlanColumn}>
                          <div className={styles.mobilePlanName2}>PRO</div>
                          {item.pro ? <CheckOutlined className={styles.icon2} /> : <MinusOutlined className={styles.icon2} />}
                        </div>
                        <div className={styles.mobilePlanColumn}>
                          <div className={styles.mobilePlanName3}>PREMIUM</div>
                          {item.premium ? <CheckOutlined className={styles.icon3} /> : <MinusOutlined className={styles.icon3} />}
                        </div>
                      </>
                    ) : (
                      // Ligne de tableau standard pour desktop
                      <>
                        <div className={styles.featureColumn}>{item.feature}</div>
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
                      </>
                    )}
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





















