import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Step-two-form-signup.module.css'
import style from '../../../styles/Floating-label.module.css'
import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Form from 'react-bootstrap/Form';


function StepTwoFormSignup({ next, preview }) {

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };
 
    const handleSelect = (event) => {
        let label_select = document.getElementsByClassName(styles.label_select)
        label_select.style.color = "red"


    };



    return (  

        <form className={styles.form} id="form" method="post" noValidate onSubmit={onSubmit}>
            <div className={styles.container}>
               
                    <p  className={`text-center mt-4`} >
                        <Image fluid src="logo-kei.png" className={`${styles.picture}`}   alt="Sky Crappers" />
                        <h3 className={` ${styles.title}`} >
                            Souscrire
                        </h3>

                    </p>
                    

              
                <Row className={styles.row_center}  >
                    <Col xs={2}></Col>
                    <Col xs={8}  >
                        <Row className={styles.box_flex}>
                            <Col xs={12} lg={6} className={styles.box_left} >
                                <input type="text" id='username' placeholder='Entrer votre nom' className={`form-control  ${style.input_text}`} required name="name"
                                    title=" Veuillez saisir votre nom"
                                />
                                <label htmlFor='username' id='uname' className={style.label}>Nom</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre nom
                                </span>
                            </Col> 
                            <Col lg={6} className={styles.box_right}>
                                <input type="text" id='username' placeholder='Entrer votre Prénom' className={`form-control ${style.input_text}`} required name="name"
                                    title=" Veuillez saisir votre prénom"
                                />
                                <label htmlFor='username' id='uname' className={style.label}>Prénom</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre Prénom
                                </span>
                            </Col>
                        </Row>
                        <div >
                            <input type="email" id='mail' placeholder='example@gmail.com' className={`form-control pb-3 ${style.input_text}`} required name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="L'E-Mail doit contenir au moins le caractere @"
                            />
                            <label htmlFor='mail' id='umail' className={style.label}>E-MAIL</label>
                            <span id="email" className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez saisir votre E-MAIL
                            </span>
                        </div>
                        <div className={styles.box_phone}>
                            <input type="text" id='tel' placeholder='TEL' className={`form-control ${style.input_text_simple}`} name="tel"
                                title="Veuillez saisir votre numéro de téléphone"
                            />
                            <label htmlFor='tel' className={style.label}>Téléphone</label>

                        </div>

                        <div className={styles.box_select} >
                            <Form.Select size="lg" className={styles.select} aria-label="Default select example">
                                <option > Choix de l'offre tarifaire</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                        </div>

                    </Col>
                    <Col xs={2}></Col>

                </Row>
                <Row>
                    <Col ></Col>
                    <Col xs={4} className={styles.box_bottom} >
                        <ButtonGroup className={styles.box_button}>
                            <div className={styles.btn_left} onClick={() => { preview(2) }} >
                                <BsArrowLeft className={styles.icon} />
                                <span className={styles.txt_hidded} >Précédent</span>

                            </div>
                            <div className={styles.btn_right} onClick={() => { next(2) }} >
                                <BsArrowRight className={styles.icon} />
                                <span className={styles.txt_hidded} >Suivant</span>
                            </div>

                        </ButtonGroup>
                        <Row className={`mx-auto text-center ${styles.txt}`}  >
                            <Col xs={12} lg={6}  className={styles.txt_blue} >Vous avez deja un compte ? </Col>
                            <Col  lg={6}  className={styles.txt_green}>
                                Connexion
                            </Col>
                        </Row>


                    </Col>
                    <Col></Col>

                </Row>

            </div>
        </form>

    )
}

export default StepTwoFormSignup