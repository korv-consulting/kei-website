import { Form, Nav, Image, NavDropdown, Navbar, ListGroup, Col, Row, Button, Container } from "react-bootstrap"
import { useState } from "react";
import styles from '@/styles/Language.module.css'
import flag from '/public/logo-kei.png'

function Language() {

    const [showActiveLang, setShowActiveLang] = useState(true);

    const [showListLang, setShowListLang] = useState(false);

    const [activeLang, setActiveLang] = useState({"name": "FR", "url": "/flags/fr.png"});

    // console.log(window.innerWidth)
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
            
            <Row onClick={ handleClickActiveLang } className={`${styles.row_selected_lang} 
              ${showActiveLang == false ? styles.hidden_active_lang : ''}`}>
              <Image src={activeLang.url} className={styles.selected_lang} alt={activeLang.name}/>
            </Row>

            <Row>
              <ListGroup className={`${styles.list_lang} ${ showListLang == false ? styles.hidden_list_lang : ''}`} >
               
               <ListGroup.Item action onClick={ () => { setActiveLang({"name": "FR", "url": "/flags/fr.png"}), 
                  handleClickListLang() }} className={`${styles.lang}`}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'FR'? 
                        styles.dark_blue : styles.dark_blue_hover}`}>
                    <Image src="/flags/fr.png" className={styles.flag} alt="France Flag"/>
                    <label className={styles.lang_name}>FR</label>
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "EN", "url": "/flags/uk.png"}), 
                  handleClickListLang() }} className={`${styles.lang}`}>
                    <Button className={`${styles.btn_lang} ${activeLang.name == 'EN'? 
                        styles.dark_blue : styles.dark_blue_hover}`}>
                      <Image src="/flags/uk.png" className={styles.flag} alt="UK Flag"/>
                      <label className={styles.lang_name}>EN</label>
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "ES", "url": "/flags/spain.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'ES'? 
                        styles.dark_red : styles.dark_red_hover}`}>
                    <Image src="/flags/spain.png" className={styles.flag} alt="Spain Flag"/>
                    <label className={styles.lang_name}>ES</label>
                   </Button>
                </ListGroup.Item>
                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "GE", "url": "/flags/germany.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'GE'? 
                        styles.dark_yellow : styles.dark_yellow_hover}`}>
                    <Image src="/flags/germany.png" className={styles.flag} alt="Germany Flag"/>
                    <label className={styles.lang_name}>GE</label>
                   </Button>
                </ListGroup.Item>

                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "IT", "url": "/flags/italy.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'IT'? 
                        styles.green : styles.green_hover}`}>
                    <Image src="/flags/italy.png" className={styles.flag} alt="Italy Flag"/>
                    <label className={styles.lang_name}>IT</label>
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "JA", "url": "/flags/japan.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'JA'? 
                        styles.dark_red : styles.dark_red_hover}`}>
                    <Image src="/flags/japan.png" className={styles.flag} alt="Japan Flag"/>
                    <label className={styles.lang_name}>JA</label>
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item action onClick={ () => { setActiveLang({"name": "JA", "url": "/flags/russia.png"}), 
                  handleClickListLang() }} className={styles.lang}>
                  <Button className={`${styles.btn_lang} ${activeLang.name == 'RU'? 
                         styles.dark_blue : styles.dark_blue_hover}`}>
                    <Image src="/flags/russia.png" className={styles.flag} alt="Russia Flag"/>
                    <label className={styles.lang_name}>RU</label>
                  </Button>
                </ListGroup.Item>

              </ListGroup>
            </Row>
          </Col>
        </Nav>
    )
}

export default Language