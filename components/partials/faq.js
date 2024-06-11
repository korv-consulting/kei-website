import { useState } from 'react';
import styles from '@/styles/app.module.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section id="faq-2" className={` ${styles.section} ${styles.faq_2} `}>
        {/* <!-- Section Title --> */}
        <div className={`container ${styles.section_title}`} data-aos="fade-up">
          <h2>Besoin d'aide ?</h2>
          <p>Voici quelques questions qui sont fréquemment posées</p>
        </div>
        {/* <!-- End Section Title --> */}

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
                    <div
                      className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                    >
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
                    <div
                      className={`accordion-collapse collapse ${activeIndex === index + 3 ? 'show' : ''}`}
                    >
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

const questions = [
  {
    question: "Qu'est-ce que notre plateforme d'inspection et d'inventaire de propriété simplifiée ?",
    answer: "Notre plateforme permet de créer des rapports d'inspections détaillés, incluant l'état de la propriété, des photos et des problèmes, directement depuis votre mobile ou tablette grâce à notre application d'inspection."
  },
  {
    question: "Quels types d'inspections puis-je réaliser avec votre application ?",
    answer: "Vous pouvez réaliser des inventaires professionnels, des enregistrements, des départs, des inspections intermédiaires, des inspections de bâtiments, des évaluations de risques, et bien plus encore."
  },
  {
    question: "Comment vos services sont-ils facturés ?",
    answer: "Nous offrons plusieurs plans tarifaires adaptés aux besoins des particuliers et des professionnels, incluant des options d'abonnement mensuel et annuel. Vous pouvez consulter notre page de tarification pour plus de détails."
  },
  {
    question: "Vos rapports d'inspection sont-ils conformes aux normes du secteur immobilier ?",
    answer: "Oui, nos rapports sont conçus pour être conformes aux normes et réglementations du secteur immobilier, garantissant des enregistrements précis et fiables."
  },
  {
    question: "Quels sont les avantages d'utiliser votre plateforme pour les professionnels de l'immobilier ?",
    answer: "Notre plateforme simplifie la création de rapports d'inspection, améliore la précision des enregistrements, et permet de gérer les inspections de manière efficace et professionnelle, ce qui vous fait gagner du temps et améliore la satisfaction de vos clients."
  },
  {
    question: "Est-ce que votre plateforme est sécurisée ?",
    answer: "Oui, la sécurité de vos données est notre priorité. Nous utilisons des protocoles de sécurité avancés, incluant le chiffrement des données, pour protéger vos informations et garantir leur confidentialité."
  },
];

export default Faq;
