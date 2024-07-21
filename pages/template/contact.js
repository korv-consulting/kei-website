import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "@/styles/app.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import React, { useState, useEffect , useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import countries from "pages/api/country";
import activities from "pages/api/activity";
import calls from "pages/api/call";
import Header from 'pages/component/header';
import Footer from 'pages/component/footer';

const Contact = () => {
  const { t } = useTranslation('common');
  
  const [recaptcha, setRecaptcha] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    lastname: "",
    name: "",
    business: "",
    country: "",
    activity: "",
    phone: "",
    email: "",
    message: "",
    call: "",
  });
  const [successMessage, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const regex = /^[a-z]+[a-z0-9]+@[a-z]+\.(com|net|org|edu|gov)$/i;

  const handleChangeRecaptcha = () => {
    setRecaptcha(true);     
    setSubmitted(false);
  };

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    handleChangeRecaptcha();
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
  };
  
  const { lastname, name, business, phone, country, activity, email, message, call } = form;
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
          lastname: "",
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
        recaptchaRef.current.reset();
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
  }, [successMessage, error]);

  return (
    <div>
      <Header/>
      <section id="contact" className={`${styles.contact} ${styles.section}`}>
        <div className={`container mt-5 pt-5 ${styles.section_title}`} data-aos="fade-up">
          <center>
            <h2>{t('contactUs')}</h2>
          </center>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <p className="text-center">{t('contactInfo')}</p>
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
                    {t('successMessage')}
                  </div>
                )}
                {error && (
                  <div className={styles.error_message}>
                    {t('errorMessage')}
                  </div>
                )}
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="lastname-field" className="pb-2">
                      {t('firstName')}
                    </label>
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
                    <label htmlFor="name-field" className="pb-2">
                      {t('lastName')}
                    </label>
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
                    <label htmlFor="business-field" className="pb-2">
                      {t('company')} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="business"
                      id="business-field"
                      className="form-control"
                      onChange={handleChange}
                      value={business}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="country-field" className="pb-2">
                      {t('country')} <span className="text-danger">*</span>
                    </label>
                    <select
                      name="country"
                      id="country-field"
                      className="form-control"
                      onChange={handleChange}
                      value={country}
                    >
                      {countries.map((country) => (
                        <option value={country.name} key={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      {t('professionalEmail')} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={handleChange}
                      value={email}
                      required
                    />
                    {submitted && !emailValid && (
                      <p className="text-danger">{t('errorMessage')}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone-field" className="pb-2">
                      {t('phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control"
                      onChange={handleChange}
                      value={phone}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="activity-field" className="pb-2">
                      {t('activitySector')}
                    </label>
                    <select
                      name="activity"
                      id="activity-field"
                      className="form-control"
                      onChange={handleChange}
                      value={activity}
                    >
                      {activities.map((activity) => (
                        <option value={activity.name} key={activity.code}>
                          {activity.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="call-field" className="pb-2">
                      {t('want')}
                    </label>
                    <select
                      name="call"
                      id="call-field"
                      className="form-control"
                      onChange={handleChange}
                      value={call}
                    >
                      {calls.map((call) => (
                        <option value={call.name} key={call.code}>
                          {call.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      {t('message')} <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="6"
                      onChange={handleChange}
                      value={message}
                      required
                    ></textarea>
                    {submitted && !messageValid && (
                      <p className="text-danger">{t('errorMessage')}</p>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="privacy" className="pb-2">
                      <input
                        type="checkbox"
                        name="privacy"
                        id="privacy"
                        required
                      />{" "}
                      {t('privacy')}
                    </label>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="mailing" className="pb-2">
                      <input
                        type="checkbox"
                        name="mailing"
                        id="mailing"
                      />{" "}
                      {t('mailingPermission')}
                    </label>
                  </div>
                  <div className="col-md-12">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="YOUR_RECAPTCHA_SITE_KEY"
                      onChange={onReCAPTCHAChange}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={submitted}
                    >
                      {submitted ? t('sending') : t('send')}
                    </button>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'newsletter', 'header', 'footer']),
  },
});

export default Contact;
