import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import FunctionalityPageHeader from 'pages/component/featuresDetails/FunctionalityPageHeader';
import styles from '@/styles/app.module.css';
import Image from 'next/image';
import 'react-phone-input-2/lib/style.css';

export default function FormDemo() {
  const { t } = useTranslation('demoContact'); 
  const source1 = '/contact.jpg';
  const title1 = t('contact.title'); 

  console.log(title1);

  return (
    <>
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
                <div className="col-lg-8">
                  <div className="meetings-iframe-container" data-src="https://outlook.office.com/bookwithme/user/3a616dd1f5254eafabe863b59f0fc5da@korv-consulting.fr/meetingtype/Lpp4Jr73ykCyzAxosTt84g2?anonymous&ep=mlink"></div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <Image src="/building.jpg" className={styles.sitename} width={800} height={1450} alt="KEI Logo" />
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
