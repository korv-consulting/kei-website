import { Button, Col, Container, Image, Row } from "react-bootstrap"
import styles from '@/styles/Footer.module.css'

// #03dac5 : Couleur vert citron
// #def4ff : Background de Nos Offres
// #11467e : Couleur bleu foncé

function Footer() {

    return(
        <>
          {/* <Container fluid className={styles.container}>
            <Row>
              <Col md="4"></Col>
              <Col md="4"></Col>
              <Col md="4" className={`${styles.main_col}`}>
                <Image src='/devices.png' fluid className={styles.devices_img}/>
                <label className={styles.text_app}>
                  L'application KEI est disponible sur toutes les plateformes
                </label>
                <Button size="lg" className={styles.download_btn}>
                  Télécharger
                </Button>
                <Row className={`${styles.store_row}`}>
                  <Col className={`${styles.store_col} ${styles.align_left}`}>
                      <Button className={styles.store_btn}>
                        <Row>
                          <Col md="3" className={styles.col_store_img}>
                            <Image src='/app-store.png' className={styles.store_img}/>
                          </Col>
                          <Col md="6" className={styles.col_store_name}>
                            <span className={styles.store_title}>Télécharger sur </span><br/>
                            <label className={styles.store_name}>App Store</label>
                          </Col>
                        </Row>
                      </Button>
                  </Col>
                  <Col className={`${styles.store_col} ${styles.align_righ}`}>
                    <Button className={styles.store_btn}>
                      <Row>
                        <Col md="3" className={styles.col_store_img}>
                          <Image src='/playstore.png' className={styles.store_img} />
                        </Col>
                        <Col md="6" className={styles.col_store_name}>
                          <span className={styles.store_title}>Télécharger sur </span><br/>
                          <label className={styles.store_name}>Playstore</label>
                        </Col>
                      </Row>
                      </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container> */}

          <div className={`container-fluid pt-2 ${styles.container}`}>
            <footer className="py-5">

              <div className="row">

                <div className="col-6 col-md-2 mb-3">
                  {/* First Column */}
                </div>

                <div className="col-6 col-md-2 mb-3">
                  {/* Second Column */}
                </div>

                <div className="col-6 col-md-2 mb-3">
                 {/* Third Column */}
                </div>

                <div className="col-md-5 offset-md-1 mb-2">

                    <div className="d-flex justify-content-center">
                      <Image src="/devices.png" className="w-25"/>
                    </div>


                    <p className={`text-center mt-2 mb-3 h6`}>
                      L'application KEI est disponible sur toutes les plateformes
                    </p>

                    <div className="d-flex  justify-content-center my-2">
                      <Button className={`py-3 w-50 ${styles.download_btn}`}>Télécharger</Button>
                    </div>
                    
                    <div className="d-flex flex-sm-row justify-content-center gap-2">
                      <Button className={`py-1 w-25 ${styles.store_btn}`}>
                        <div className={`row`}>
                          <div className={`col-4 d-flex justify-content-center`}>
                            <Image src='/app-store.png' className={`my-2`}/>
                          </div>
                          <div className={`col-8`}>
                            <span className={`text-center text-nowrap ${styles.store_title}`}>
                              Télécharger sur 
                            </span><br/>
                            <label className={`text-nowrap text-center ${styles.store_name}`}>App Store</label>
                          </div>
                        </div>
                      </Button>

                      <Button className={`py-1 w-25 ${styles.store_btn}`}>
                        <div className={`row`}>
                          <div className={`col-4 d-flex justify-content-center`}>
                            <Image src='/playstore.png' className={`my-2`}/>
                          </div>
                          <div className={`col-8`}>
                            <span className={`text-center text-nowrap ${styles.store_title}`}>
                              Télécharger sur 
                            </span><br/>
                            <label className={`text-center text-nowrap ${styles.store_name}`}>Playstore</label>
                          </div>
                        </div>
                      </Button>

                    </div>
                </div>

              </div>

              {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3">dddf</li>
                </ul>
              </div> */}
            </footer>

          </div>
        </>
    )
}

export default Footer