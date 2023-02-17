import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/About.module.css"

function About() {

    return(
        <>
            <Container fluid className={styles.main} id="home">
                <Image fluid src="/skyscraper.png" className={styles.background} alt="Sky Crappers"/>
                <Row className={styles.global_row} id="about">
                    <Col md="8" style={{ alignContent: 'center', alignItems: 'center' }}>
                        <Row className={styles.title}>
                            Vous avez les clefs pour améliorer votre
                        </Row>
                        <Row>
                            <div className={styles.btn_rent_mnt}>
                                Gestion Locative
                            </div>
                        </Row>
                        <Row>
                            <p className={styles.description}>
                                Effectuez vos Etats des lieux sur mobile, tablette ou pc en vous appuyant sur les outils digitaux de KEI, nécessaires aux professionnels de la gestion et aux particuliers pour une meilleure relation client tout au long de la location immobilière.
                            </p>
                        </Row>
                        <Row>
                            <Button className={styles.btn_download} id="btn_download">
                                Télécharger l'Application KEI
                                <Image src='/arrow.png' className={styles.img_arrow} />
                                <Image src='/u_icon.png' className={styles.img_u_icon} />
                            </Button>
                        </Row>
                        <Row className={styles.row_demo}>
                            <Button className={styles.btn_watch_demo} id="btn_watch_demo">
                                Regarder une DEMO ?
                            </Button>
                            <Button className={styles.btn_play} id="btn_play">
                                <Image src='/play.png' className={styles.img_play}/>
                            </Button>
                        </Row>
                    </Col>
                    <Col md="6" className={`d-flex ${styles.col_image}`}>
                        <Image src='/agent.png' className={styles.image} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About