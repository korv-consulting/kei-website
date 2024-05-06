import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/app.module.css";
import { useEffect, useState } from "react";
import stylesplash from "../styles/Splash.module.css";
import Header from "components/partials/header";
import LandingPage from "components/partials/landingPage";
import Head from "next/head";
import About from "components/partials/about";
import Description from "components/partials/description";
import PricingOffer from "components/partials/pricingOffer";
import NewsLetter from "components/partials/newsLetter";
import Footer from "components/partials/footer";
import Faq from "components/partials/faq";
import Contact from "components/partials/contact";
import Feature from "components/partials/feature";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

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
        <link href="./../public/img/favicon.png" rel="icon" />
        <link
          href="./../public/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>{" "}
      {loading ? (
        <div className={stylesplash.container_splash}>
          <Container>
            <Row className={`mx-auto ${stylesplash.main_splash}`}>
              <Col> </Col>{" "}
              <Col>
                <div className={`mx-auto mx-1 `}>
                  <video
                    src="./splash/splash-screen2.mp4"
                    autoPlay
                    muted
                    className="h-[100%] w-[100%]"
                  ></video>{" "}
                </div>{" "}
              </Col>{" "}
              <Col> </Col>{" "}
            </Row>{" "}
          </Container>{" "}
        </div>
      ) : (
        <div className={styles.container}>
          <Header />
          <LandingPage />
          <About />
          <Description />
          <PricingOffer />
          <Feature />
          <Faq />
          <Contact />
          <Footer />
        </div>
      )}{" "}
    </>
  );
}

// export async function getServerSideProps(ctx){
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
//   console.log("offers ****" , response)


//   return {
//     props:{
//       offers:response
//     }
//   }
// }
