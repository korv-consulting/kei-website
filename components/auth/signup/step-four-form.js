import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Step-four-form-signup.module.css'
import style from '../../../styles/Floating-label.module.css'
import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ShowHideEyeIcon from './show-hide-eye-icon'


function StepFourFormSignup({ next, preview }) {

    const [showPwd, setShowPwd] = useState(true)
    const [showConfirmPwd, setShowConfirmPwd] = useState(true)


    
    const onSubmit = (event) => { 
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

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

    const handleClickConfirmPwd = (state) => {
        setShowConfirmPwd(!state)
        var x = document.getElementById("confirm_pwd");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    };


    const checkPwd = () => {
        var pwd = document.getElementById("pwd");
        var confirm_pwd = document.getElementById("confirm_pwd");
        if (pwd.value === confirm_pwd.value) {
            next(4)

        } else {
          
            document.getElementById("hide_pwd").style.display='flex'
            pwd.style.border = '2px solid red'
            pwd.style.height = '80%'

            confirm_pwd.style.border = '2px solid red'
            confirm_pwd.style.height = '80%'


            
            document.getElementById("label_pwd").style.color='red'
            document.getElementById("label_confirm_pwd").style.color='red'

        }
    };



 
    return (

        <form className={styles.form} id="form" method="post" noValidate onSubmit={onSubmit}>
                <p  className={`text-center mt-4 `} >
                        <Image fluid src="logo-kei.png" className={`${styles.picture}`}   alt="Sky Crappers" />
                        <h3 className={` ${styles.title}`} >
                            Souscrire
                        </h3>

                </p>
                    
                <div  className={`mb-5 ${styles.row_center}`} >
                    <div  className={styles.box_center} >
                        <h5 className={`text-center text-danger  ${styles.hide}`} id="hide_pwd" >
                                Les mots de passe saisis ne sont pas identiques
                        </h5><b/><br/>
                        <div >
                            <div className={styles.box_pwd}>
                                   <ShowHideEyeIcon   handleClickPwd={()=>handleClickPwd(showPwd)} state={showPwd}   />
                                <div>
                                    <input type="password" id='pwd' placeholder='........' className={`form-control pt-4 ${style.input_text}`} required name="password"
                                        title="Mot de passe"
                                    />
                                    <label htmlFor='pwd' id="label_pwd" className={style.label}>Mot de passe</label>
                                </div>
                               
                            </div>

                            <span className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez saisir votre mot de passe
                            </span>
                        </div>
                     
                        <div>
                            <div className={styles.box_pwd}>
                                <ShowHideEyeIcon   handleClickPwd={()=>handleClickConfirmPwd(showConfirmPwd)} state={showConfirmPwd}   />
                                <input type="password" id='confirm_pwd' placeholder='........' className={`form-control pt-4  ${style.input_text}`} required name="confirm_pwd"
                                    title="confirmer le mot de passe"
                                />
                                <label htmlFor='confirm_pwd' id="label_confirm_pwd" className={style.label}>Confirmation du mot de passe</label>
                            </div>
                            <span className={`invalid-feedback ${styles.errorMsg}`} >
                                Veuillez confirmer votre mot de passe
                            </span>
                        </div>
                        <div className={styles.box_flex}>
                            <input type="checkbox" id='' className={` ${styles.checkbox}`} required name="checkbox"
                                title="Cochez la case"
                            /> 
                            <span className={styles.box_right}>
                                <span className={styles.txt_blue_check} >J'ai lu et j'accepte la</span>
                                <span className={styles.txt_green}>
                                    politique de confidentialité
                                </span>
                            </span>
                        </div>
                            
                    </div>
 
                </div>
                
                <div  className={`m-auto ${styles.box_bottom}`} >
                    <ButtonGroup className={styles.box_button}>
                        <div className={styles.btn_left} onClick={() => { preview(4) }} >
                            <BsArrowLeft className={styles.icon} />
                            <span className={styles.txt_hidded} >Précédent</span>

                        </div>
                        <div className={styles.btn_right} onClick={() => { checkPwd()}} >
                            <BsArrowRight className={styles.icon} />
                            <span className={styles.txt_hidded} >Suivant</span>
                        </div>
                    </ButtonGroup>

                    <Row className={`mx-auto mb-5 text-center ${styles.txt}`}  >
                        <Col xs={12} lg={7}  className={styles.txt_blue} >Vous avez deja un compte ? </Col>
                        <Col lg={5}  className={styles.txt_green}>
                            Connexion
                        </Col>
                    </Row>
                
                </div>
              


              

        </form>

    )
}

export default StepFourFormSignup