import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/Step-one-signup.module.css"
import React, { useState, useEffect } from 'react'

function StepOneSignup() {

    const [filled, setFilled] = useState(33)
    const [added, setAdded] = useState(filled - 30)

    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {

    }, [])


    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };


    const next = (step, filled) => {
        switch (step) {
            case 1:
                setFilled(210)
                setAdded(210- 30)

                break;
            case 2:
                setFilled(390)
                setAdded(390- 30)

                break;
            case 3:
                setFilled(570)
                setAdded(570- 30)

                break;
            default:
                setFilled(filled)
                setAdded(filled - 30)

        }


    };

    const preview = (step, filled) => {
        switch (step) {

            case 2:
                setFilled(33)
                setAdded(33 - 30)

                break;
            case 3:
                setFilled(210)
                setAdded(210 - 30)

                break;
            case 4:
                setFilled(390)
                setAdded(390 - 30)

                break;
            default:
                setFilled(filled)
                setAdded(filled - 30)

        }


    };





    return (
        <Container fluid className={styles.main}>
            <Image fluid src="/signup/immeuble.png" className={styles.background} alt="Sky Crappers" />
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

                                    <div className={styles.subtitleleft}>
                                        <center>
                                            <div className={styles.txtleleft} onClick={e=>{next(5, filled)}} >Particulier</div>
                                        </center>
                                    </div>
                                </div>
                                <div className={styles.imgright}>
                                    <div className={styles.imgright_card}>
                                        <Image src='/signup/3.png' className={styles.img3_arrow} />
                                        <Image src='/signup/4.png' className={styles.img4_arrow} />
                                        <Image src='/signup/5.png' className={styles.img5_arrow} />

                                    </div>

                                    <div className={styles.subtitleright}>
                                        <center>
                                            <div className={styles.txtright} onClick={e=>{next(2, filled)}} >Professionnel</div>
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



                <Container className={styles.box_container_number} >
                    <Row>
                        <Col sm={4} ></Col>
                        <Col sm={4} className={styles.box_number}>
                            <div className={styles.number} >1 </div>
                            <div className={styles.linear} ></div>
                            <div className={styles.number} >2 </div>
                            <div className={styles.linear} ></div>
                            <div className={styles.number} >3</div>
                            <div className={styles.linear} ></div>
                            <div className={styles.number} >4 </div>

                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>


                <Container className={styles.box_progress} >
                    <Row>
                        <Col sm={4} ></Col>
                        <Col sm={4} className={styles.col_progress}>
                            <div className={styles.progress} >
                                <div className={styles.progress_bar} style={{ width: `${added}px` }} >
                                </div>
                            </div>
                            <div className={styles.box_stepper}>


                                <div style={{
                                    height: "100%",
                                    width: `${filled}px`,
                                    backgroundColor: "#2DB6FE",
                                    transition: "width 0.1s",
                                    borderRadius: "500px 500px 500px 500px"
                                }}>
                                </div>
                                <div style={{
                                    borderTop: "12px solid #fff",
                                    borderBottom: "15px solid #fff",
                                    borderLeft: "15px solid #fff",
                                    borderRight: "12px solid #fff",
                                    backgroundColor: "#fff",
                                    transition: "width 0.1s",
                                    borderRadius: "100%",
                                    marginLeft: "-6%",
                                    width: "40px",
                                    zIndex: "1",
                                    marginTop: "-27px",
                                    transform: `translate(${filled}px, 0px)`

                                }}>

                                </div>


                            </div>

                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>

            </div>


        </Container>
    )
}

export default StepOneSignup