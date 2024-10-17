import styles from "@/styles/app.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Recaptcha from "../../components/Recaptcha";
import React, { useState, useEffect , useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import countries from "pages/api/country";
// import activities from "pages/api/activity";
// import calls from "pages/api/call";

const activities = [
  'construction', 'hospitality', 'real_estate', 'agriculture',
  'automotive', 'banking', 'biotech', 'education', 'energy',
  'manufacturing', 'it', 'media', 'marketing', 'health',
  'professional_services', 'telecommunications', 'transportation',
  'retail', 'public_services', 'arts'
];

const countries = [
  'afghanistan', 'albania', 'algeria', 'andorra', 'angola', 'antigua_and_barbuda',
  'argentina', 'armenia', 'australia', 'austria', 'azerbaijan', 'bahamas', 'bahrain',
  'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'benin', 'bhutan', 'bolivia',
  'bosnia_and_herzegovina', 'botswana', 'brazil', 'brunei', 'bulgaria', 'burkina_faso',
  'burundi', 'cote_divoire', 'cabo_verde', 'cambodia', 'cameroon', 'canada',
  'central_african_republic', 'chad', 'chile', 'china', 'colombia', 'comoros', 'congo',
  'costa_rica', 'croatia', 'cuba', 'cyprus', 'czechia', 'democratic_republic_of_the_congo',
  'denmark', 'djibouti', 'dominica', 'dominican_republic', 'ecuador', 'egypt', 'el_salvador',
  'equatorial_guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia', 'fiji', 'finland',
  'france', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'greece', 'grenada',
  'guatemala', 'guinea', 'guinea_bissau', 'guyana', 'haiti', 'holy_see', 'honduras',
  'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel',
  'italy', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'kiribati', 'kuwait',
  'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya',
  'liechtenstein', 'lithuania', 'luxembourg', 'madagascar', 'malawi', 'malaysia',
  'maldives', 'mali', 'malta', 'marshall_islands', 'mauritania', 'mauritius',
  'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco',
  'mozambique', 'myanmar', 'namibia', 'nauru', 'nepal', 'netherlands', 'new_zealand',
  'nicaragua', 'niger', 'nigeria', 'north_korea', 'north_macedonia', 'norway', 'oman',
  'pakistan', 'palau', 'palestine_state', 'panama', 'papua_new_guinea', 'paraguay',
  'peru', 'philippines', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'rwanda',
  'saint_kitts_and_nevis', 'saint_lucia', 'saint_vincent_and_the_grenadines', 'samoa',
  'san_marino', 'sao_tome_and_principe', 'saudi_arabia', 'senegal', 'serbia', 'seychelles',
  'sierra_leone', 'singapore', 'slovakia', 'slovenia', 'solomon_islands', 'somalia',
  'south_africa', 'south_sudan', 'spain', 'sri_lanka', 'sudan', 'suriname', 'sweden',
  'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand', 'timor_leste',
  'togo', 'tonga', 'trinidad_and_tobago', 'tunisia', 'turkey', 'turkmenistan', 'tuvalu',
  'uganda', 'ukraine', 'united_arab_emirates', 'united_kingdom', 'united_states',
  'uruguay', 'uzbekistan', 'vanuatu', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'
];

const calls = [
"email",
"google",
"linkedin",
"facebook",
"media",
"word_of_mouth",
"event",
"other"
];

const Contact = () => {

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
      <section id="contact" className={`${styles.contact} ${styles.section} `}>
        {/* <!-- Section Title --> */}
        <div className={`container mt-5 pt-5 ${styles.section_title}`} data-aos="fade-up">
          <center>
            <h2> Contactez-nous </h2>
          </center>
        </div>{" "}
        {/* <!-- End Section Title --> {styles.}*/}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">

          <p className="text-center ">Contactez-nous pour obtenir une démo et également<br/> Si vous avez une autre raison, remplissez le formulaire ci-dessous.</p>

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
                    <span> Email </span> <p> contact@korv-consulting.fr </p>{" "}
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
                    <span> Email </span> <p> contact@korv-consulting.fr </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* <!-- End Info Item --> }{" "}
              </div>{" "}
            </div>*/}
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
                      Nom de l&apos;entreprise non renseigné
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label for="country-field" className="pb-2">
                      Pays <span className="text-danger">*</span>
                    </label>{" "}
                    <select 
                    className={`form-select ${
                      submitted && (emailValid ? "is-valid" : "is-invalid")
                    }`} 
                    aria-label="Default select example" 
                    id="country"
                    name="country"
                    required
                    onChange={handleChange}>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">
                      Pays non renseigné
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
                  <div className="col-12">
                    <label for="activity-field" className="pb-2">
                      Secteur d&apos;activité <span className="text-danger">*</span>
                    </label>{" "}
                    <select 
                    className={`form-select ${
                      submitted && (emailValid ? "is-valid" : "is-invalid")
                    }`} 
                    aria-label="Default select example" 
                    id="activity-field"
                    name="activity"
                    required
                    onChange={handleChange}>
                      {activities.map((activity, index) => (
                        <option key={index} value={activity}>
                          {activity}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">
                      Secteur d&apos;activité non renseigné
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="subject-field" className="pb-2">
                      Je souhaite:{" "}
                    </label>{" "}
                    <div className="d-flex justify-content-around">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Demande d'informations" id="imfos" name="infos"/>
                        <label class="form-check-label" for="infos">
                          Plus d&apos;informations
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Demande de partenariat" id="partner" name="partner"/>
                        <label class="form-check-label" for="partner">
                          Un partenariat
                        </label>
                      </div>
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
                  <div className="col-12">
                    <label for="country-field" className="pb-2">
                      Comment avez-vous entendu parler de nous ?
                    </label>{" "}
                    <select 
                    className="form-select"
                    aria-label="Default select example" 
                    id="call"
                    name="call"
                    onChange={handleChange}>
                      {calls.map((call, index) => (
                        <option key={index} value={call}>
                          {call}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 pb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="yes" id="privacy" name="privacy"/>
                      <label class="form-check-label" for="privacy">
                        Je suis informé(e) des dispositions de confidentialité de ce site et j&apos;approuve leur contenu.
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="yes" id="mailing" name="mailing"/>
                      <label class="form-check-label" for="mailing">
                       Je donne ma permission à KEI pour envoyer des informations pertinentes, que ce soit sous forme de bulletins d&apos;information ou d&apos;e-mails.
                      </label>
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
                      <center>
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
                      </center>
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

export default Contact;
