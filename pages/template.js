import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/app.module.css";
import { useEffect, useState } from "react";
import stylesplash from "../styles/Splash.module.css";
import Header from "components/partials/header";
import LandingPage from "components/partials/landingPage";
import Head from "next/head";
import Description from "components/partials/description";
import PricingOffer from "components/partials/pricingOffer";
import NewsLetter from "components/partials/newsLetter";
import Footer from "components/partials/footer";
import Faq from "components/partials/faq";
import Contact from "components/partials/contact";
import Feature from "components/partials/feature";
import ScrollToTopButton from "components/partials/scrollTop";
import Demo from "components/partials/demo";
import Targets from "components/partials/targets"
import FloatingButton from "components/partials/floatingButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PlanComparison from 'components/partials/PlanComparison'
import DownloadApp from "components/partials/DownloadApp";
import CreditPricing from "components/partials/CreditPricing";

export default function Home() {
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // si vrai, l'animation ne se produit qu'une seule fois
    });

    // Simuler le chargement initial
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  const handleScale = async () => {
    console.log("handleScale...");
    const elemt = document.getElementById("splash");
    if (elemt) {
      //elemt.className += "dot_scale";
    }
  };

  return (
    <>
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
      
      </Head>{" "}
      {loading ? (
      

        <div className={stylesplash.container_splash}>
        <Container>
          <Row className={`mx-auto ${stylesplash.main_splash}`}>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <div className={`video_container ${stylesplash.video_container}`}>
                <video
                  src="./splash/splash-screen2.mp4"
                  autoPlay
                  muted
                  className="w-100 h-auto"
                ></video>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      ) : (
        <div className={styles.container}>
          <Header />
          <FloatingButton />
          <LandingPage />
          <Feature />
          <Targets />
          <PricingOffer />
          {/* <CreditPricing /> */}
          <Demo/>
          <DownloadApp/>
          <Faq />
          <Footer />
          <FloatingButton />
          <ScrollToTopButton/>
        </div>
      )}{" "}

    </>
  );
}

export async function getServerSideProps(ctx){
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     }
//   };

//   const offers  = await fetch(
//     `http://kei-app-back.local/pricing-offers`,
//     options
//   );
//   const response = await offers.json();
  const response = [];
//   console.log("offers ****" , response)


  return {
    props:{
      offers:response
    }
  }
}




