import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ReCAPTCHA from "react-google-recaptcha";
import Header from 'pages/component/header';
import Footer from 'pages/component/footer';
import FunctionalityPageHeader from 'pages/component/featuresDetails/FunctionalityPageHeader';
import SwitchButtonPartenariat from 'pages/component/SwitchButtonPartenariat';
import styles from "@/styles/app.module.css";
import countries from "pages/api/country";
import activities from "pages/api/activity";
import calls from "pages/api/call";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const {t} = useTranslation('common')
  const [showInfo, setShowInfo] = useState(true);
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
  const recaptchaRef = useRef(null);
  const regex = /^[a-z]+[a-z0-9]+@[a-z]+\.(com|net|org|edu|gov)$/i;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (successMessage || error) {
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 2000);
    }
  }, [successMessage, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "email") {
      setEmailValid(regex.test(value));
    }
    if (name === "message") {
      setMessageValid(value.trim() !== "");
    }
  };

  const handleRecaptchaChange = (captchaCode) => {
    if (captchaCode) {
      setRecaptcha(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const { email, message } = form;
    if (emailValid && message && recaptcha) {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }

      const response = await fetch(`/api/contact`, {
        method: "POST",
        body: formData,
      });

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
        recaptchaRef.current.reset();
      } else {
        setError(true);
      }
      setSubmitted(false);
    }
  };

  const source1 = '/contact.jpg';
  const title1 = 'CONTACTEZ-NOUS !';

  return (
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
            <FunctionalityPageHeader title={title1} source={source1} />
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <p className="text-center mt-5 pt-5">
                {t('description')}
              </p>
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
                      <label htmlFor="lastname-field" className="pb-2">{t('first_name')}</label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname-field"
                        className="form-control"
                        onChange={handleChange}
                        value={form.lastname}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">{t('last_name')}</label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        className="form-control"
                        onChange={handleChange}
                        value={form.name}
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
                        className={`form-control ${submitted && !form.business ? "is-invalid" : ""}`}
                        required
                        onChange={handleChange}
                        value={form.business}
                      />
                      <div className="invalid-feedback">Nom de l'entreprise non renseigné</div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="country-field" className="pb-2">
                        {t('country')} <span className="text-danger">*</span>
                      </label>
                      <select
                        className={`form-select ${submitted && !form.country ? "is-invalid" : ""}`}
                        id="country"
                        name="country"
                        required
                        onChange={handleChange}
                        value={form.country}
                      >
                        {countries.map((country, index) => (
                          <option key={index} value={country}>{country}</option>
                        ))}
                      </select>
                      <div className="invalid-feedback">Pays non renseigné</div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">
                        {t('email')} <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${submitted && !emailValid ? "is-invalid" : ""}`}
                        name="email"
                        id="email"
                        required
                        onChange={handleChange}
                        value={form.email}
                      />
                      <div className="invalid-feedback">Adresse mail invalide</div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone-field" className="pb-2">{t('phone')}</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone-field"
                        className="form-control"
                        onChange={handleChange}
                        value={form.phone}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="activity-field" className="pb-2">
                        {t('sector')} <span className="text-danger">*</span>
                      </label>
                      <select
                        className={`form-select ${submitted && !form.activity ? "is-invalid" : ""}`}
                        id="activity-field"
                        name="activity"
                        required
                        onChange={handleChange}
                        value={form.activity}
                      >
                        {activities.map((activity, index) => (
                          <option key={index} value={activity}>{activity}</option>
                        ))}
                      </select>
                      <div className="invalid-feedback">Secteur d'activité non renseigné</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject-field" className="pb-2">Je souhaite:</label>
                      <SwitchButtonPartenariat setShowInfo={setShowInfo} />
                    </div>
                    {showInfo ? (
                      <>
                        <div className="col-md-12">
                          <label htmlFor="message-field" className="pb-2">
                            {t('message')} <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className={`form-control ${submitted && !messageValid ? "is-invalid" : ""}`}
                            name="message"
                            id="message"
                            rows="6"
                            required
                            onChange={handleChange}
                            value={form.message}
                          ></textarea>
                          <div className="invalid-feedback">Message non renseigné</div>
                        </div>
                        <div className="col-12 pb-2">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="yes" id="privacy" name="privacy"/>
                            <label class="form-check-label" for="privacy">
                                {t('privacy_policy')}
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="yes" id="mailing" name="mailing"/>
                            <label class="form-check-label" for="mailing">
                            {t('newsletter')}
                            </label>
                            </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-12">
                        <label htmlFor="message-field" className="pb-2">
                          {t('message')} <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className={`form-control ${submitted && !messageValid ? "is-invalid" : ""}`}
                          name="message"
                          id="message"
                          rows="6"
                          required
                          onChange={handleChange}
                          value={form.message}
                        ></textarea>
                        <div className="invalid-feedback">Message non renseigné</div>
                      </div>
                      <div className="col-12">
                          <label for="country-field" className="pb-2">
                          {t('how')}
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
                              {t('privacy_policy')}
                          </label>
                          </div>
                          <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="yes" id="mailing" name="mailing"/>
                          <label class="form-check-label" for="mailing">
                          {t('newsletter')}
                          </label>
                          </div>
                      </div>
                      </>
                    )}
                    <div className="col-12">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaChange}
                        className="mt-3 mb-4"
                      />
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary rounded-pill py-3 px-5">
                        {t('send')}
                      </button>
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
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'newsletter', 'switchBtn'])),
  },
});
