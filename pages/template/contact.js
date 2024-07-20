import Head from 'next/head';
import { Col, Container, Image, Row } from "react-bootstrap";
import Header from '../component/header';
import Footer from '../component/footer';
import styles from "@/styles/app.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Recaptcha from '../../components/Recaptcha';
import React, { useState, useEffect , useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import countries from "../api/country";
import activities from "../api/activity";
import calls from "../api/call";
import FunctionalityPageHeader from '../../components/partials/featuresDetails/FunctionalityPageHeader';
import { useTranslation } from 'next-i18next';

export default function Contact() {
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

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
  const regex = /^[a-z]+[a-z0-9]+@[a-z]+\.(com|net|org|edu|gov)$/i;

  const handleChangeRecaptcha = () => {
    SetRecaptcha(true);     
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
  const title1 = t('contact_us');

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
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 justify-content-center">
                <p className="text-center mt-5 pt-5 ">{t('send_message')}</p>
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
                        {t('success_message')}
                      </div>
                    )}
                    {error && (
                      <div className={styles.error_message}>
                        {t('error_message')}
                      </div>
                    )}
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label htmlFor="lastname-field" className="pb-2">
                          {t('first_name')}
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
                        <label htmlFor="name-field" className="pb-2">
                          {t('last_name')}
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
                        <label htmlFor="business-field" className="pb-2">
                          {t('company')} <span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          name="business"
                          id="business-field"
                          className="form-control"
                          onChange={handleChange}
                          value={business}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email-field" className="pb-2">
                          {t('professional_email')}{" "}
                          <span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="email"
                          name="email"
                          id="email-field"
                          className={`form-control ${
                            emailValid === false && submitted === true
                              ? "is-invalid"
                              : ""
                          }`}
                          onChange={handleChange}
                          value={email}
                          required
                        />
                        {submitted && !emailValid && (
                          <div className="invalid-feedback d-block">
                            {t('error_message')}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone-field" className="pb-2">
                          {t('phone')} <span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          name="phone"
                          id="phone-field"
                          className="form-control"
                          onChange={handleChange}
                          value={phone}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="country-field" className="pb-2">
                          {t('country')} <span className="text-danger">*</span>
                        </label>{" "}
                        <select
                          className="form-control"
                          name="country"
                          onChange={handleChange}
                          value={country}
                          required
                        >
                          <option value="">{t('country')}</option>
                          {countries.map((item, index) => (
                            <option value={item.name} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="activity-field" className="pb-2">
                          {t('activity_sector')}{" "}
                          <span className="text-danger">*</span>
                        </label>{" "}
                        <select
                          className="form-control"
                          name="activity"
                          onChange={handleChange}
                          value={activity}
                          required
                        >
                          <option value="">{t('activity_sector')}</option>
                          {activities.map((item, index) => (
                            <option value={item.name} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="message-field" className="pb-2">
                          {t('message')} <span className="text-danger">*</span>
                        </label>{" "}
                        <textarea
                          className={`form-control ${
                            messageValid === false && submitted === true
                              ? "is-invalid"
                              : ""
                          }`}
                          name="message"
                          id="message-field"
                          rows="6"
                          onChange={handleChange}
                          value={message}
                          required
                        ></textarea>
                        {submitted && !messageValid && (
                          <div className="invalid-feedback d-block">
                            {t('error_message')}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="my-3">
                      <ReCAPTCHA
                        sitekey="6Lc9y0UmAAAAADQkIGvF9CsdSRoqDsrmL9RzhhpM"
                        ref={recaptchaRef}
                        onChange={onReCAPTCHAChange}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={submitted}
                        className="btn btn-primary"
                      >
                        {submitted ? t('sending') : t('send')}
                      </button>
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
  );
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer','header',])),
    },
  };
}
