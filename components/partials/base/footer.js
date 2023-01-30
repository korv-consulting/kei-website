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
                      <Row>
                        <Col md="2" className={styles.col_store_img}>
                          <Image src='/app-store.png' className={styles.store_img}/>
                        </Col>
                        <Col md="8" className={styles.col_store_name}>
                          <span className={styles.store_title}>Télécharger sur </span>
                          <label className={styles.store_name}>App Store</label>
                        </Col>
                      </Row>
                    </Button>
                </Col>
                <Col className={styles.store_col}>
                  <Button className={styles.store_btn}>
                    <Row>
                      <Col md="2" className={styles.col_store_img}>
                        <Image src='/playstore.png' className={styles.store_img} />
                      </Col>
                      <Col md="8" className={styles.col_store_name}>
                        <span className={styles.store_title}>Télécharger sur </span>
                        <label className={styles.store_name}>Playstore</label>
                      </Col>
                    </Row>
                    </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    )
}

export default Footer