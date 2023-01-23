import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/Step-one-signup.module.css"
import React, { useState, useEffect } from 'react'
import Stepper from "components/Stepper"

function StepOneSignup({next,preview}) {


 
    return (  
        <>
            <Image fluid src="/signup/immeuble2.png" className={styles.background} alt="Sky Crappers" />
            <div className={styles.global_box}>
                <Row className={styles.global_row}>

                    <Col sm={2} ></Col>
                    <Col sm={8} className={styles.box}> 
                        <div className={styles.bigcontainer}>
                            <div className={styles.titlecontainer}>Veuillez choisir le profil  qui vous correspond  </div>
                            <div className={styles.flexcontainer}>
                                <div className={styles.imgleft}>
                                    <div className={styles.imgleft_card}>
                                        <Image src='/signup/1.png' className={styles.img1_arrow} />
                                        <Image src='/signup/2.png' className={styles.img2_arrow} />

                                    </div>

                                    <div className={styles.subtitleleft} onClick={()=>{next(1)}}  > 
                                        <center>
                                            <div className={styles.txtleleft} >Particulier</div>
                                        </center>
                                    </div>
                                </div>
                                <div className={styles.imgright}>
                                    <div className={styles.imgright_card}>
                                        <Image src='/signup/3.png' className={styles.img3_arrow} />
                                        <Image src='/signup/4.png' className={styles.img4_arrow} />
                                        <Image src='/signup/5.png' className={styles.img5_arrow} />

                                    </div>

                                    <div className={styles.subtitleright} onClick={()=>{next(1)}}>
                                        <center>
                                            <div className={styles.txtright}  >Professionnel</div>
                                        </center>

                                    </div> 

                                </div>
                            </div>
                        </div>
                        <div className={styles.smallcontainer}>

                        </div>
                    </Col>
                    <Col sm={2} ></Col>

                </Row>

               
            </div>
            
        
        </>
    )
}

export default StepOneSignup