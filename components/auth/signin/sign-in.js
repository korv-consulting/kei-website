import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Sign-in.module.css'
import style from '../../../styles/Floating-label-improved.module.css'

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

            <p className="text-center">
                <p className={`mt-5  ${styles.blue}`} >Connexion</p>
                <p className={styles.subtitle}>Entrez vos informations et commencez la journée avec nous</p>
            </p>

            <h5 className={`text-center text-danger  ${styles.hide}`} id="hide_pwd" >
                Les mots de passe saisis ne sont pas identiques
            </h5><b /><br />

            <div className={`input-group  mb-4 ${styles.groupA}`} >
                <input type="email" id='mail' placeholder='example@gmail.com' className={`form-control ${style.input_text}`} required name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="L'E-Mail doit contenir au moins le caractere @"
                />
                <span  className={`input-group-text bg-white border-left-0 ${style.span}`} id="basic-addon1">
                    <Image fluid src="./signin/envelop.png" alt="Sky Crappers" />
                </span>
                <label htmlFor='mail' id='umail'  className={`ms-4 ${style.label}`}>E-MAIL </label>

            </div>
            <span id="email" className={`invalid-feedback ${styles.errorMsg}`} >
                Veuillez saisir votre E-MAIL
            </span>

            <div className={`input-group mb-4 ${styles.groupB}`}>  
                <input type="password" id='pwd' placeholder='........' className={`form-control   ${style.input_text}`} required name="pwd"
                    title="mot de passe"
                />
                <span  className={`input-group-text bg-white border-left-0  ${style.span}`} id="basic-addon3">
                <Image fluid src="./signin/padlock.png"   onClick={() => handleClickPwd(showPwd)}  alt="Sky Crappers" />
                </span>
                <label htmlFor='pwd' id='upwd'  className={` ${style.label}`}>Mot de passe</label>

            </div>
            <span className={`invalid-feedback ${styles.errorMsg}`} >
                Veuillez entrer votre mot de passe
            </span>
            <br />
            <Row className={styles.box_remember} >
                <Col xs={12} md={6} className={styles.box_left}>
                    <input type="checkbox" id='' className={` ${styles.checkbox}`} required name="checkbox"
                        title="Cochez la case"
                    />
                    <span  className={styles.remember}>Se souvenir de moi</span>
                </Col>
                <Col md={6} className={styles.forgot_pwd}>
                    Mot de passe oublié?
                </Col>
            </Row>
            <Button type="submit" className={`my-4 ${styles.btn}`} >
                <h4 className={(loadSpiner == true && submitted == true) ? styles.disable : styles.btn_txt} > CONNEXION </h4>
                <span className={loadSpiner == true && submitted == true ? `spinner-border mr-12 ${styles.spinner}` : `${styles.disable}`} role="status">
                    <h3 className={`visually-hidden`} >Loading...</h3>
                </span>
            </Button>

            <Row className={styles.txt} >
                <Col xd={12} md={7} className={styles.txt_blue} >Vous avez deja un compte ? </Col>
                <Col md={5} className={styles.txt_green}>
                    Connexion
                </Col>
            </Row>






        </form>




    )
}

export default SignIn