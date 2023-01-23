import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Step-two-form-signup.module.css'
import style from '../../../styles/Floating-label.module.css'
import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
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
                <Row>
                    <Col xs={5}></Col>
                    <Col xs={2} className={styles.box_top}>
                        <div>
                            <Image fluid src="logo-kei.png" className={styles.picture} alt="Sky Crappers" />
                        </div>
                        <div className={styles.title}>
                            Souscrire
                        </div>

                    </Col>
                    <Col xs={5}></Col>

                </Row>
                <Row className={styles.row_center}  >
                    <Col xs={2}></Col>
                    <Col xs={8} className={styles.box_center} >
                        <div className={styles.box_flex}>
                            <div className={styles.box_left} >
                                <input type="text" id='username' placeholder='Entrer votre nom' className={`form-control ${style.input_text}`} required name="name"
                                    title=" Veuillez saisir votre nom"
                                />
                                <label htmlFor='username' id='uname' className={style.label}>Nom</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre nom
                                </span>
                            </div>
                            <div>
                                <input type="text" id='username' placeholder='Entrer votre Prénom' className={`form-control ${style.input_text}`} required name="name"
                                    title=" Veuillez saisir votre prénom"
                                />
                                <label htmlFor='username' id='uname' className={style.label}>Prénom</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre Prénom
                                </span>
                            </div>
                        </div>
                        <div>
                            <input type="email" id='mail' placeholder='example@gmail.com' className={`form-control ${style.input_text}`} required name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="L'E-Mail doit contenir au moins le caractere @"
                            />
                            <label htmlFor='mail' id='umail' className={style.label}>E-MAIL</label>
                            <span id="email" className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez saisir votre E-MAIL
                            </span>
                        </div>
                        <div className={styles.box_help}>
                            <input type="text" id='tel' placeholder='TEL' className={`form-control ${style.input_text_simple}`} name="tel"
                                title="Veuillez saisir votre numéro de téléphone"
                            />
                            <label htmlFor='tel' className={style.label}>Téléphone</label>

                        </div>

                        <div className={styles.box_select} >
                            <Form.Select size="lg" className={styles.select} aria-label="Default select example">
                                <option className={styles.hidden} > Choix de l'offre tarifaire</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <div className={styles.container_select} >  </div>

                        </div>

                    </Col>
                    <Col xs={2}></Col>

                </Row>
                <Row>
                    <Col ></Col>
                    <Col xs={4} className={styles.box_bottom} >
                        <div className={styles.box_button}>
                            <div className={styles.btn_left} onClick={() => { preview(2) }} >
                                <BsArrowLeft className={styles.icon} />
                                <span className={styles.txt_hidded} >Précédent</span>

                            </div>
                            <div className={styles.btn_right} onClick={() => { next(2) }} >
                                <BsArrowRight className={styles.icon} />
                                <span className={styles.txt_hidded} >Suivant</span>
                            </div>

                        </div>
                        <div className={styles.txt} >
                            <span className={styles.txt_blue} >Vous avez deja un compte ? </span>
                            <span className={styles.txt_green}>
                                Connexion
                            </span>
                        </div>


                    </Col>
                    <Col></Col>

                </Row>

            </div>
        </form>

    )
}

export default StepTwoFormSignup