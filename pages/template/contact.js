import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contact() {
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(true);
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
  const title1 = t('contact.title');

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
                {t('contact.description')}
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
                      {t('contact.success_message')}
                    </div>
                  )}
                  {error && (
                    <div className={styles.error_message}>
                      {t('contact.error_message')}
                    </div>
                  )}
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="lastname-field" className="pb-2">{t('contact.form.last_name')}</label>
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
                      <label htmlFor="name-field" className="pb-2">{t('contact.form.first_name')}</label>
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
                      <label htmlFor="business-field" className="pb-2">{t('contact.form.company')}</label>
                      <input
                        type="text"
                        name="business"
                        id="business-field"
                        className="form-control"
                        onChange={handleChange}
                        value={form.business}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="country-field" className="pb-2">{t('contact.form.country')}</label>
                      <select
                        name="country"
                        id="country-field"
                        className="form-select"
                        onChange={handleChange}
                        value={form.country}
                      >
                        <option value="">{t('contact.form.country')}</option>
                        {countries.map((country) => (
                          <option key={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="activity-field" className="pb-2">{t('contact.form.sector')}</label>
                      <select
                        name="activity"
                        id="activity-field"
                        className="form-select"
                        onChange={handleChange}
                        value={form.activity}
                      >
                        <option value="">{t('contact.form.sector')}</option>
                        {activities.map((activity) => (
                          <option key={activity.code} value={activity.name}>
                            {activity.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        name="email"
                        id="email-field"
                        className={`form-control ${submitted && !emailValid && 'is-invalid'}`}
                        onChange={handleChange}
                        value={form.email}
                        required
                      />
                      {submitted && !emailValid && (
                        <div className="invalid-feedback">
                          {t('contact.form.email')} {t('contact.form.required')}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone-field" className="pb-2">{t('contact.form.phone')}</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone-field"
                        className="form-control"
                        onChange={handleChange}
                        value={form.phone}
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">{t('contact.form.message')}</label>
                      <textarea
                        name="message"
                        id="message-field"
                        className={`form-control ${submitted && !messageValid && 'is-invalid'}`}
                        onChange={handleChange}
                        value={form.message}
                        required
                      />
                      {submitted && !messageValid && (
                        <div className="invalid-feedback">
                          {t('contact.form.message')} {t('contact.form.required')}
                        </div>
                      )}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="call-field" className="pb-2">{t('contact.form.choose_date')}</label>
                      <input
                        type="datetime-local"
                        name="call"
                        id="call-field"
                        className="form-control"
                        onChange={handleChange}
                        value={form.call}
                      />
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="privacy-field"
                          name="privacy"
                          required
                        />
                        <label className="form-check-label" htmlFor="privacy-field">
                          {t('contact.form.privacy_policy')}
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="newsletter-field"
                          name="newsletter"
                        />
                        <label className="form-check-label" htmlFor="newsletter-field">
                          {t('contact.form.newsletter')}
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <ReCAPTCHA
                        sitekey="your-site-key"
                        onChange={handleRecaptchaChange}
                        ref={recaptchaRef}
                      />
                    </div>
                    <div className="col-md-12 text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitted}
                      >
                        {t('contact.form.send')}
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
    ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'newsletter'])),
  },
});