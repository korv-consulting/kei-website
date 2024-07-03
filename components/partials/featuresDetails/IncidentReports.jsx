
import React from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import styles from '@/styles/features/IncidentReports.module.css';

const IncidentReports = () => {
  const reports = [
    { name: "Rapport d'incident 1", link: "/reports/incident1.pdf" },
    { name: "Rapport d'inspection 1", link: "/reports/inspection1.pdf" },
    { name: "Rapport d'incident 2", link: "/reports/incident2.pdf" },
    { name: "Rapport d'inspection 2", link: "/reports/inspection2.pdf" },
  ];

  return (
    <div className={`${styles.reportsContainer} container`}>
      <h1 className={styles.title}>Une image vaut mieux que mille mots</h1>
      <h2 className={styles.subtitle}>Gérez et exportez vos rapports facilement,explorez la gamme complète de rapports d'inspection de bâtiments que vous pouvez créer.</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className={styles.imageContainer}>
            <Image src="/features/report-bunch.png" alt="Exemple de rapport" width={450} height={400} />
          </div>
        </div>
        <div className="col-12 col-md-1">
          <p className={styles.paragraph}>
            Un élément crucial lors de la réalisation d’inspections de bâtiments est sans aucun doute la production des rapports d’inspection. Que ce soit pour se
            conformer aux règles et réglementations locales en matière de prévention des incendies, pour des audits de santé et de sécurité, ou pour les obligations
            de reporting annuel, notre application KEI vous permet de créer une
            variété de rapports. Elle vous offre une large gamme d’options pour générer des rapports détaillés, précis et conformes aux exigences, tout en rendant le
            processus intuitif et rapide.
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
