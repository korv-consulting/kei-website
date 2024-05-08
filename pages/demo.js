import styles from "@/styles/app.module.css";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline
} from "react-icons/io5";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import Recaptcha from "../Recaptcha";
import React, { useState, useEffect } from "react";
import Recaptcha from "components/Recaptcha";

const Demo = () => {
  const [recaptcha, SetRecaptcha] = useState(false);
  const [loadSpiner, setLoadSpiner] = useState(false);

  //const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form , setForm] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })


  const handleChangeRecaptcha = () => {
    SetRecaptcha(true);

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
const [emailValid , setEmailValid] = useState(false)
const [messageValid , setMessageValid] = useState(false)
const regex = /^[a-z]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
console.log("***test****" , regex.test("motouomaureline@gmail.fr"))
const handleChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
}
const {name , email ,subject , message} = form
const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true)
  if(email && message && recaptcha){
      alert("message send")
  }

};
console.log('form***' , form)

  return (
    <div>
        
      <section id="demo" className={`${styles.Demo} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2> Obtenir une Démo </h2>
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
                    <span> Email </span> <p> Demo@korv-consulting.fr </p>{" "}
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
                    <span> Email </span> <p> Demo@korv-consulting.fr </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- End Info Item --> */}{" "}
              </div>{" "}
            </div>
            <div className="col-lg-7">
              <form
                method="post"
                className={styles.php_email_form}
                data-aos="fade-up"
                data-aos-delay="200"
                onSubmit={handleSubmit}
                noValidate
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="email-field" className="pb-2">
                      Email{" "}
                      <span className="text-danger">*</span>
                    </label>{" "}
                    <input
                      type="email"
                      className={`form-control ${submitted && (regex.test(email) ? 'is-valid' : 'is-invalid')}`}
                      name="email"
                      id="email-field"
                      required
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">Adresse mail invalide</div>
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="message-field" className="pb-2">
                      Message
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${submitted && (message.trim() ? 'is-valid' : 'is-invalid')}`}
                      name="message"
                      rows="10"
                      id="message-field"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <div className="invalid-feedback">Veuillez entrer votre message</div>
                  </div>
                 
                  <div className="col-md-12 text-center">
                    <div className={styles.loading}> Loading </div>
                    
                    <div className="row">
                    <div className="col-md-6">
                    <Recaptcha onReCAPTCHAChange={onReCAPTCHAChange} />
                    { (!recaptcha && submitted ) && <span
                      className={
                         `text-danger`
                      }
                    >
                       Veuillez vérifier le recaptcha
                    </span>}
                    </div>
                      <div className="col-md-6 mt-3"><button type="submit" disabled={submitted ? true : false}> Envoyer </button></div>
                    </div>

                    <div className={styles.sent_message}>
                      Your message has been sent.Thank you!
                    </div>
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

export default Demo;
