import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Step-three-company-form-signup.module.css'
import style from '../../../styles/Floating-label.module.css'
import React, { useState, useEffect } from 'react'; 
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Form from 'react-bootstrap/Form';


function StepThreeCompanyFormSignup({ next, preview }) {

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
                    <div className={`mx-5  ${styles.row_center}`}  >
                        <Row >
                            <Col xs={12} lg={6} className={styles.box_left} >
                                <input type="text" id='company' placeholder='Entrer votre nom' className={`form-control ${style.input_text}`} required name="name"
                                    title=" Veuillez saisir le  nom de la société"
                                />
                                <label htmlFor='company'  className={style.label}>Nom société</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir le  nom de la société
                                </span>
                            </Col>
                            <Col className={styles.box_right}>
                                <input type="text" id='company_number' placeholder='Entrer le  numéro de la société' className={`form-control ${style.input_text}`} required name="name"
                                    title=" Veuillez saisir le  numéro de la société"
                                />
                                <label htmlFor='company_number'  className={style.label}>Numéro société</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir le  numéro de la société
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} xlg={6} className={styles.box_left} >
                                <input type="text" id='size' placeholder="Taille société" className={`form-control ${style.input_text}`} required name="name"
                                    title=" Veuillez saisir la taille de la société"
                                />
                                <label htmlFor='size'  className={style.label}>Taille société</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                     Veuillez saisir la taille de la société
                                </span>
                            </Col>
                            <Col  className={styles.box_right}>
                                <input type="text" id='role' placeholder="Role dans l'application" className={`form-control ${style.input_text_simple}`}  name="role"
                                    title=" Veuillez saisir le  numéro de la société"
                                />
                                <label htmlFor='role'  className={style.label}>Role dans l'application</label>
                                <span id="role" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir le  role dans l'application
                                </span>
                            </Col>
 
                        </Row>
                        <div>
                            <input type="text" id='adress' placeholder='Adresse' className={`form-control ${style.input_text_simple}`}  name="adress"
                                title=" Veuillez saisir votre Adresse"
                            />
                            <label htmlFor='adress'  className={style.label}>Adresse</label>
                            <span id="adress_span" className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez saisir votre Adresse
                            </span>
                        </div>  
                        <Row >
                            <Col xs={12} lg={6}  className={styles.box_left} >
                                <input type="text" id='city' placeholder='Entrer votre ville' className={`form-control ${style.input_text_simple}`}  name="city"
                                    title="Veuillez saisir votre ville"
                                />
                                <label htmlFor='city'  className={style.label}>Ville</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre ville
                                </span>
                            </Col>
                            <Col className={styles.box_right}>
                                <input type="text" id='country' placeholder='Pays' className={`form-control ${style.input_text}`} required name="country"
                                    title=" Veuillez saisir le  numéro de la société"
                                />
                                <label htmlFor='country'  className={style.label}>Pays</label>
                                <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                    Veuillez saisir votre Pays
                                </span>
                            </Col>
                        </Row>
                    </div>
                
                    <div  className={`m-auto ${styles.box_bottom}`}   >
                        <ButtonGroup className={styles.box_button}>
                            <div className={styles.btn_left} onClick={() => { preview(3) }} >
                                <BsArrowLeft className={styles.icon} />
                                <span className={styles.txt_hidded} >Précédent</span>

                            </div>
                            <div className={styles.btn_right} onClick={() => { next(3) }} >
                                <BsArrowRight className={styles.icon} />
                                <span className={styles.txt_hidded} >Suivant</span>
                            </div>

                        </ButtonGroup>
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

export default StepThreeCompanyFormSignup