import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Offer.module.css"

function Offer(){
    return (
    <Container fluid className={styles.main}>
      <Row className={styles.hr_bar}>
          <Col></Col>
      </Row>
      <Row className={styles.first_row}>
        <Col>

        </Col>
      </Row>
      <Row className={styles.second_row}>
        
      </Row>
    </Container>
    )
}

export default Offer