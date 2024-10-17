import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import Header from 'pages/component/header';
import Footer from 'pages/component/footer';
import styles from "@/styles/app.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FormContact from "pages/component/formContact";
import FunctionalityPageHeader from "pages/component/featuresDetails/FunctionalityPageHeader";

export default function Contact() {

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>KEI - Contact</title>
          <meta name="description" content="Contactez-nous pour toute information supplémentaire." />
          <link rel="icon" href="/logo-kei.png" />
        </Head>

        <Header />

        <FormContact/>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'newsletter', 'switchBtn'])),
  },
});
