import { Button, Col, Container, Image, Row } from "react-bootstrap"
import styles from '@/styles/Footer.module.css'

// #03dac5 : Couleur vert citron
// #def4ff : Background de Nos Offres
// #11467e : Couleur bleu foncé

function Footer() {
    return(
        <Container fluid className={styles.container}>
          <Row>
            <Col md="4"></Col>
            <Col md="4"></Col>
            <Col md="3" className={styles.main_col}>
              <Image src='/devices.png' fluid className={styles.devices_img}/>
              <label className={styles.text_app}>
                L'application KEI est disponible sur toutes les plateformes
              </label>
              <Button size="lg" className={styles.download_btn}>
                Télécharger
              </Button>
              <Row>
                <Col className={styles.store_col}>
                    <Button className={styles.store_btn}>
                      <Image src='/app-store.png' className={styles.store_img}/> Télécharger sur App Store
                    </Button>
                </Col>
                <Col className={styles.store_col}>
                  <Button className={styles.store_btn}>
                      <Image src='/playstore.png' className={styles.store_img} /> Télécharger sur Playstore
                    </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    )
}

export default Footer