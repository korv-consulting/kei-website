import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Sign-in.module.css'
import style from '../../../styles/Floating-label.module.css'

import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ShowHideEyeIcon from '../signup/show-hide-eye-icon'


function SignIn() {

    const [showPwd, setShowPwd] = useState(true)
    const [loadSpiner, setLoadSpiner] = useState(false);
    const [submitted, setSubmitted] = useState("false");



    const onSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true)
        setLoadSpiner(true)



    };

   
    const handleClickPwd = (state) => {
        setShowPwd(!state)
        var x = document.getElementById("pwd");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    };



    return (
        <form className={styles.form} id="form" method="post" noValidate onSubmit={onSubmit}>
              
                <div className="text-center">
                    <p  className={`mt-5  ${styles.blue}`} >Connexion</p>
                    <p className={styles.remember}>Entrez vos informations et commencez la journée avec nous</p>
                </div>

                <Row className={styles.row_center}  >
                    <Col md={2}></Col>
                    <Col xs={12} md={8}  >
                        <h5 className={`text-center text-danger  ${styles.hide}`} id="hide_pwd" >
                            Les mots de passe saisis ne sont pas identiques
                        </h5><b /><br />
                        <div className={styles.box_pwd}>

                            <input type="email" id='mail' placeholder='example@gmail.com' className={`form-control ${style.input_text}`} required name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="L'E-Mail doit contenir au moins le caractere @"
                            />
                            <label htmlFor='mail' id='umail' className={style.label}>E-MAIL</label>
                            <span id="email" className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez saisir votre E-MAIL
                            </span>

                            <Image fluid src="./signin/envelop.png" className={styles.envelop_icon} alt="Sky Crappers" />

                        </div><br />
                        <div className={styles.box_pwd}>
                            <input type="password" id='pwd' placeholder='........' className={`form-control ${style.input_text}`} required name="pwd"
                                title="mot de passe"
                            />
                            <label htmlFor='pwd' id="label_pwd" className={style.label}>Mot de passe</label>
                            <Image fluid src="./signin/padlock.png" onClick={() => handleClickPwd(showPwd)} className={styles.envelop_icon} alt="Sky Crappers" />

                            <span className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez entrer votre mot de passe
                            </span>
                        </div><br />
                        <div className='d-flex justify-content-between'> 
                            <span className={styles.box_left}>
                                <input type="checkbox" id='' className={` ${styles.checkbox}`} required name="checkbox"
                                    title="Cochez la case"
                                />
                                <span className={styles.remember}>Se souvenir de moi</span>
                            </span>
                            <span className={styles.forgot_pwd}>
                                Mot de passe oublié?
                            </span>
                        </div>
                        <Button type="submit" className={`my-4 ${styles.btn}`} >
                            <span className={(loadSpiner == true && submitted == true ) ? styles.disable:styles.spinner} > CONNEXION </span>
                            <div className={loadSpiner == true && submitted == true ? `spinner-border mr-12 ${styles.spinner}` : `${styles.disable}`} role="status">
                                <span className={`visually-hidden`} >Loading...</span>
                            </div>
                         </Button>
                    </Col>
                    <Col  md={2}></Col>

                </Row>
                <Row>
                    <Col ></Col>
                    <Col md={4} className={styles.box_bottom} >
                 
                        <div className={styles.txt} >
                            <span className={styles.txt_blue} >Vous avez deja un compte ? </span>
                            <span className={styles.txt_green}>
                                Connexion
                            </span>
                        </div>


                    </Col>
                    <Col></Col>

                </Row>

            

        </form>




    )
}

export default SignIn