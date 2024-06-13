

// ///FeatureSection


// import style from "@/styles/app.module.css";
// import React from 'react';
// import styles from '@/styles/features/FeatureSection.module.css';


// const FeatureSection = () => {



//     return (
//         <section className={styles.featuresSection}>
//             <div className="container">
//                 <div className="row">
//                     <div className={`col-12 features-title container ${style.section_title}`}>

//                         <h2>Nos Fonctionnalités Principales</h2>
//                         <p className='text-dark'> KEI est une application innovante multi plateforme conçue pour l'industrie du bâtiment,
//                             résidentielle, hôtelière et locative, pour des rapports d'inspection détaillés et professionnels.

//                             Découvrez les puissantes fonctionnalités que nous offrons pour simplifier votre flux de travail.</p>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className={styles.featureCard}>
//                             <img src="/tools/planification.jpg" alt="Gestion des Tâches" className={styles.featureImage} />
//                             <div className={styles.featureTitle}>Suivis des Tâches</div>
//                             <div className={styles.featureDescription}>
//                                 Gérez efficacement vos tâches,suivez leur avancement jusqu'à la clôture et restez organisé grâce à notre système intuitif de gestion des tâches.
//                             </div>
//                             <div className={styles.overlay}>
//                                 <div>
//                                     <p>Des outils puissants pour organiser et prioriser vos tâches efficacement.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className={styles.featureCard}>
//                             <img src="/tools/workspace.jpg" alt="Suivi des Progrès" className={styles.featureImage} />
//                             <div className={styles.featureTitle}>Espace de travail</div>
//                             <div className={styles.featureDescription}>
//                                 Créer des espaces de travail pour faciliter la gestion des tâches (états des lieux,
//                                 déclaration d’incidents, inspection et intervention).
//                             </div>
//                             <div className={styles.overlay}>
//                                 <div>
//                                     <p>Creez vos espaces de travail et ayez le contrôle sur tout</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className={styles.featureCard}>

//                             <img src="/tools/declaration.jpg" alt="Déclaration d'Incidents" className={styles.featureImage} />
//                             <div className={styles.featureTitle}>Déclaration d'Incidents</div>
//                             <div className={styles.featureDescription}>
//                                 Signalez et enregistrer un nombre illimité d’incidents et défauts directement dans l’application
//                                 assurant ainsi un environnement de travail plus sûr.
//                             </div>
//                             <div className={styles.overlay}>
//                                 <div>
//                                     <p>Signalez rapidement les incidents pour une résolution efficace.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <img src="/features/carrying-out-inventory.png" alt="Inspections Détaillées" className={styles.featureImage} />
//                         <div className={styles.featureTitle}>Realisation des etats de lieux </div>
//                         <div className={styles.featureDescription}>
//                             Réalisez des inspections approfondie et etablir des constats d’états des lieux d’entrées et de sorties avec prise de photo
//                             .
//                         </div>
//                         <div className={styles.overlay}>
//                             <div>
//                                 <p>Capturez chaque detail,photographiez et constatez.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className={styles.featureCard}>
//                         <img src="/tools/plan.jpg" alt="Planification" className={styles.featureImage} />
//                         <div className={styles.featureTitle}>Planification </div>
//                         <div className={styles.featureDescription}>
//                             Planifiez et réaliser vos inspections à distance via un appel vidéo facilement grâce à nos fonctionnalités robustes de planification.
//                         </div>
//                         <div className={styles.overlay}>
//                             <div>
//                                 <p>Planifiez et gérez vos inspections en toute simplicité.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className={styles.featureCard}>
//                         <img src="/tools/rapport.jpg" alt="Exportation de Rapports" className={styles.featureImage} />
//                         <div className={styles.featureTitle}>Exportation de Rapports</div>
//                         <div className={styles.featureDescription}>
//                             Exportez facilement vos rapports d'incident et d'inspection dans divers formats pour une analyse et un partage ultérieurs,directement depuis  l'application.

//                         </div>
//                         <div className={styles.overlay}>
//                             <div>
//                                 <p>Exportez vos rapports dans différents formats pour une analyse facile.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
// </section>
    
//     );
// };

// export default FeatureSection;

















































import React from 'react';
import styles from '@/styles/features/FeatureSection.module.css';
import style from "@/styles/app.module.css";

