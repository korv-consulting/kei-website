import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Step-three-form-signup.module.css'
import style from '../../../styles/Floating-label.module.css'
import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


function StepThreeFormSignup({ next, preview }) {

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
                       
                        <div className={styles.box_adress}>
                            <input type="adress" id='adress' placeholder='BP: 237' className={`form-control ${style.input_text}`} required name="adress"
                                title="Adresse"
                            />
                            <label htmlFor='adress' id='uadress' className={style.label}>Adresse</label>
                            <span id="adress" className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez saisir votre Adresse
                            </span>
                        </div>
                        <div className={styles.box_flex}>
                            <div className={styles.box_left} >
                                <input type="text" id='city' placeholder='Entrer votre ville' className={`form-control ${style.input_text_simple}`}  name="city"
                                    title=" Veuillez saisir votre ville"
                                />
                                <label htmlFor='city' id='city' className={style.label}>Ville</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre ville
                                </span>
                            </div>
                            <div>
                                <input type="text" id='country' placeholder='Entrer votre Pays' className={`form-control ${style.input_text}`} required name="country"
                                    title=" Veuillez saisir votre Pays"
                                />
                                <label htmlFor='country' id='uname' className={style.label}>Pays</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre Pays
                                </span>
                            </div>
                        </div>
                      

                    </Col>
                    <Col xs={2}></Col>

                </Row>
                <Row>
                    <Col ></Col>
                    <Col xs={4} className={styles.box_bottom} >
                        <div className={styles.box_button}>
                            <div className={styles.btn_left} onClick={() => { preview(3) }} >
                                <BsArrowLeft className={styles.icon} />
                                <span className={styles.txt_hidded} >Précédent</span>

                            </div>
                            <div className={styles.btn_right} onClick={() => { next(3) }} >
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

export default StepThreeFormSignup