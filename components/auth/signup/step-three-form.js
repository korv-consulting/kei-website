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
           

                <p  className={`text-center mt-4 `} >
                        <Image fluid src="logo-kei.png" className={`${styles.picture}`}   alt="Sky Crappers" />
                        <h3 className={` ${styles.title}`} >
                            Souscrire
                        </h3>

                </p>
                    
                <div className={styles.row_center}  >
                       
                        <div  className={`mx-5 ${styles.box_adress}`} >
                            <input type="adress" id='adress' placeholder='BP: 237' className={`form-control ${style.input_text}`} required name="adress"
                                title="Adresse"
                            />
                            <label htmlFor='adress' id='uadress' className={style.label}>Adresse</label>
                            <span id="adress" className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez saisir votre Adresse
                            </span>
                        </div>
                        <div className={`mx-5 ${styles.box_flex}`}>
                            <div className={styles.box_left} >
                                <input type="text" id='city' placeholder='Entrer votre ville' className={`form-control ${style.input_text_simple}`}  name="city"
                                    title=" Veuillez saisir votre ville"
                                />
                                <label htmlFor='city' id='city' className={style.label}>Ville</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre ville
                                </span>
                            </div>
                            <div className={styles.box_right}>
                                <input type="text" id='country' placeholder='Entrer votre Pays' className={`form-control ${style.input_text}`} required name="country"
                                    title=" Veuillez saisir votre Pays"
                                />
                                <label htmlFor='country' id='uname' className={style.label}>Pays</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre Pays
                                </span>
                            </div>
                        </div>
                      


                </div>
               
                <div  className={`m-auto ${styles.box_bottom}`} >
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
                    <Row className={`mx-auto mb-5 text-center ${styles.txt}`} >
                        <Col xs={12} lg={7} className={styles.txt_blue} >Vous avez deja un compte ? </Col>
                        <Col lg={5} className={styles.txt_green}>
                            Connexion
                        </Col>
                    </Row>


                </div>
              

            </div>
        </form>

    )
}

export default StepThreeFormSignup