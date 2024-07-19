import { useState } from 'react';
import styles from '@/styles/app.module.css';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation('faq');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = t('questions', { returnObjects: true });

  return (
    <div>
      <section id="faq-2" className={` ${styles.section} ${styles.faq_2} `}>
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <center>
            <h2>{t('title')}</h2>
          </center>
          <p>{t('info')}</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-md-6 ${styles.faq_2}`}>
              <div className={`accordion ${styles.faq_container}`} id="accordionExample1">
                {questions.slice(0, 3).map((question, index) => (
                  <div key={index} className={`accordion-item py-3 ${styles.faq_item} ${activeIndex === index ? styles.faq_active : ''}`}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h3>{question.question}</h3>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                      <div className="accordion-body">{question.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`col-md-6 ${styles.faq_2}`}>
              <div className={`accordion ${styles.faq_container}`} id="accordionExample2">
                {questions.slice(3).map((question, index) => (
                  <div key={index + 3} className={`accordion-item py-3 ${styles.faq_item} ${activeIndex === index + 3 ? styles.faq_active : ''}`}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === index + 3 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(index + 3)}
                      >
                        <h3>{question.question}</h3>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeIndex === index + 3 ? 'show' : ''}`}>
                      <div className="accordion-body">{question.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
