import Head from 'next/head'
import { Col, Container, Image, Row } from "react-bootstrap"
import Header from 'components/partials/header'
import Footer from 'components/partials/footer'
import styles from "@/styles/app.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Recaptcha from 'components/Recaptcha'
import React, { useState, useEffect , useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import countries from "pages/api/country";
import activities from "pages/api/activity";
import calls from "pages/api/call";
import FunctionalityPageHeader from 'components/partials/featuresDetails/FunctionalityPageHeader'

export default function Contact() {
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

    const [recaptcha, SetRecaptcha] = useState(false);
  const [submitted, setSubmitted] = useState(false); //verify form submit
  const [form, setForm] = useState({
    lastname:"",
    name: "",
    business: "",
    country: "",
    activity: "",
    phone: "",
    email: "",
    message: "",
    call: "",
  });
  const [successMessage, setSuccess] = useState(false); //show successMessage
  const [error, setError] = useState(false);// show errorMessage
  const [emailValid, setEmailValid] = useState(false); //validate email
  const [messageValid, setMessageValid] = useState(false); //validate message
  //const regex = /^[a-z]+[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
  const regex = /^[a-z]+[a-z0-9]+@[a-z]+\.(com|net|org|edu|gov)$/i;


  const handleChangeRecaptcha = () => {
    SetRecaptcha(true);     
    setSubmitted(false);
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
    handleChangeRecaptcha();
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    // recaptchaRef.current.reset();
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "email") {
      if (regex.test(document.getElementById("email").value)) {
        setEmailValid(true);
        setSubmitted(false);
      } else {
        setEmailValid(false);
        setSubmitted(true);
      }
    }
    if (name === "message") {
      if (document.getElementById("message").value.trim()) {
        setMessageValid(true);
        setSubmitted(false);
      } else {
        setMessageValid(false);
        setSubmitted(true);
      }
    }
    if (name === "infos") { 
      setForm({ ...form, infos: value }); 
    }
  };
  const { lastname,name,business, phone,country,activity, email, subject, message } = form;
  const recaptchaRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (regex.test(email) && message && recaptcha) {
      const formData = new FormData();
      formData.append("lastname", lastname);
      formData.append("name", name);
      formData.append("business", business);
      formData.append("country", country);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("activity", activity);
      formData.append("call", call);
      formData.append("message", message);

      const response = await fetch(`/api/contact`, {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      console.log('send');
      if (response.ok) {
        setSuccess(true);
        setForm({
          lastname:"",
          name: "",
          business: "",
          country: "",
          activity: "",
          phone: "",
          email: "",
          message: "",
          call: "",
        });
        setSubmitted(false);
        setError(false);
        recaptchaRef.current.reset()
      } else {
        setSubmitted(false);
        setError(true);
        setSuccess(false);
      }
    } else {
      if (!regex.test(email)) {
        setEmailValid(false);
      }
      if (!message.trim()) {
        setMessageValid(false);
      }
    }
  };
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [successMessage , error]);

  const source1 = '/contact.jpg';
  const title1 = ' RESERVEZ UN DEMO...';




  return (
    <>
            <div className={styles.container}>
              <Head>
                <title>KEI - Home</title> 
                <meta name="description" content="KORV Estatement Inventory" />
                <link rel="icon" href="/logo-kei.png" />
              </Head>

              <Header />
              <main className={styles.main}>
                <section id="contact" className={`${styles.contact} ${styles.section} my-5 pt-5`}>
               
                    <div className={styles.pageContainer}>
                      <FunctionalityPageHeader 
                      title={title1} 
                      source={source1} 
                      />
                    </div>
                    {/* <!-- End Section Title --> {styles.}*/}
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">

                    <p className="text-center mt-5 pt-5 ">Contactez-nous pour obtenir une démo ou<br/> si vous avez une autre raison, remplissez le formulaire ci-dessous.</p>

                  
                        <div className="col-md-12">
                        <form
                            method="post"
                            className={styles.php_email_form}
                            data-aos="fade-up"
                            data-aos-delay="200"
                            onSubmit={handleSubmit}
                            noValidate
                            encType="multipart/form-data"
                        >
                            {successMessage && (
                            <div className={styles.sent_message}>
                                Votre message a été envoyé.Merci!
                            </div>
                            )}
                            {error && (
                            <div className={styles.error_message}>
                                Oups une erreur est survenue.Veuillez réesayer
                            </div>
                            )}
                            <div className="row gy-4">
                            <div className="col-md-6">
                                <label for="lastname-field" className="pb-2">
                                Prénom
                                <span className="text-danger">*</span>

                                </label>{" "}
                                <input
                                type="text"
                                name="lastname"
                                id="lastname-field"
                                className="form-control"
                                onChange={handleChange}
                                value={lastname}
                                />
                            </div>
                            <div className="col-md-6">
                                <label for="name-field" className="pb-2">
                                Nom
                                <span className="text-danger">*</span>

                                </label>{" "}
                                <input
                                type="text"
                                name="name"
                                id="name-field"
                                className="form-control"
                                onChange={handleChange}
                                value={name}
                                />
                            </div>
                            <div className="col-md-6">
                                <label for="business-field" className="pb-2">
                                Entreprise <span className="text-danger">*</span>
                                </label>{" "}
                                <input
                                type="text"
                                name="business"
                                id="business-field"
                                className={`form-control ${
                                    submitted && (emailValid ? "is-valid" : "is-invalid")
                                }`}
                                required
                                onChange={handleChange}
                                value={business}
                                />
                                <div className="invalid-feedback">
                                Nom de l'entreprise non renseigné
                                </div>
                            </div>
                           
                            <div className="col-md-6">
                                <label for="email-field" className="pb-2">
                                Email Professionnelle <span className="text-danger">*</span>
                                </label>{" "}
                                <input
                                type="email"
                                className={`form-control ${
                                    submitted && (emailValid ? "is-valid" : "is-invalid")
                                }`}
                                name="email"
                                id="email"
                                required
                                onChange={handleChange}
                                value={email}
                                />
                                <div className="invalid-feedback">
                                Adresse Professionnelle mail invalide
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label for="phone-field" className="pb-2">
                                Portable
                               <span className="text-danger">*</span>

                                </label>{" "}
                                <input
                                type="text"
                                name="phone"
                                id="phone-field"
                                className="form-control"
                                onChange={handleChange}
                                value={phone}
                                />
                            </div>
                      
                         
                            <div className="col-md-12">
                                <label for="message-field" className="pb-2">
                                Avez-vous une preocupation ?. si c'est le cas n'hésitez pas à nous envoyer un message
                                </label>
                                <textarea
                                className={`form-control ${
                                    submitted && (messageValid ? "is-valid" : "is-invalid")
                                }`}
                                name="message"
                                rows="10"
                                id="message"
                                required
                                onChange={handleChange}
                                value={message}
                                ></textarea>
                                <div className="invalid-feedback">
                                Veuillez entrer votre message
                                </div>
                            </div>
                          
                         

                            <div className="col-md-12 text-center">
                                <div className={styles.loading}> Loading </div>

                                <div className="row">
                                <div className="col-md-6">
                                <ReCAPTCHA
                            ref={recaptchaRef}
                            size="normal"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onReCAPTCHAChange}
                        /> 
                        {!recaptcha && submitted && (
                                    <span className={`text-danger`}>
                                        Veuillez vérifier le recaptcha
                                    </span>
                                    )}
                                </div>
                                <div className="col-md-6 mt-3">
                                    <button
                                    type="submit"
                                    disabled={submitted ? true : false}
                                    className={`${
                                        submitted
                                        ? styles.send_btn_disabled
                                        : styles.send_btn
                                    }`}
                                    >
                                    {submitted ? "En cours d'envoi..." : "Envoyer"}
                                    </button>
                                    {/* <Recaptcha onReCAPTCHAChange={onReCAPTCHAChange} />
                                    {!recaptcha && submitted && (
                                    <span className={`text-danger`}>
                                        Veuillez vérifier le recaptcha
                                    </span>
                                    )} */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
              </main>   

              <Footer /> 
            </div>


    </>
  )

}