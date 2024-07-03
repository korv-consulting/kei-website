import { Table } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import styles from '@/styles/PlanComparison.module.css';

const PlanComparison = () => {
  const dataSource = [
    {
      feature: 'Rapports illimités',
      solo: true,
      standard: true,
      medium: true,
      premium: true,
    },
    {
      feature: 'Photos illimitées',
      solo: true,
      standard: true,
      medium: true,
      premium: true,
    },
    {
      feature: 'Nombre de propriétés',
      solo: true,
      standard: true,
      medium: true,
      premium: true,
    },
    {
      feature: 'Nombre de d\'tilisateurs',
      solo: true,
      standard: true,
      medium: true,
      premium: true,
    },
    {
      feature: 'Nombre de tâches',
      solo: true,
      standard: true,
      medium: true,
      premium: true,
    },

    {
        feature: 'Acces au centre d\'aide',
        solo: true,
        standard: true,
        medium: true,
        premium: true,
      },
  

      {
        feature: 'Support email',
        solo: false,
        standard: true,
        medium: true,
        premium: true,
      },
  

      {
        feature: 'Assistance Telephonique',
        solo: false,
        standard: false,
        medium: false,
        premium: true,
      },



     



      {
        feature: 'Themes personalises',
        solo: false,
        standard: true,
        medium: true,
        premium: true,
      },



      {
        feature: 'Templates personalises',
        solo: false,
        standard: false,
        medium: true,
        premium: true,
      },


      {
        feature: 'Enregistrement video',
        solo: true,
        standard: true,
        medium: true,
        premium: true,
      },

    



      {
        feature: 'Contrôles d\'accès des utilisateurs',
        solo: false,
        standard: false,
        medium: false,
        premium: true,
      },

      {
        feature: 'Gestion des rôles d\'utilisateurs',
        solo: false,
        standard: true,
        medium: true,
        premium: true,
      },
    
  ];

  const columns = [
    {
      title: (
        <h1 className={styles.columnHeader}>Fonctionnalités</h1>
      ),
      dataIndex: 'feature',
      key: 'feature',
      className: styles.featureColumn,
    },
    {
      title: (
        <h1 className={`${styles.columnHeader} ${styles.soloTitle}`}>
          SOLO
        </h1>
      ),
      dataIndex: 'solo',
      key: 'solo',
      render: (text) => renderCell(text, 'solo'),
      className: `${styles.planColumn} ${styles.solo}`,
    },
    {
      title: (
        <h1 className={`${styles.columnHeader} ${styles.standardTitle}`}>
          STANDARD
        </h1>
      ),
      dataIndex: 'standard',
      key: 'standard',
      render: (text) => renderCell(text, 'standard'),
      className: `${styles.planColumn} ${styles.standard}`,
    },
    {
      title: (
        <h1 className={`${styles.columnHeader} ${styles.mediumTitle}`}>
          MEDIUM
        </h1>
      ),
      dataIndex: 'medium',
      key: 'medium',
      render: (text) => renderCell(text, 'medium'),
      className: `${styles.planColumn} ${styles.medium}`,
    },
    {
      title: (
        <h1 className={`${styles.columnHeader} ${styles.premiumTitle}`}>
          PREMIUM
        </h1>
      ),
      dataIndex: 'premium',
      key: 'premium',
      render: (text) => renderCell(text, 'premium'),
      className: `${styles.planColumn} ${styles.premium}`,
    },
  ];

  const renderCell = (text, plan) => {
    const color = getTextColor(plan); // Get the text color for the specified plane
    if (text === true) {
      return <CheckOutlined style={{ color }} />;
    } else if (text === false) {
      return <CloseOutlined style={{ color }} />;
    } else {
      return text;//if the value is a number or somethings else
    }
  };

  const getTextColor = (plan) => {
    switch (plan) {
      case 'solo':
        return 'var(--solo)';
      case 'standard':
        return 'var(--standard)';
      case 'medium':
        return 'var(--medium)';
      case 'premium':
        return 'var(--premium)';
      default:
        return 'black'; // default color
    }
  };

  return (

    
    <div className={styles.container}>
         <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <center>
            <h2>Comparaison des Plans d'abonnement</h2>
          </center>
          </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default PlanComparison;
