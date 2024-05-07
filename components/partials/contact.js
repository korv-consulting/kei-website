import styles from "@/styles/app.module.css";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline
} from "react-icons/io5";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Recaptcha from "../Recaptcha";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [recaptcha, SetRecaptcha] = useState(false);
  const [loadSpiner, setLoadSpiner] = useState(false);

  //const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState("false");

  useEffect(() => {
    console.log("recap state:" + recaptcha);
  }, [recaptcha]);

  const handleChangeRecaptcha = () => {
    SetRecaptcha(true);

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
    <div>
      <section id="contact" className={`${styles.contact} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2> Contactez-nous </h2>
        </div>{" "}
        {/* <!-- End Section Title --> {styles.}*/}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className={styles.info_wrap}>
                <h6 className="mb-3">En France : </h6>
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* <i className="bi bi-geo-alt flex-shrink-0"> </i>{" "} */}
                  <FaLocationDot className={`${styles.i}`} />

                  <div>
                    <span> Adresse </span>
                    <p>
                      {" "}
                      91 Rue du Faubourg Saint Honore, 75008 Paris, France{" "}
                    </p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item --> */}
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
                {/* <!-- End Info Item --> */}
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <IoMdMail className={`${styles.i}`} />
                  <div>
                    <span> Email </span> <p> contact@korv-consulting.fr </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- End Info Item --> */} <hr />
                <h6 className="my-3">Au Cameroun : </h6>
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* <i className="bi bi-geo-alt flex-shrink-0"> </i>{" "} */}
                  <FaLocationDot className={`${styles.i}`} />

                  <div>
                    <span> Adresse </span>
                    <p> 12151 Douala, Cameroun </p>
                  </div>
                </div>{" "}
                {/* <!-- End Info Item --> */}
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
                {/* <!-- End Info Item --> */}
                <div
                  className={`d-flex ${styles.info_item}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <IoMdMail className={`${styles.i}`} />
                  <div>
                    <span> Email </span> <p> contact@korv-consulting.fr </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- End Info Item --> */}{" "}
              </div>{" "}
            </div>
            <div className="col-lg-7">
              <form
                action="forms/contact.php"
                method="post"
                className={styles.php_email_form}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label for="name-field" className="pb-2">
                      Nom
                    </label>{" "}
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="email-field" className="pb-2">
                      Email{" "}
                    </label>{" "}
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="subject-field" className="pb-2">
                      Sujet{" "}
                    </label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      id="message-field"
                      required=""
                    ></textarea>
                  </div>
                 
                  <div className="col-md-12 text-center">
                    <div className={styles.loading}> Loading </div>
                    <div className={styles.error_message}> </div>
                    <div className={styles.sent_message}>
                      Your message has been sent.Thank you!
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                    <Recaptcha onReCAPTCHAChange={onReCAPTCHAChange} />
                    <span
                      className={
                        recaptcha == false && submitted == true
                          ? `${styles.error_message}`
                          : `${styles.disable}`
                      }
                    >
                      {/* Veuillez d'abord résoudre l'enygme du recaptcha */}
                    </span>
                    </div>
                      <div className="col-md-6 mt-3"><button type="submit"> Envoyer </button></div>
                    </div>
                    {" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
