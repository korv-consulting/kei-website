import Footer from 'components/oldPartials/base/footer'
import Header from 'components/oldPartials/base/header'
import Language from 'components/oldPartials/base/language'
import Head from 'next/head'
import React, { useState, useEffect } from 'react' 
import { Col, Container, Image, Row } from "react-bootstrap"
import SigninComponent from '../components/auth/signin/signin-component'
import styles from '../styles/Signin-Component.module.css'
import stylesplash from '../styles/Splash.module.css'


export default function Signin() {
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })



  return (
    <>
      {
        loading ?
          (  <div className={stylesplash.container_splash}>
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
                <meta name="description" content="KORV Estatement Inventory" />
                <link rel="icon" href="/logo-kei.png" />
              </Head>

              <Header />
              <main className={styles.main}>
                <Image src='/mini_icon.svg' className={styles.background} />
                <Language />
                <SigninComponent /> 

                

              </main>   

              <Footer /> 
            </div>
          )
      }


    </>
  )

}
