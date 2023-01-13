import { Form, Nav, Image, NavDropdown, Navbar, ListGroup, Col, Row } from "react-bootstrap"
import { useState } from "react";
import styles from '@/styles/Language.module.css'
import flag from '/public/logo-kei.png'

function Language() {

    let [showActiveLang, setShowActiveLang] = useState(true);
    let [showListLang, setShowListLang] = useState(false);


    return(
        <Nav className={`justify-content-end ${styles.main}`} >
          <Col className={styles.container}>
            <Row style={{width: '4%' }} onClick={() => { setShowActiveLang(false), setShowListLang(true) }} 
              className={showActiveLang == false ? styles.hidden_active_lang : ''}>
              <Image src="/flags/France.png" className={styles.selected_lang} alt="France Flag"/>
            </Row>
            <Row>
              <ListGroup className={`${styles.list_lang} ${showListLang == false ? styles.hidden_list_lang : ''}`} >
                <ListGroup.Item action onClick={() => { setShowListLang(false), setShowActiveLang(true) }} 
                  className={styles.lang}>
                  <Image src="/flags/France.png" className={styles.flag} alt="France Flag"/>
                </ListGroup.Item>
                <ListGroup.Item action className={styles.lang}>
                  <Image src="/flags/UK.png" className={styles.flag} alt="UK Flag"/>
                </ListGroup.Item>
                <ListGroup.Item action className={styles.lang}>
                  <Image src="/flags/Spain.png" className={styles.flag} alt="Spain Flag"/>
                </ListGroup.Item>
                <ListGroup.Item action className={styles.lang}>
                  <Image src="/flags/Germany.png" className={styles.flag} alt="Germany Flag"/>
                </ListGroup.Item>
                <ListGroup.Item action className={styles.lang}>
                  <Image src="/flags/Italy.png" className={styles.flag} alt="Italy Flag"/>
                </ListGroup.Item>
                <ListGroup.Item action className={styles.lang}>
                  <Image src="/flags/Japan.png" className={styles.flag} alt="Japan Flag"/>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>

          {/* <NavDropdown className={styles.dropdown_toggle}  style={{ backgroundImage: "url('/flags/Spain.png')", width: '2%', backgroundColor: 'transparent' }} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4" className={styles.lang}>
                <Image src="/flags/France.png" width="30%" rounded alt="France Flag"/>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                <Image src="/flags/UK.png" width="30%" rounded alt="UK Flag"/>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                <Image src="/flags/Spain.png" width="30%" rounded alt="Spain Flag"/>
              </NavDropdown.Item>
          </NavDropdown> */}

        {/* <Form.Select className={styles.container}>
          <option className={styles.lang}>FR  </option>
           <Image src="/flags/France.png" width="3%" height="3%" roundedCircle alt="France Flag"/>
          <option>EN</option>
          <option>ES</option>
          <option>DE</option>
      </Form.Select> */}
        </Nav>
    )
}

export default Language