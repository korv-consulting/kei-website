import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Step-four-signup.module.css'
import React from 'react';
import StepFourFormSignup from './step-four-form'

function StepFourSignup({next,preview}) {

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };


    return(
        <Container fluid className={styles.main}>
            <Row className={styles.global_row}>

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