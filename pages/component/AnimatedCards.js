import styles from '@/styles/AnimatedCards.module.css';
// import { ReactSVG } from 'react-svg';
import { useTranslation } from 'next-i18next';
import MagnifierEffect from './MagnifierEffect';


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
                    <svg width="300px" height="200px" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <rect x="10" y="20" width="280" height="160" rx="15" ry="15" fill="#EAEDED" stroke="#333" stroke-width="2" />
                        <rect x="10" y="180" width="280" height="10" fill="#333" />
                        {/* <text x="150" y="15" fill="#333" font-family="Arial" font-size="16" text-anchor="middle">Dashboard</text> */}
                        <rect x="50" y="60" width="20" height="80" fill="#1ABC9C">
                            <animate attributeName="height" values="80;120;80" dur="2s" repeatCount="indefinite" begin="0.5s" />
                            <animate attributeName="y" values="60;40;60" dur="2s" repeatCount="indefinite" />
                        </rect>
                        <rect x="140" y="50" width="20" height="90" fill="#2ECC71">
                            <animate attributeName="height" values="90;130;90" dur="2s" repeatCount="indefinite" begin="1s" />
                            <animate attributeName="y" values="50;30;50" dur="2s" repeatCount="indefinite" />
                        </rect>
                        <rect x="190" y="70" width="20" height="70" fill="#FF6F61">
                            <animate attributeName="height" values="70;110;70" dur="2s" repeatCount="indefinite" begin="1.5s" />
                            <animate attributeName="y" values="70;50;70" dur="2s" repeatCount="indefinite" />
                        </rect>
                        <polyline points="40,140 90,110 140,130 190,100 240,140" fill="none" stroke="#333" stroke-width="2">
                            <animate attributeName="points" values="40,140 90,110 140,130 190,100 240,140; 40,130 90,120 140,110 190,140 240,120; 40,140 90,110 140,130 190,100 240,140" dur="3s" repeatCount="indefinite" />
                        </polyline>
                    </svg>
                </div>
                <div className={styles.card}>
                    <h3>{t('thoroughInspection')}</h3>

                    <MagnifierEffect />

                    {/* <svg width="300px" height="200px" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <rect x="10" y="20" width="280" height="160" rx="15" ry="15" fill="#EAEDED" stroke="#333" stroke-width="2" />
                        <rect x="10" y="180" width="280" height="10" fill="#333" />
                        <circle cx="100" cy="100" r="30" fill="none" stroke="#3498DB" stroke-width="4">
                            <animate attributeName="stroke-width" values="4;6;4" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <line x1="120" y1="120" x2="150" y2="150" stroke="#3498DB" stroke-width="4">
                            <animate attributeName="x2" values="150;170;150" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="y2" values="150;170;150" dur="2s" repeatCount="indefinite" />
                        </line>
                    </svg> */}
                </div>
                <div className={styles.card}>
                    <h3>{t('templateGeneration')}</h3>


                        <svg width="400" height="300" viewBox="0 0 400 300">
                        
                        <rect x="50" y="50" width="300" height="200" fill="#f0f0f0" stroke="#ccc" />
                        
                        <rect x="70" y="70" width="250" height="30" fill="#fff" />
                        <rect x="70" y="120" width="250" height="30" fill="#fff" />
                        <rect x="70" y="170" width="250" height="30" fill="#fff" />
                        
                        <line x1="70" y1="85" x2="320" y2="85" stroke="blue" stroke-width="2">
                            <animate attributeName="x2" values="320; 70; 320" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="70" y1="135" x2="320" y2="135" stroke="blue" stroke-width="2">
                            <animate attributeName="x2" values="320; 70; 320" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        </line>
                        <line x1="70" y1="185" x2="320" y2="185" stroke="blue" stroke-width="2">
                            <animate attributeName="x2" values="320; 70; 320" dur="2s" repeatCount="indefinite" begin="1s" />
                        </line>
                    </svg> 
                </div>
                <div className={styles.card}>
                    <h3>{t('interactiveReports')}</h3>
                    <svg width="300px" height="200px" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <rect x="10" y="20" width="280" height="160" rx="15" ry="15" fill="#EAEDED" stroke="#333" stroke-width="2" />
                        <rect x="10" y="180" width="280" height="10" fill="#333" />
                        {/* <text x="150" y="15" fill="#333" font-family="Arial" font-size="16" text-anchor="middle">Templates</text> */}
                        <rect x="60" y="50" width="40" height="60" fill="#3498DB">
                            <animate attributeName="x" values="60;70;60" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="y" values="50;60;50" dur="2s" repeatCount="indefinite" />
                        </rect>
                        <rect x="120" y="50" width="40" height="60" fill="#1ABC9C">
                            <animate attributeName="x" values="120;130;120" dur="2s" repeatCount="indefinite" begin="0.5s" />
                            <animate attributeName="y" values="50;60;50" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        </rect>
                        <rect x="180" y="50" width="40" height="60" fill="#2ECC71">
                            <animate attributeName="x" values="180;190;180" dur="2s" repeatCount="indefinite" begin="1s" />
                            <animate attributeName="y" values="50;60;50" dur="2s" repeatCount="indefinite" begin="1s" />
                        </rect>
                    </svg>
                </div>
                <div className={styles.card}>
                    <h3>{t('reportSigning')}</h3>
                    <svg width="300px" height="200px" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="20" width="280" height="160" rx="15" ry="15" fill="#EAEDED" stroke="#333" strokeWidth="2" />
                        <rect x="10" y="180" width="280" height="10" fill="#333" />
                        <path d="M50,150 L90,150 L80,110 L40,110 Z" fill="#3498DB">
                            <animate attributeName="d" values="M50,150 L90,150 L80,110 L40,110 Z; M50,150 L90,150 L80,120 L40,120 Z; M50,150 L90,150 L80,110 L40,110 Z" dur="2s" repeatCount="indefinite" />
                        </path>
                        <line x1="80" y1="110" x2="100" y2="90" stroke="#3498DB" strokeWidth="8">
                            <animate attributeName="x2" values="100;120;100" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="y2" values="90;70;90" dur="2s" repeatCount="indefinite" />
                        </line>
                    </svg>
                </div>
                <div className={styles.card}>
                    <h3>{t('taskCreationTracking')}</h3>
                    <svg width="300px" height="200px" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <rect x="10" y="20" width="280" height="160" rx="15" ry="15" fill="#EAEDED" stroke="#333" stroke-width="2" />
                        <rect x="10" y="180" width="280" height="10" fill="#333" />
                        {/* <text x="150" y="15" fill="#333" font-family="Arial" font-size="16" text-anchor="middle">Calendrier</text> */}
                        <rect x="50" y="50" width="60" height="80" fill="#3498DB">
                            <animate attributeName="height" values="80;100;80" dur="2s" repeatCount="indefinite" />
                        </rect>
                        <line x1="50" y1="80" x2="110" y2="80" stroke="#3498DB" stroke-width="3">
                            <animate attributeName="x2" values="120;140;120" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="50" y1="100" x2="110" y2="100" stroke="#3498DB" stroke-width="3">
                            <animate attributeName="x2" values="120;140;120" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="50" y1="120" x2="110" y2="120" stroke="#3498DB" stroke-width="3">
                            <animate attributeName="x2" values="120;140;110" dur="2s" repeatCount="indefinite" />
                        </line>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default AnimatedCards;
