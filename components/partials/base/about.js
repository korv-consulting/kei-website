import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/About.module.css"

function About() {

    return(
        <Container fluid className={styles.main}>
            <Row>
                <Col>
                    <Row className={styles.title}>
                        Vous avez les clefs pour améliorer votre
                    </Row>
                    <Row>
                        <Button className={styles.btn}>Gestion Locative</Button>
                    </Row>
                    <Row>
                        <p className={styles.description}>
                            Effectuez vos Etats des lieux sur mobile, tablette ou pc en vous appuyant sur les outils digitaux de KEI, nécessaires aux professionnels de la gestion et aux particuliers pour une meilleure relation client tout au long de la location immobilière.
                        </p>
                    </Row>
                    <Row>
                        <Button className={styles.btn_download}>Télécharger l'Application KEI</Button>
                    </Row>
                    <Row>
                        {/* <ButtonGroup aria-label="Basic example"> */}
                            <Button className={styles.btn_play}>
                                 <Image src='/play.png' />
                            </Button>
                            <Button className={styles.btn_watch_demo}>Regarder une DEMO ?</Button>
                        {/* </ButtonGroup> */}
                    </Row>
                </Col>
                <Col className={`d-flex ${styles.col_image}`}>
                    <Image src='/agent.png' className={styles.image} />
                </Col>
            </Row>
        </Container>
    )
}

export default About