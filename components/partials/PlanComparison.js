import { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/PlanComparison.module.css';

const { Panel } = Collapse;

const PlanComparison = () => {
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
    'Rapports': [
      { feature: 'Rapports illimités', solo: true, duo: true, pro: true, premium: true },
      { feature: 'Rapports ', solo: true, duo: true, pro: true, premium: true },
      { feature: 'Photos illimitées', solo: true, duo: true, pro: true, premium: true }
    ],
    'Utilisateurs': [
      { feature: 'Nombre de propriétés', solo: true, duo: true, pro: true, premium: true },
      { feature: 'Nombre de d\'utilisateurs', solo: true, duo: true, pro: true, premium: true },
      { feature: 'Nombre de tâches', solo: true, duo: true, pro: true, premium: true }
    ],
    'Support': [
      { feature: 'Support email', solo: false, duo: true, pro: true, premium: true },
      { feature: 'Assistance téléphonique', solo: false, duo: false, pro: false, premium: true }
    ],
    'Personnalisation': [
      { feature: 'Thèmes personnalisés', solo: false, duo: true, pro: true, premium: true },
      { feature: 'Templates personnalisés', solo: false, duo: false, pro: true, premium: true }
    ],
    'Vidéo': [
      { feature: 'Enregistrement vidéo', solo: true, duo: true, pro: true, premium: true }
    ],
    'Sécurité': [
      { feature: 'Contrôles d\'accès des utilisateurs', solo: false, duo: false, pro: false, premium: true },
      { feature: 'Chiffrement des données', solo: true, duo: true, pro: true, premium: true }
    ]
  };

  return (
    <div className={styles.planComparisonContainer}>
      <div className={styles.planComparisonHeader}>
        <div className={styles.headerContent} data-aos="zoom-in">
          <h2>COMPARAISON</h2>
          <p>Découvrez nos différentes formules et leurs avantages,et enfin Trouvez l'offre qui vous convient</p>
        </div>
      </div>

      <div className={styles.tableContainer} data-aos="zoom-in">
        <div className={`${styles.tableHeader} mx-3`}>
          {/* <div className={styles.featureColumn}>{"                           "}</div> */}
          <div className={`${styles.planColumn} ${styles.solo}`}>
            <div className={` ${styles.headerCard}`}>
              <h3 className={styles.headerCardTitle} ></h3>
              {/* <p>Pour les particuliers</p> */}
            </div>
            </div>
          <div className={`${styles.planColumn} ${styles.solo}`}>
            <div className={` ${styles.headerCard}`}>
              <h3 className={styles.headerCardTitle} >SOLO</h3>
              <p>Pour les particuliers</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.duo}`}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle}>DUO</h3>
              <p>Pour les petites équipes</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.pro} `}>
            <div className={styles.headerCard}>
              <h3 className={styles.headerCardTitle}>PRO</h3>
              <p>Pour les professionnels</p>
            </div>
          </div>
          <div className={`${styles.planColumn} ${styles.premium} ms-2`}>
            <div className={styles.headerCard}>
              <h3  className={styles.headerCardTitle}>PREMIUM</h3>
              <p>Pour les entreprises</p>
            </div>
          </div>
        </div>


        <div className={styles.tableContent}>
          
          <Collapse accordion data-aos="zoom-in" className={isMobile ? styles.mobileCollapse : ''}>
            {Object.keys(data).map((category, index) => (
              <Panel header={category} key={index} className={styles.panelHeader}>
                {data[category].map((item, idx) => (
                  <div key={`${index}-${idx}`} className={styles.mobileFeature}>

                    {isMobile ? <div className={styles.featureName}>{item.feature}</div>:''}


                    <div className={styles.mobileHeader}>
                      <div className={`${styles.mobilePlanColumn} ${styles.solo}`}>SOLO</div>
                      <div className={`${styles.mobilePlanColumn} ${styles.duo}`}>DUO</div>
                      <div className={`${styles.mobilePlanColumn} ${styles.pro}`}>PRO</div>
                      <div className={`${styles.mobilePlanColumn} ${styles.premium}`}>PREMIUM</div>
                    </div>
                    <div className={`${styles.mobileRow} mx-0`}>
                      

                      {   isMobile ? '':  <div className={`${styles.planColumn}`}> {item.feature} </div> }

                      {/* <div className={styles.featureName}>{item.feature}</div> */}

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
