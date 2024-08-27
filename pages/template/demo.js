import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from 'pages/component/header';
import Footer from 'pages/component/footer';
import FormDemo from 'pages/component/formDemo';
import DownloadApp from 'pages/component/DownloadApp';

export default function Demo() {
  return (
    <>
      <Header />
      <FormDemo />
      <DownloadApp />
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['demoContact','formContact', 'header', 'footer', 'newsletter', 'downloadApp'])),
  },
});
