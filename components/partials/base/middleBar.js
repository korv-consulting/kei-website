import { Container, Row, Col } from "react-bootstrap"
import styles from '@/styles/Home.module.css'

function MiddleBar(){
    return (
        <Container fluid>
            <Row>
                <Col className={styles.col_offers}>
                    <div className={styles.btn_offers}>NOS OFFRES</div>
                </Col>
            </Row>
        </Container>
    )
}

export default MiddleBar