import { Button, Col, Container, Image, Row } from "react-bootstrap"
import styles from '@/styles/Footer.module.css'

// #03dac5 : Couleur vert citron
// #def4ff : Background de Nos Offres
// #11467e : Couleur bleu foncé

function Footer() {

    let widthScreen = window.innerWidth

    console.log(widthScreen)

    return(
        <>

          <div className={`container-fluid pt-2 ${styles.container}`}>
            <footer className="pb-4 pt-5">

              <div className="row">

                <div className="col-md-2 mb-3">
                  {/* First Column */}
                </div>

                <div className="col-md-2 mb-3">
                  {/* Second Column */}
                </div>

                <div className="col-md-2 mb-3">
                 {/* Third Column */}
                </div>

                <div className={`col-md-5 offset-md-1 mb-2 ${styles.download_section}`}>

                    <div className="d-flex justify-content-center">
                      <Image src="/devices.png" className="w-50"/>
                    </div>
                    <p className={`text-center mt-2 mb-3 ${styles.text_app}`}>
                      L'application KEI est disponible sur toutes les plateformes
                    </p>

                    <div className="d-flex justify-content-center my-2 px-2">
                      <Button className={`py-3 w-100 ${styles.download_btn}`}>Télécharger</Button>
                    </div>
                    
                    <div className={`d-flex flex-sm-row justify-content-center ${styles.store} px-2`}>
                      <Button className={`py-2 w-50 ${styles.store_btn}`}>
                        <div className={`row`}>
                          <div className={`col-4 d-flex justify-content-center`}>
                            <Image src='/app-store.svg' className={`my-2`}/>
                          </div>
                          <div className={`col-8`}>
                            <span className={`text-center text-nowrap ${styles.store_title}`}>
                              Télécharger sur 
                            </span><br/>
                            <label className={`text-nowrap ${styles.store_name}`}>App Store</label>
                          </div>
                        </div>
                      </Button>

                      <Button className={`py-2 w-50 ${styles.store_btn}`}>
                        <div className={`row`}>
                          <div className={`col-4 d-flex justify-content-center`}>
                            <Image src='/playstore.svg' className={`my-2`}/>
                          </div>
                          <div className={`col-8`}>
                            <span className={`text-center text-nowrap ${styles.store_title}`}>
                              Télécharger sur 
                            </span><br/>
                            <label className={`text-nowrap ${styles.store_name}`}>Playstore</label>
                          </div>
                        </div>
                      </Button>

                    </div>
                </div>

              </div>

              {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3">dddf</li>
                </ul>
              </div> */}
            </footer>

          </div>
        </>
    )
}

export default Footer