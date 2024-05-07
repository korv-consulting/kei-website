import styles from "@/styles/app.module.css";
import { FcInspection,FcCalendar } from "react-icons/fc";
import { FaNetworkWired,FaRegFolderOpen } from "react-icons/fa";
import { PiFilePdfDuotone } from "react-icons/pi";
import { FcAdvertising } from "react-icons/fc";

const Feature = () => {
    return (
        <div>


            <section id="features" className={`py-5 ${styles.sectionFeature}`}>


                <div className={`container ${styles.section_title}`} data-aos="fade-up">
                    <h2>Fonctionalités</h2>
                    <p>
                        KEI est une application innovante multi plateforme conçue pour l'industrie du bâtiment,
                        résidentielle, hôtelière et locative, pour des rapports d'inspection détaillés et professionnels.
                    </p>
                </div>


                <div className="container">

                    <div className="row gy-4 mb-5 justify-content-center align-item-center">

                        <div className={` card col-xl-4 col-md-6 d-flex me-4 ${styles.featureCard} ` } data-aos="fade-up" data-aos-delay="100" >
                            <div className="service-item position-relative">
                                <div className="d-flex justify-content-center align-item-center my-2" >
                                    <FcInspection className={styles.featureIcon} />
                                </div>

                                <h4><a href="" className={styles.titleCard} >Réalisation des états des lieux</a></h4>
                                <p>
                                    Établir des constats d’états des lieux d’entrées et de sorties avec prise de photo
                                </p>
                            </div>
                        </div>

                        <div className={` card col-xl-4 col-md-6 d-flex me-4 ${styles.featureCard} ` } data-aos="fade-up" data-aos-delay="100" >
                            <div className="service-item position-relative">
                                <div className="d-flex justify-content-center align-item-center my-2" >
                                    <FcCalendar className={styles.featureIcon} />
                                </div>

                                <h4><a href="" className={styles.titleCard}>Planification des états des lieux</a></h4>

                                <p>
                                    Planifier et réaliser des constats d’états des lieux à distance via un appel vidéo
                                </p>
                            </div>
                        </div>

                        <div className={` card col-xl-4 col-md-6 d-flex me-4 ${styles.featureCard} ` } data-aos="fade-up" data-aos-delay="100" >
                            <div className="service-item position-relative">
                                <div className="d-flex justify-content-center align-item-center my-2" >
                                    <FaRegFolderOpen className={styles.featureIcon} />
                                </div>
                                <h4><a href="" className={styles.titleCard}>Espace de travail</a></h4>
                                <p>
                                    Créer des espaces de travail pour faciliter la gestion des tâches (états des lieux,
                                    déclaration d’incidents, inspection et intervention
                                </p>
                            </div>
                        </div>

                        <div className={` card col-xl-4 col-md-6 d-flex me-4 ${styles.featureCard} ` } data-aos="fade-up" data-aos-delay="100" >
                            <div className="service-item position-relative">
                                <div className="d-flex justify-content-center align-item-center my-2" >
                                    <FcAdvertising className={styles.featureIcon} />
                                </div>
                                <h4><a href="" className={styles.titleCard}>Déclaration d'incidents</a></h4>
                                <p>
                                    Enregistrer un nombre illimité d’incidents et défauts directement dans l’application
                                </p>
                            </div>
                        </div>
                        <div className={` card col-xl-4 col-md-6 d-flex me-4 ${styles.featureCard} ` } data-aos="fade-up" data-aos-delay="100" >
                            <div className="service-item position-relative">
                                <div className="d-flex justify-content-center align-item-center my-2" >
                                    <FaNetworkWired className={styles.featureIcon} />
                                </div>
                                <h4><a href="" className={styles.titleCard}>Suivi des tâches</a></h4>
                                <p>
                                    Suivre l’évolution des tâches jusqu’à la clôture
                                </p>
                            </div>
                        </div>
                        <div className={` card col-xl-4 col-md-6 d-flex me-4 ${styles.featureCard} ` } data-aos="fade-up" data-aos-delay="100" >
                            <div className="service-item position-relative">
                                <div className="d-flex justify-content-center align-item-center my-2" >
                                    <PiFilePdfDuotone className={styles.featureIcon} />
                                </div>
                                <h4><a href="" className={styles.titleCard}>Rapports d'incident et d'inspection</a></h4>
                                <p>
                                    Créer, gérer et exporter des rapports d'incident et d'inspection directement depuis
                                    l'application
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Feature;
