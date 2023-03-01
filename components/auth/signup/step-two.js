import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/Step-two-signup.module.css"
import React from 'react';
import StepTwoFormSignup from './step-two-form'

function StepTwoSignup({next,preview}) {

 
    return( 
        <Container fluid className={styles.main}>  
            <Row className={styles.global_row}>

                <Col></Col>
                <Col  md={12} lg={5} >  
                    <Card > 
                         <StepTwoFormSignup 
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

export default StepTwoSignup