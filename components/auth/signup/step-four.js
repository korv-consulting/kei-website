import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles_step from "@/styles/Step-two-signup.module.css"
import styles from '../../../styles/Step-three-signup.module.css'
import style from '../../../styles/Floating-label.module.css'
import React, { useState, useEffect } from 'react';
import StepFourFormSignup from './step-four-form'

function StepFourSignup({next,preview}) {

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };


    return(
        <Container fluid className={styles_step.main}>
            <Image fluid src="/skyscraper.png" className={styles_step.background} alt="Sky Crappers" />
            <Row className={styles_step.global_row}>

                <Col></Col>
                <Col  xs={5}  >  
                    <Card >
                         <StepFourFormSignup 
                              next={next}
                              preview={preview}
                         />
                      
                    </Card>
                </Col>
                <Col></Col>

            </Row>
            

           



        </Container>
    )
}

export default StepFourSignup