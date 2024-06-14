import styles from "@/styles/app.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Recaptcha from "components/Recaptcha";
import React, { useState, useEffect , useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import countries from "pages/api/country";
import activities from "pages/api/activity";
import calls from "pages/api/call";
import Header from "components/partials/header";
import Footer from "components/partials/footer";

const Demo = () => {
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

  return (
    <div>
      <Header />
        
      <section id="demo" className={`mt-5 pt-5 ${styles.Demo} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container mt-5 ${styles.section_title}`} data-aos="fade-up">
          <center>
            <h2> Obtenir une Démo </h2>
          </center>
        </div>{" "}
        {/* <!-- End Section Title --> {styles.}*/}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 d-flex justify-content-center">
            {/* <div className="col-lg-5">
              <div className={styles.info_wrap}>
                <h6 className="mb-3">En France : </h6>
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* <i className="bi bi-geo-alt flex-shrink-0"> </i>{" "} 
                  <FaLocationDot className={`${styles.i}`} />

                  <div>
                    <span> Adresse </span>
                    <p>
                      {" "}
                      91 Rue du Faubourg Saint Honore, 75008 Paris, France{" "}
                    </p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item --> 
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <FaPhone className={`${styles.i}`} />
                  <div>
                    <span> Télephone </span>
                    <p> +33 6 20 87 15 28</p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item -->
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <IoMdMail className={`${styles.i}`} />
                  <div>
                    <span> Email </span> <p> Demo@korv-consulting.fr </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- End Info Item -->  <hr />
                <h6 className="my-3">Au Cameroun : </h6>
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* <i className="bi bi-geo-alt flex-shrink-0"> </i>{" "} 
                  <FaLocationDot className={`${styles.i}`} />

                  <div>
                    <span> Adresse </span>
                    <p> 12151 Douala, Cameroun </p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item --> 
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <FaPhone className={`${styles.i}`} />
                  <div>
                    <span> Télephone </span>
                    <p> +237 677 062 856</p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item --> 
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <IoMdMail className={`${styles.i}`} />
                  <div>
                    <span> Email </span> <p> Demo@korv-consulting.fr </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- End Info Item --> {" "}
              </div>{" "}
            </div> */}
            <div className="col-md-10">
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
                  
                  {/*<div className="col-md-12">
                    <label for="subject-field" className="pb-2">
                      Sujet{" "}
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      onChange={handleChange}
                      value={subject}
                    />
                    </div>*/}
                  <div className="col-md-12">
                    <label for="message-field" className="pb-2">
                      Message
                      <span className="text-danger">*</span>
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
                     <center> <div className="col-md-6 mt-3">
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
                      </div></center>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
