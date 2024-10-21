import React from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import styles from '@/styles/features/IncidentReports.module.css';
import { useTranslation } from 'react-i18next';

const IncidentReports = () => {
  const { t } = useTranslation('incidentReport');

  const reports = [
    { name: t("report1"), link: "/reports/incident1.pdf" },
    { name: t("report2"), link: "/reports/inspection1.pdf" },
    { name: t("report3"), link: "/reports/incident2.pdf" },
    { name: t("report4"), link: "/reports/inspection2.pdf" },
  ];

  return (
    <div className={`${styles.reportsContainer} container`}>
      <h1 className={styles.title}>{t('title')}</h1>
      <h2 className={styles.subtitle}>{t('subtitle')}</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className={styles.imageContainer}>
            <Image src="/features/report-bunch.png" alt={t('imageAlt')} width={450} height={400} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p className={styles.paragraph}>
            {t('paragraph')}
          </p>
          <div className={styles.linksContainer}>
            <ul className={styles.linksList}>
              {reports.map((report, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href={report.link} download>
                    <FaDownload style={{ marginRight: '8px' }} />
                    {report.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentReports;
