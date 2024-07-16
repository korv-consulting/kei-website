import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import ReCAPTCHA from 'react-google-recaptcha';
import countries from 'pages/api/country';
import activities from 'pages/api/activity';
import calls from 'pages/api/call';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from '@/styles/app.module.css';
import Header from 'components/partials/header';
import Footer from 'components/partials/footer';
import FunctionalityPageHeader from 'components/partials/featuresDetails/FunctionalityPageHeader';

export default function Contact() {
  const [Phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const [recaptcha, setRecaptcha] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    lastname: '',
    name: '',
    business: '',
    country: '',
    activity: '',
    email: '',
    message: '',
    call: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })


  const recaptchaRef = useRef();

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

  const handleChange = (value, name) => {
    setPhone(value); // mise à jour de l'état du téléphone
    setForm({ ...form, [name]: value }); // mise à jour du formulaire

    // Validation spécifique aux champs, par exemple pour l'email et le message
    if (name === 'email') {
      if (regex.test(value)) {
        setEmailValid(true);
        setSubmitted(false);
      } else {
        setEmailValid(false);
        setSubmitted(true);
      }
    }
    if (name === 'message') {
      if (value.trim()) {
        setMessageValid(true);
        setSubmitted(false);
      } else {
        setMessageValid(false);
        setSubmitted(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (regex.test(form.email) && form.message && recaptcha) {
      const formData = new FormData();
      formData.append('lastname', form.lastname);
      formData.append('name', form.name);
      formData.append('business', form.business);
      formData.append('country', form.country);
      formData.append('phone', Phone); // Utilisation du numéro de téléphone mis à jour
      formData.append('email', form.email);
      formData.append('activity', form.activity);
      formData.append('call', form.call);
      formData.append('message', form.message);

      try {
        const response = await fetch(`/api/contact`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setSuccessMessage(true);
          setForm({
            lastname: '',
            name: '',
            business: '',
            country: '',
            activity: '',
            email: '',
            message: '',
            call: '',
          });
          setSubmitted(false);
          setErrorMessage(false);
          recaptchaRef.current.reset();
        } else {
          setSubmitted(false);
          setErrorMessage(true);
          setSuccessMessage(false);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitted(false);
        setErrorMessage(true);
        setSuccessMessage(false);
      }
    } else {
      if (!regex.test(form.email)) {
        setEmailValid(false);
      }
      if (!form.message.trim()) {
        setMessageValid(false);
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    }
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    }
  }, [successMessage, errorMessage]);

  const source1 = '/contact.jpg';
  const title1 = 'CONTACTEZ-NOUS !';

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>KEI - Contact</title>
          <meta name="description" content="Contactez-nous pour toute information supplémentaire." />
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
                <p className="text-center mt-5 pt-5 ">
                  Envoyez-nous un e-mail avec ce petit formulaire pratique. <br /> Nous vous attendons impatiemment !
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
                    {successMessage && <div className={styles.sent_message}>Votre message a été envoyé. Merci !</div>}
                    {errorMessage && <div className={styles.error_message}>Une erreur est survenue. Veuillez réessayer.</div>}
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label htmlFor="lastname-field" className="pb-2">
                          Prénom <span className="text-danger">*</span>
                        </label>{' '}
                        <input
                          type="text"
                          name="lastname"
                          id="lastname-field"
                          className="form-control"
                          onChange={(e) => handleChange(e.target.value, 'lastname')}
                          value={form.lastname}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="name-field" className="pb-2">
                          Nom <span className="text-danger">*</span>
                        </label>{' '}
                        <input
                          type="text"
                          name="name"
                          id="name-field"
                          className="form-control"
                          onChange={(e) => handleChange(e.target.value, 'name')}
                          value={form.name}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="business-field" className="pb-2">
                          Entreprise
                        </label>{' '}
                        const [recaptcha, SetRecaptcha] = useState(false);
                        <input
                          type="text"
                          name="business"
                          id="business-field"
                          className={`form-control ${submitted && (emailValid ? 'is-valid' : 'is-invalid')}`}
                          onChange={(e) => handleChange(e.target.value, 'business')}
                          value={form.business}
                        />
                        <div className="invalid-feedback">Nom de l'entreprise non renseigné</div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="country-field" className="pb-2">
                          Pays <span className="text-danger">*</span>
                        </label>{' '}
                        <select
                          className={`form-select ${submitted && (emailValid ? 'is-valid' : 'is-invalid')}`}
                          aria-label="Default select example"
                          id="country"
                          name="country"
                          required
                          onChange={(e) => handleChange(e.target.value, 'country')}
                          value={form.country}
                        >
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Pays non renseigné</div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email-field" className="pb-2">
                          Email <span className="text-danger">*</span>
                        </label>{' '}
                        <input
                          type="email"
                          className={`form-control ${submitted && (emailValid ? 'is-valid' : 'is-invalid')}`}
                          name="email"
                          id="email"
                          required
                          onChange={(e) => handleChange(e.target.value, 'email')}
                          value={form.email}
                        />
                        <div className="invalid-feedback">Adresse mail invalide</div>
                      </div>


                      <div className="col-md-6">
                        <label htmlFor="phone-field" className="pb-2">
                          Portable <span className="text-danger">*</span>
                        </label>{' '}
                        <PhoneInput
                          id="phone-field"
                          name="phone"
                          className="form-control"
                          country={'cm'}
                          value={Phone}
                          onChange={(value) => handleChange(value, 'phone')}
                          preferredCountries={['us','fr', 'gb']}
                        />
                      </div>


                      
                      <div className="col-md-6">
                        <label htmlFor="activity-field" className="pb-2">
                          Activité
                        </label>{' '}
                        <select
                          className={`form-select ${submitted && (emailValid ? 'is-valid' : 'is-invalid')}`}
                          aria-label="Default select example"
                          id="activity"
                          name="activity"
                          required
                          onChange={(e) => handleChange(e.target.value, 'activity')}
                          value={form.activity}
                        >
                          {activities.map((activity, index) => (
                            <option key={index} value={activity}>
                              {activity}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Activité non renseignée</div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="call-field" className="pb-2">
                          Comment avez-vous eu connaissance de nous ?
                        </label>{' '}
                        <select
                          className={`form-select ${submitted && (emailValid ? 'is-valid' : 'is-invalid')}`}
                          aria-label="Default select example"
                          id="call"
                          name="call"
                          required
                          onChange={(e) => handleChange(e.target.value, 'call')}
                          value={form.call}
                        >
                          {calls.map((call, index) => (
                            <option key={index} value={call}>
                              {call}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Champ de saisie incorrect</div>
                      </div>

                      
                      <div className="col-md-12">
                        <label htmlFor="message-field" className="pb-2">
                          Message <span className="text-danger">*</span>
                        </label>{' '}
                        <textarea
                          className={`form-control ${submitted && (messageValid ? 'is-valid' : 'is-invalid')}`}
                          name="message"
                          id="message"
                          rows="8"
                          required
                          onChange={(e) => handleChange(e.target.value, 'message')}
                          value={form.message}
                        />
                        <div className="invalid-feedback">Message manquant</div>
                      </div>
                      <div className="col-md-12 text-center">
		       <ReCAPTCHA
			  ref={recaptchaRef}
			  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
			  onChange={onReCAPTCHAChange}
			/>

                        <button type="submit" className="btn rounded-pill my-2 btn-primary">
                          Envoyer le message
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
    </>
  );
}
