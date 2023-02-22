import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/About.module.css"
import MiddleBar from "./middleBar"

function About() {

    return(
        <>
            <div className={`container-fluid px-4 ${styles.main}`}>
                <Image fluid src="" className={styles.background} alt="Sky Crappers"/>
                <div className={`row ps-5`}>
                    <div className={`col-md-6 ps-5`}>
                        <div className={`row`}>
                            <h1 className={`${styles.title}`}>Vous avez les clefs pour améliorer votre</h1>
                        </div>
                        <div className={`row`}>
                            <div className={styles.btn_rent_mnt}>
                                Gestion Locative
                            </div>
                        </div>
                        <div className={`row`}>
                            <p className={styles.description}>
                                Effectuez vos Etats des lieux sur mobile, tablette ou pc en vous appuyant sur les outils digitaux de KEI, nécessaires aux professionnels de la gestion et aux particuliers pour une meilleure relation client tout au long de la location immobilière.
                            </p>
                        </div>
                        <div className={`row`}>
                            <Button className={styles.btn_download} id="btn_download">
                                Télécharger l'Application KEI
                                <Image src='/arrow.png' className={styles.img_arrow} />
                                <Image src='/u_icon.png' className={styles.img_u_icon} />
                            </Button>
                        </div>
                        <div className={`row ms-2`}>
                            <Button className={styles.btn_watch_demo} id="btn_watch_demo">
                                Regarder une DEMO ?
                            </Button>
                            <Button className={styles.btn_play} id="btn_play">
                                <Image src='/play.png' className={styles.img_play}/>
                            </Button>
                        </div>
                    </div>
                    <div className={`d-flex col-md-6 mt-5`}>
                        <Image src='/agent.png' className={`img-fluid ${styles.image}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About