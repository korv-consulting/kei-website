import { Table } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import styles from '@/styles/PlanComparison.module.css';
import { useEffect, useState } from 'react';

const PlanComparison = () => {
  const [isMobile, setIsMobile] = useState(false);


//LET'S CHECK THE SCREEN SIZE TO CHECKTO DECIDDE IF I MAY DISPLAY A TABLE OR A CARD'S SYSTEM
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 567);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dataSource = [
    { feature: 'Rapports illimités', solo: true, duo: true, pro: true, premium: true },
    { feature: 'Photos illimitées', solo: true, duo: true, pro: true, premium: true },
    { feature: 'Nombre de propriétés', solo: true, duo: true, pro: true, premium: true },
    { feature: 'Nombre de d\'utilisateurs', solo: true, duo: true, pro: true, premium: true },
    { feature: 'Nombre de tâches', solo: true, duo: true, pro: true, premium: true },
    { feature: 'Accès au centre d\'aide', solo: true, duo: true, pro: true, premium: true },
    { feature: 'Support email', solo: false, duo: true, pro: true, premium: true },
    { feature: 'Assistance téléphonique', solo: false, duo: false, pro: false, premium: true },
    { feature: 'Thèmes personnalisés', solo: false, duo: true, pro: true, premium: true },
    { feature: 'Templates personnalisés', solo: false, duo: false, pro: true, premium: true },
    { feature: 'Enregistrement vidéo', solo: true, duo: true, pro: true, premium: true },
    { feature: 'Contrôles d\'accès des utilisateurs', solo: false, duo: false, pro: false, premium: true },
    { feature: 'Gestion des rôles d\'utilisateurs', solo: false, duo: true, pro: true, premium: true },
  ];

  const columns = [
    { title: <h1 className={styles.columnHeader}>Fonctionnalités</h1>, dataIndex: 'feature', key: 'feature', className: styles.featureColumn },
    { title: <h1 className={`${styles.columnHeader} ${styles.soloTitle}`}>SOLO</h1>, dataIndex: 'solo', key: 'solo', render: (text) => renderCell(text, 'solo'), className: `${styles.planColumn} ${styles.solo}` },
    { title: <h1 className={`${styles.columnHeader} ${styles.standardTitle}`}>DUO</h1>, dataIndex: 'duo', key: 'duo', render: (text) => renderCell(text, 'duo'), className: `${styles.planColumn} ${styles.standard}` },
    { title: <h1 className={`${styles.columnHeader} ${styles.mediumTitle}`}>PRO</h1>, dataIndex: 'pro', key: 'pro', render: (text) => renderCell(text, 'pro'), className: `${styles.planColumn} ${styles.medium}` },
    { title: <h1 className={`${styles.columnHeader} ${styles.premiumTitle}`}>PREMIUM</h1>, dataIndex: 'premium', key: 'premium', render: (text) => renderCell(text, 'premium'), className: `${styles.planColumn} ${styles.premium}` },
  ];

  const renderCell = (text, plan) => {
    const color = getTextColor(plan);
    return text === true ? <CheckOutlined style={{ color }} /> : text === false ? <CloseOutlined style={{ color }} /> : text;
  };

  const getTextColor = (plan) => {
    switch (plan) {
      case 'solo': return 'var(--solo)';
      case 'duo': return 'var(--standard)';
      case 'pro': return 'var(--medium)';
      case 'premium': return 'var(--premium)';
      default: return 'black';
    }
  };

  return (
    <div className={styles.container}>
      <div className={`container ${styles.section_title}`} data-aos="fade-up">
        <center><h2>Comparaison des Plans d'abonnement</h2></center>

        <center className="mb-3">Trouvez la formule adaptée à vos besoins personnels ou à votre entreprise</center>
       

      </div>




      {isMobile ? 
      
      (
        dataSource.map((data, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardTitle}>{data.feature}</div>
            <div className={styles.cardContent}>
              <span className={styles.solo}>Solo: {renderCell(data.solo, 'solo')}</span>
              <span className={styles.standard}>Duo: {renderCell(data.duo, 'duo')}</span>
              <span className={styles.medium}>Pro: {renderCell(data.pro, 'pro')}</span>
              <span className={styles.premium}>Premium: {renderCell(data.premium, 'premium')}</span>
            </div>
          </div>
        ))


      ) : 
      
      
      
      
      
      (



        <Table dataSource={dataSource} columns={columns} pagination={false} />
      )}
    </div>
  );
};

export default PlanComparison;