const FeatureSection = () => {
    return (
        <section className={styles.featuresSection}>
            <div className="container">
                <div className="row">
                    <div className={`col-12 features-title container ${style.section_title}`}>
                        <center>
                            <h2>Nos Fonctionnalités Principales</h2>
                        </center>
                        <p className='text-dark'>
                            KEI est une application innovante multi plateforme conçue pour l'industrie du bâtiment,
                            résidentielle, hôtelière et locative, pour des rapports d'inspection détaillés et professionnels.
                            Découvrez les puissantes fonctionnalités que nous offrons pour simplifier votre flux de travail.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {/** Card 1 */}
                    <div className="col-md-4">
                        <div className={styles.featureCard}>
                            <img src="/tools/planification.jpg" alt="Gestion des Tâches" className={styles.featureImage} />
                            <div className={styles.featureTitle}>Suivis des Tâches</div>
                            <div className={styles.featureDescription}>
                                Gérez efficacement vos tâches, suivez leur avancement jusqu'à la clôture et restez organisé grâce à notre système intuitif de gestion des tâches.
                            </div>
                            <div className={styles.overlay}>
                                <div>
                                    <p>Des outils puissants pour organiser et prioriser vos tâches efficacement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** Card 2 */}
                    <div className="col-md-4">
                        <div className={styles.featureCard}>
                            <img src="/tools/workspace.jpg" alt="Suivi des Progrès" className={styles.featureImage} />
                            <div className={styles.featureTitle}>Espace de travail</div>
                            <div className={styles.featureDescription}>
                                Créer des espaces de travail pour faciliter la gestion des tâches (états des lieux, déclaration d’incidents, inspection et intervention).
                            </div>
                            <div className={styles.overlay}>
                                <div>
                                    <p>Créez vos espaces de travail et ayez le contrôle sur tout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** Card 3 */}
                    <div className="col-md-4">
                        <div className={styles.featureCard}>
                            <img src="/tools/declaration.jpg" alt="Déclaration d'Incidents" className={styles.featureImage} />
                            <div className={styles.featureTitle}>Déclaration d'Incidents</div>
                            <div className={styles.featureDescription}>
                                Signalez et enregistrez un nombre illimité d’incidents et défauts directement dans l’application assurant ainsi un environnement de travail plus sûr.
                            </div>
                            <div className={styles.overlay}>
                                <div>
                                    <p>Signalez rapidement les incidents pour une résolution efficace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/** Card 4 */}
                    <div className="col-md-4">
                        <div className={styles.featureCard}>
                            <img src="/features/carrying-out-inventory.png" alt="Inspections Détaillées" className={styles.featureImage} />
                            <div className={styles.featureTitle}>Réalisation des états de lieux</div>
                            <div className={styles.featureDescription}>
                                Réalisez des inspections approfondies et établissez des constats d’états des lieux d’entrées et de sorties avec prise de photo.
                            </div>
                            <div className={styles.overlay}>
                                <div>
                                    <p>Capturez chaque détail, photographiez et constatez.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** Card 5 */}
                    <div className="col-md-4">
                        <div className={styles.featureCard}>
                            <img src="/tools/plan.jpg" alt="Planification" className={styles.featureImage} />
                            <div className={styles.featureTitle}>Planification</div>
                            <div className={styles.featureDescription}>
                                Planifiez et réalisez vos inspections à distance via un appel vidéo facilement grâce à nos fonctionnalités robustes de planification.
                            </div>
                            <div className={styles.overlay}>
                                <div>
                                    <p>Planifiez et gérez vos inspections en toute simplicité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** Card 6 */}
                    <div className="col-md-4">
                        <div className={styles.featureCard}>
                            <img src="/tools/rapport.jpg" alt="Exportation de Rapports" className={styles.featureImage} />
                            <div className={styles.featureTitle}>Exportation de Rapports</div>
                            <div className={styles.featureDescription}>
                                Exportez facilement vos rapports d'incident et d'inspection dans divers formats pour une analyse et un partage ultérieurs, directement depuis l'application.
                            </div>
                            <div className={styles.overlay}>
                                <div>
                                    <p>Exportez vos rapports dans différents formats pour une analyse facile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
