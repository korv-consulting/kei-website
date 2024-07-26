import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from 'pages/component/header';
import Footer from 'pages/component/footer';
import FormDemo from 'pages/component/formDemo';
import styles from "@/styles/app.module.css";

export default function Demo() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <FormDemo />
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['formContact', 'header', 'footer', 'newsletter'])),
  },
});
