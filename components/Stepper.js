
import styles from '../styles/Stepper.module.css'
import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"

function Stepper({ filled, added, active, reduced }) {
  return (
    <div className={styles.main}> 

      <Container className={styles.box_container_number} >
        <Row>
          <Col sm={4} ></Col>
          <Col sm={4} className={styles.box_number}>
            <div id="4" className={active == 1 ? styles.number_active : styles.number} >1 </div>
            <div id="1" className={styles.linear} ></div>

            <div id="5" className={active == 2 ? styles.number_active : styles.number} >2 </div>
            <div id="2" className={styles.linear} ></div>

            <div id="6" className={active == 3 ? styles.number_active : styles.number} >3</div>
            <div id="3" className={styles.linear} ></div>

            <div id="7" className={active == 4 ? styles.number_active : styles.number} >4 </div>

          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>


      <Container className={styles.box_progress} >
        <Row>
          <Col sm={4} ></Col>
          <Col sm={4} className={styles.col_progress}>
            <div className={styles.progress} >
              <div className={styles.progress_bar} style={{ width: `${reduced}%` }} > 
              </div>
            </div>
            <div className={styles.box_stepper}>


              <div style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "#03DAC5",
                transition: "ease-in-out width 0.3s",
                marginLeft: "1%",
                transitionDuration: "0.5s",
                borderRadius: "500px 500px 500px 500px",
                maxWidth: "100vw"

              }}>
              </div>
              <div style={{
                border: "1% solid #2DB6FE",
                backgroundColor: "#DEF4FF",
                transition: "ease-in-out 0.3s",
                borderRadius: "100%",
                marginLeft: "0.5%",
                width: "18px",
                height: "18px",
                zIndex: "1",
                marginTop: "-3%",
                transitionDuration: "0.5s",
                transform: `translate(${added}%, 0%)`,
                maxWidth: "100vw",
                maxHeight: "100vw"


              }}>

              </div>

            </div>

          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>


    </div>


  )
}

export default Stepper
