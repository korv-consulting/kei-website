import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import FunctionalityPageHeader from 'pages/component/featuresDetails/FunctionalityPageHeader'
import styles from "@/styles/app.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function FormDemo() {
 const { t } = useTranslation('demoContact'); // Assurez-vous que 'common' est le namespace utilisé pour vos traductions
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [recaptcha, SetRecaptcha] = useState(false);
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
    date: "", // Nouveau champ pour la date
    time: "" // Nouveau champ pour l'heure
  });
  const [successMessage, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const regex = /^[a-z]+[a-z0-9]+@[a-z]+\.(com|net|org|edu|gov)$/i;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      setEmailValid(regex.test(value));
    }

    if (name === "message") {
      setMessageValid(value.trim() !== "");
    }
  };

  const handleChangeRecaptcha = () => {
    SetRecaptcha(true);
    setSubmitted(false);
  };

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) return;
    handleChangeRecaptcha();
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
        body: formData
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
          date: "",
          time: ""
        });
        recaptchaRef.current.reset();
      } else {
        setError(true);
      }
      setSubmitted(false);
    } else {
      if (!emailValid) setEmailValid(false);
      if (!message.trim()) setMessageValid(false);
    }
  };

   const handlePhoneChange = (value) => {
        setForm({ ...form, phone: value });
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

  const recaptchaRef = useRef();
  const source1 = '/contact.jpg';
  const title1 = t('contact.title'); // Utilisez la traduction pour le titre

  return (
    <>
    <Head>
    <title>{t('home.title')}</title>
    <meta name="description" content={t('home.description')} />
    <link rel="icon" href="/logo-kei.png" />
    </Head>
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
                        {t('contact.successMessage')}
                      </div>
                    )}
                    {error && (
                      <div className={styles.error_message}>
                        {t('contact.errorMessage')}
                      </div>
                    )}
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label htmlFor="lastname-field" className="pb-2">
                          {t('contact.fields.lastname')}
                          <span className="text-danger">*</span>
                        </label>
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
                        <label htmlFor="name-field" className="pb-2">
                          {t('contact.fields.name')}
                          <span className="text-danger">*</span>
                        </label>
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
                          {t('contact.fields.business')} <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="business"
                          id="business-field"
                          className={`form-control ${submitted && (emailValid ? "is-valid" : "is-invalid")}`}
                          required
                          onChange={handleChange}
                          value={form.business}
                        />
                        <div className="invalid-feedback">
                          {t('contact.validation.business')}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email-field" className="pb-2">
                          {t('contact.fields.email')} <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className={`form-control ${submitted && (emailValid ? "is-valid" : "is-invalid")}`}
                          name="email"
                          id="email"
                          required
                          onChange={handleChange}
                          value={form.email}
                        />
                        <div className="invalid-feedback">
                          {t('contact.validation.email')}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="phone-field" className="pb-2">
                          {t('contact.fields.phone')}
                          <span className="text-danger">*</span>
                        </label>
                        <PhoneInput
                            country={'fr'}
                            value={form.phone}
                            onChange={handlePhoneChange}
                            inputClass="form-control"
                            inputProps={{
                                name: 'phone',
                                required: true,
                                className: `form-control w-100 py-2 phoneInput ${submitted && !form.phone ? "is-invalid" : ""}`,
                            }}
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="date-field" className="pb-2">
                          {t('contact.fields.date')}
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date-field"
                          className="form-control"
                          onChange={handleChange}
                          value={form.date}
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="time-field" className="pb-2">
                          {t('contact.fields.time')}
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time-field"
                          className="form-control"
                          onChange={handleChange}
                          value={form.time}
                        />
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="message-field" className="pb-2">
                          {t('contact.fields.message')}
                        </label>
                        <textarea
                          className={`form-control ${submitted && (messageValid ? "is-valid" : "is-invalid")}`}
                          name="message"
                          rows="10"
                          id="message"
                          required
                          onChange={handleChange}
                          value={form.message}
                        ></textarea>
                        <div className="invalid-feedback">
                          {t('contact.validation.message')}
                        </div>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className={styles.loading}> {t('contact.loading')} </div>

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
                                {t('contact.recaptchaError')}
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
                              {submitted ? t('contact.sending') : t('contact.send')}
                            </button>
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
    </>
  );
}

