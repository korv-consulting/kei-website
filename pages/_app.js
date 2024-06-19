import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@/styles/globals.css'
import { useEffect } from 'react';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {




   useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);




  return <>
  <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title> KEI Website </title> <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link rel="icon" href="/logo-kei.png" />
        <link
          href="./../public/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      
      </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
