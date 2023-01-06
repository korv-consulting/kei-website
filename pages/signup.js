// import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Footer from '@/partials/base/footer'
import Header from '@/partials/base/header'
import Language from '@/partials/base/language'
import Head from 'next/head'
import styles from '@/styles/Home.module.css' 
import StepOneSignup from '../components/auth/signup/step-one'

import { Image } from 'react-bootstrap'

//import Image from 'next/image'
import stylesplash from '../styles/Splash.module.css'
import React, { useState, useEffect } from 'react' 
import Logo from "../components/Logo"
import ProgressBar from "../components/ProgressBar"


export default function Signup() {
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
          (<div className={stylesplash.App}>

            <div className={stylesplash.parent} >
              <div className={stylesplash.dot} onLoad={(e) => handleScale()} >
              </div>

              <div className={stylesplash.boxsplash}>
                <Logo />
                <ProgressBar />
                <div className={stylesplash.description}>
                  <p>
                    Petite description sur l'entreprise <br />
                    ou simple ou simple message d'accueil
                  </p>
                </div>
              </div>

            </div> 
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
                <StepOneSignup /> 
                
                


              </main>

              <Footer /> 
            </div>
          )
      }


    </>
  )

}
