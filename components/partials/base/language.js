import { Form, Nav, Image, NavDropdown, Navbar, ListGroup, Col, Row, Button, Container } from "react-bootstrap"
import { useState } from "react";
import styles from '@/styles/Language.module.css'
import flag from '/public/logo-kei.png'

function Language() {

    const [showActiveLang, setShowActiveLang] = useState(true);

    const [showListLang, setShowListLang] = useState(false);

    const [activeLang, setActiveLang] = useState({"name": "Fr", "url": "/flags/France.png"});

    const handleClickActiveLang = () => {

      // Set active language to false
      setShowActiveLang(false)

      // Set the list of languages to true
      setShowListLang(true)
    };

  const changeActiveLang = () => {
    
  }

  const handleClickListLang = () => {

    // Set the list of languages to false
    setShowListLang(false)

    // Set the active language to true
    setShowActiveLang(true)
  };


    return(
        <Nav className={`${styles.main}`}>
          <Col className={styles.container}>
            <Row onClick={ handleClickActiveLang } 
              className={`${styles.active_lang} ${showActiveLang == false ? styles.hidden_active_lang : ''}`}>
              <Image src={activeLang.url} className={styles.selected_lang} alt="France Flag"/>
            </Row>
            <Row>
              <ListGroup className={`${styles.list_lang} ${showListLang == false ? styles.hidden_list_lang : ''}`} >
               <ListGroup.Item action onClick={ () => { setActiveLang({"name": "Fr", "url": "/flags/France.png"}), 
                handleClickListLang() }} className={`${styles.lang}`}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'Fr'? 
                        styles.dark_blue : styles.dark_blue_hover}`}>
                    <Image src="/flags/France.png" className={styles.flag} alt="France Flag"/> Fr
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "En", "url": "/flags/UK.png"}), 
                  handleClickListLang() }} className={`${styles.lang}`}>
                    <Button className={`${styles.btn_lang} ${activeLang.name == 'En'? 
                        styles.dark_blue : styles.dark_blue_hover}`}>
                      <Image src="/flags/UK.png" className={styles.flag} alt="UK Flag"/> En
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "Es", "url": "/flags/Spain.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'Es'? 
                        styles.dark_red : styles.dark_red_hover}`}>
                    <Image src="/flags/Spain.png" className={styles.flag} alt="Spain Flag"/> Es
                   </Button>
                </ListGroup.Item>
                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "De", "url": "/flags/Germany.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'De'? 
                        styles.dark_yellow : styles.dark_yellow_hover}`}>
                    <Image src="/flags/Germany.png" className={styles.flag} alt="Germany Flag"/> De
                   </Button>
                </ListGroup.Item>
                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "It", "url": "/flags/Italy.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'It'? 
                        styles.green : styles.green_hover}`}>
                    <Image src="/flags/Italy.png" className={styles.flag} alt="Italy Flag"/> It
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "Ja", "url": "/flags/Japan.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'Ja'? 
                        styles.dark_red : styles.dark_red_hover}`}>
                    <Image src="/flags/Japan.png" className={styles.flag} alt="Japan Flag"/> Ja
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
        </Nav>
    )
}

export default Language