import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Confirmation-signup.module.css'
import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiShow, BiHide } from "react-icons/bi";
import ShowHideEyeIcon from './show-hide-eye-icon'


function ConfirmationSignup({ next, preview }) {
 
    const [showPwd, setShowPwd] = useState(true)
    const [showConfirmPwd, setShowConfirmPwd] = useState(true)


    
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };

    const handleClickPwd = (state) => {
        setShowPwd(!state)
    };

    const handleClickConfirmPwd = (state) => {
        setShowConfirmPwd(!state)
    };




    return (

            <div className={styles.container}>
         
                        <div className={styles.box_top}>
                            <h2 className={styles.header}>Confirmation du mail</h2>
                            <span className={styles.icon}>
                            <Image fluid src="signup/envelop.png"  alt="Envelop" />
                            </span>
                        </div>
                        <div className={styles.box_center}>
                            <h3 className={styles.title}>
                                On y est presque <b>!</b>
                            </h3>
                            <p className={styles.subtitle}>
                                Vérifiez votre boite de réception.
                            </p>
                            <p className={styles.describtion}>
                            Confirmez votre identité en cliquant sur le lien que nous vous envoyons à example@gmail.com
                            </p>
                        </div>
 
                        <div className={styles.box_bottom}> 
                            <div>
                                <Image fluid src="KEI.png" className={styles.picture} alt="building" />
                            </div>
                            <div>
                                <Image fluid src="signup/envelop-amplified.png" className={styles.envelop}  alt="Envelop" />
                            </div>
                            

                        </div>

            </div>  

     
    )
}

export default ConfirmationSignup