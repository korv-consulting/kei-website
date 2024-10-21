import styles from '@/styles/AnimatedCards.module.css';
// import { ReactSVG } from 'react-svg';
import { useTranslation } from 'next-i18next';
import MagnifierEffect from './MagnifierEffect';
import Image from 'next/image';

const AnimatedCards = () => {
    const { t } = useTranslation('animated');

    return (
        <>
            <center>
                <section className={styles.section}>
                    <h2>{t('completeSolution')}</h2>
                </section>
            </center>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h3>{t('detailedDashboard')}</h3>

                    <img src="/svgs/Dashboard.gif" alt="Dashboard" width={640} height={640} />
                    
                </div>


                <div className={styles.card}>
                    <h3>{t('thoroughInspection')}</h3>

                    <img src="/svgs/inspection.gif" alt="Inspection" width={640} height={640} />

                </div>
                <div className={styles.card}>
                    <h3>{t('templateGeneration')}</h3>

                    <img src="/svgs/Template creation.gif" alt="Inspection" width={640} height={640} />


                </div>
                <div className={styles.card}>
                    <h3>{t('interactiveReports')}</h3>
                    <img src="/svgs/Interactive reports.gif" alt="Inspection" width={640} height={640} />

                </div>
                <div className={styles.card}>
                    <h3>{t('reportSigning')}</h3>
                    <img src="/svgs/Report Signing.gif" alt="Inspection" width={640} height={640} />

                </div>
                <div className={styles.card}>
                    <h3>{t('taskCreationTracking')}</h3>

                    <img src="/svgs/Task creation and tracking.gif" alt="Inspection" width={640} height={640} />

             
                </div>
            </div>
        </>
    );
};

export default AnimatedCards;
