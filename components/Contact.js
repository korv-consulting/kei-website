import styles from '../styles/Contact.module.css'
import Recaptcha from './Recaptcha'
import style from '../styles/Floating-label-contact.module.css'
import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap'

function Contact() {
    // var loadSpiner = false
    //var submitted = false
    const [recaptcha, SetRecaptcha] = useState(false);
    const [loadSpiner, setLoadSpiner] = useState(false);

    //const [email, setEmail] = React.useState(""); 
    const [submitted, setSubmitted] = React.useState("false");

    useEffect(() => {

        console.log("recap state:" + recaptcha)

    }, [recaptcha])

    const handleSubmit = (event) => {

        event.preventDefault();
        setSubmitted(true)

        const nodeList = document.getElementsByClassName(style.label);

        for (let i = 0; i <= nodeList.length; i++) {
            nodeList[i].className = style.label_set;
            console.log("elmt:" + nodeList[i])
        }

        var company_label = document.getElementById("company_label")
        company_label.className = style.label_set;

        var form = document.getElementById("form")
        form.className = `was-validated ${styles.form}`


        const form_target = event.currentTarget;
        if (form_target.checkValidity() === false) {



            var mail = document.getElementById("mail") 
            if (mail.checkValidity() === false) {
                var umail = document.getElementById("umail")
                umail.className = style.label_set

            }


            var msg = document.getElementById("msg")
            if (msg.checkValidity() === false) {
                var umsg = document.getElementById("umsg")
                umsg.className = style.label_area_set

            }

        } else {

            if (recaptcha == true) {
                setLoadSpiner(true)
                alert("valid form: " + form_target.checkValidity()+" submiting...")
            } else {
                alert("oups!!!")
            }


        }
    };

    // Begin recaptcha functions


    const handleChange = ({ target: { value } }) => {
        //setEmail(value);
    };

    const handleChangeRecaptcha = () => {
        SetRecaptcha(true);

        alert(`Hey , Recaptcha: ${recaptcha} , changement d'état du recaptcha...`);

    };

    const handleSubmition = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };

    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        // handlechecked()
        handleChangeRecaptcha()
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        // recaptchaRef.current.reset();
    } 




    return (
        <section className={styles.section}> 
 
            <div className={`container`} >
                <div className={`row`}>
                    <div className={`col-lg-2 d-sm-none d-lg-block ${styles.hide_img_col}`}  > 
                        <Image src='/KEI.png'  className={styles.card} />
                    </div>
                    <div className={`col-lg-2`}  > 
                    </div>

                    <div className="col-lg-4 col-sm-12" >
                        <form className={styles.form} id="form" method="post" noValidate onSubmit={handleSubmit}>
                            <div className={style.container}>
                                <div>
                                    <input type="text" id='username' placeholder='Entrer votre nom' className={`form-control ${style.input_text}`} required name="name"
                                        title=" Veuillez saisir votre nom"
                                    />
                                    <label htmlFor='username' id='uname' className={style.label}>Nom</label>
                                    <span id="name" className={`invalid-feedback ${styles.errorMsg}`} >
                                        Veuillez saisir votre nom
                                    </span>
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
                                <div>
                                    <input type="text" id='tel' placeholder='TEL' className={`form-control ${style.input_text_simple}`}  name="tel"
                                        title="Veuillez saisir votre numéro de téléphone"
                                    />
                                    <label htmlFor='tel'  className={style.label}>Téléphone</label>
                                  
                                </div>
                                <div>
                                    <input type="text" id='company' placeholder='Nom de la société' className={`form-control ${style.input_text_simple}`}  name="company"
                                        title="Veuillez saisir le nom de la société"
                                    />
                                    <label htmlFor='company' id='company_label' className={style.label}>Nom de la société</label>
                                  
                                </div>
                             
                                <div>
                                    <input type="text" id='obj' placeholder='Objet du message' className={`form-control ${style.input_text}`} required name="objet"
                                        title="Veuillez saisir l'objet de votre message"
                                    />
                                    <label htmlFor='obj' id='uobj' className={style.label}>Objet</label>
                                    <span id="objet" className={`invalid-feedback ${styles.errorMsg}`} >
                                        Veuillez saisir l'objet de votre message
                                    </span>
                                </div> 
                                <div>
                                    <textarea cols={50} rows={8} id='msg' placeholder='...' required className={`form-control ${style.input_text}`} name="message"
                                        title="Veuillez saisir  votre message"
                                    />
                                    <label htmlFor='msg' id='umsg' className={style.label_area}>Message</label>
                                    <span id="message" className={`invalid-feedback ${styles.errorMsg}`}>
                                        Veuillez saisir votre Message
                                    </span>
                                </div>
                                <div className={style.recaptcha_box} >
                                    <Recaptcha onReCAPTCHAChange={onReCAPTCHAChange} />
                                    <span className={recaptcha == false && submitted == true ? `${styles.errorMsg}` : `${styles.disable}`} >
                                        Veuillez d'abord résoudre l'enygme du recaptcha
                                    </span>
                                </div>

                            </div>

                            <button type="submit" className={styles.submit} >
                                <span className={loadSpiner == true && submitted == true ? styles.disable : styles.spinner}>Envoyer</span>
                                <div className={loadSpiner == true && submitted == true ? `spinner-border mr-12 ${styles.spinner}` : `${styles.disable}`} role="status">
                                    <span className={`visually-hidden`} >Loading...</span>
                                </div>
                            </button>
                        </form> 
                    </div>
                    <div className="col-lg-4" > </div>

                </div>
            </div>
        </section>

    )
}

export default Contact




