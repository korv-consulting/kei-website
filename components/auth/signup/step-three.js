import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Step-three-signup.module.css'
import React from 'react';
import StepThreeFormSignup from './step-three-form'

function StepThreeSignup({next,preview}) {

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
                         <StepThreeFormSignup 
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

export default StepThreeSignup