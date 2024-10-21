// import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Footer from 'components/oldPartials/base/footer'
import Header from 'components/oldPartials/base/header'
import Language from 'components/oldPartials/base/language'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import About from 'components/oldPartials/base/about'
import Offer from 'components/oldPartials/base/offer'
import { Col, Container, Image, Row } from "react-bootstrap"

//import Image from 'next/image'
import stylesplash from '../styles/Splash.module.css'
import React, { useState, useEffect } from 'react'
import Contact from '../components/Contact'


export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  const handleScale = async () => {
    console.log("handleScale...")
    const elemt = document.getElementById("splash")
    if (elemt) {
      //elemt.className += "dot_scale";
    }
  }


  return (
    <>
      {
        loading ?
          (
            <div className={stylesplash.container_splash}>
              <Container>
                <Row className={`mx-auto ${stylesplash.main_splash}`}  >
                  <Col></Col>
                  <Col >
                    <div className={`mx-auto mx-1 `}>
                      <video src="./splash/splash-screen2.mp4" autoPlay muted className="h-[100%] w-[100%] " ></video>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>

            </div>


          )
          : (

            <div className={styles.container}>
              <Head>
                <title>KEI - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="KORV Estatement Inventory" />
                <link rel="icon" href="/logo-kei.png" />
              </Head>

              <Header />
              <Language />
              <main className={styles.main}>
                <Image src='/mini_icon.svg' alt='mini_icon' className={styles.background} />
                <Language />
                <About />
                {/* <MiddleBar /> */}
                <Offer />
                <Contact />
              </main>

              <Footer />
            </div>
          )
      }


    </>
  )

}
