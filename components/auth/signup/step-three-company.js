import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles_step from "@/styles/Step-three-company-signup.module.css"
import React, { useState, useEffect } from 'react';
import StepThreeCompanyFormSignup from './step-three-company-form'

function StepThreeCompanySignup({next,preview}) {

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };  

 

    return(
        <Container fluid className={styles_step.main}> 
            <Row className={styles_step.global_row}>

                <Col></Col>
                <Col  md={12} lg={5}  >  
                    <Card >
                         <StepThreeCompanyFormSignup 
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

export default StepThreeCompanySignup