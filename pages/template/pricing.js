// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import Header from 'components/partials/header';
// import Footer from 'components/partials/footer';
// import SVGComponent from 'components/partials/SvgComponent';
// import styles from '@/styles/features/FunctionalityPage.module.css';

// const PricingOffer = dynamic(() => import('components/partials/pricingOffer'), {
//   ssr: false,
//   loading: () => <SVGComponent />,
// });

// const Pricing = () => {
//   return (
//     <>
//       <Head>
//         <meta charSet="utf-8" />
//         <meta content="width=device-width, initial-scale=1.0" name="viewport" />
//         <title>KEI Website</title>
//         <meta content="" name="description" />
//         <meta content="" name="keywords" />
//         <link rel="icon" href="/logo-kei.png" />
//         <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@20..48&display=swap" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//       </Head>
//       <Header />
//       <div className={`${styles.pageContainer} mt-5`}>
//         <PricingOffer />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Pricing;





import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from 'components/partials/header';
import Footer from 'components/partials/footer';
// import Spinner from 'components/common/Spinner';

import SVGComponent from 'components/partials/SvgComponent';

import styles from '@/styles/PricingPage.module.css';

const PricingOffer = dynamic(() => import('components/partials/pricingOffer'), {
  ssr: false,
});

const Pricing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className={`${styles.pageContainer} mt-5`}>
        {loading ? (
          <div className={styles.spinnerContainer}>
            <SVGComponent />
          </div>
        ) : (
          
          <PricingOffer />
          
        )}
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
