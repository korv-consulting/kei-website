import { Container, Row, Col, Card, Button, Image, Carousel } from "react-bootstrap";
import styles from "@/styles/Offer.module.css"
import MiddleBar from "./middleBar";

function Offer(){

    return (
    <Container fluid className={styles.main} id={`offers`}>

      {/* <Row className={styles.hr_bar}/> */}
      <MiddleBar/>
      <Row className={styles.first_row}/>

      <Row className={styles.second_row}>
        <Row className={styles.row_card}>
          <Col md="4" className={styles.col_card}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.title}>PRO</Card.Title>
                <div className={styles.hr_card}/>

                <Card.Text className={styles.description}>
                  petite description à propos de cette offre de manière brève
                </Card.Text>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 1</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 2</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 3</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 4</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 5</label>
                  </Col>
                </Row>
                
                <Button className={styles.btn_subscription}>SOUSCRIRE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className={styles.col_card}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.title}>PRO</Card.Title>
                <div className={styles.hr_card}/>

                <Card.Text className={styles.description}>
                  petite description à propos de cette offre de manière brève
                </Card.Text>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 1</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 2</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 3</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 4</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 5</label>
                  </Col>
                </Row>
                
                <Button className={styles.btn_subscription}>SOUSCRIRE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" className={styles.col_card}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.title}>PRO</Card.Title>
                <div className={styles.hr_card}/>

                <Card.Text className={styles.description}>
                  petite description à propos de cette offre de manière brève
                </Card.Text>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 1</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 2</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 3</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 4</label>
                  </Col>
                </Row>

                <Row className={styles.row_detail}>
                  <Col md="3" className={styles.col_checkbox}>
                    <Image src="/checkbox.svg" className={styles.checkbox}/>
                  </Col>
                  <Col className={styles.col_detail}>
                    <label className={styles.detail}>Information 5</label>
                  </Col>
                </Row>
                
                <Button className={styles.btn_subscription}>SOUSCRIRE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className={styles.row_contact} id="contact">
        <h1 className={styles.contact}>CONTACT US</h1>
      </Row>
    </Container>
    )
}

export default Offer