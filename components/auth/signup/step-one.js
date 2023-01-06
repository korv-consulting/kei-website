import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/Step-one-signup.module.css"
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import React from "react";

function StepOneSignup() {


    React.useEffect(() => { 

        const stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        })

    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };




    return (
        <Container fluid className={styles.main}>
            <Image fluid src="/signup/immeuble.png" className={styles.background} alt="Sky Crappers" />
            <Row className={styles.global_row}>

                <Col sm={2} ></Col>
                <Col sm={8} className={styles.box}>
                    <div className={styles.bigcontainer}>
                        <div className={styles.titlecontainer}>Veuillez choisir l'option qui vous correspond  </div>
                        <div className={styles.flexcontainer}>
                            <div className={styles.imgleft}>
                                <div className={styles.imgleft_card}>
                                    <Image src='/signup/1.png' className={styles.img1_arrow} />
                                    <Image src='/signup/2.png' className={styles.img2_arrow} />

                                </div>

                                <div className={styles.subtitleleft}>
                                    <center>
                                        <div className={styles.txtleleft}>Particulier</div>
                                    </center>
                                </div>
                            </div>
                            <div className={styles.imgright}>
                                <div className={styles.imgright_card}>
                                    <Image src='/signup/3.png' className={styles.img_arrow} />
                                    <Image src='/signup/4.png' className={styles.img_arrow} />
                                    <Image src='/signup/5.png' className={styles.img_arrow} />

                                </div>

                                <div className={styles.subtitleright}>
                                    <center>
                                        <div className={styles.txtright}>Professionnel</div>
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
            <div className={styles.box_stepper}>

                <div id="stepper1" class="bs-stepper">
                    <div class="bs-stepper-header">
                        <div class="step" data-target="#test-l-1">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">1</span>
                                <span class="bs-stepper-label">Email</span>
                            </button>
                        </div>
                        <div class="line"></div>
                        <div class="step" data-target="#test-l-2">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">2</span>
                                <span class="bs-stepper-label">Password</span>
                            </button>
                        </div>
                        <div class="line"></div>
                        <div class="step" data-target="#test-l-3">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">3</span>
                                <span class="bs-stepper-label">Confirm Password</span>
                            </button>
                        </div>
                        <div class="line"></div>
                        <div class="step" data-target="#test-l-4">
                            <button class="step-trigger">
                                <span class="bs-stepper-circle">4</span>
                                <span class="bs-stepper-label">Validate</span>
                            </button>
                        </div>
                    </div>
                    <div class="bs-stepper-content">
                        <form onSubmit={onSubmit}>
                            <div id="test-l-1" class="content">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                </div>
                                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                            </div>
                            <div id="test-l-2" class="content">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                            </div>
                            <div id="test-l-3" class="content">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Confirm Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                                </div>
                                <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                            </div>
                            <div id="test-l-4" class="content text-center">
                                <button type="submit" class="btn btn-primary mt-5">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>



        </Container>
    )
}

export default StepOneSignup