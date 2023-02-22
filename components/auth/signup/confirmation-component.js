import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Confirmation-component-signup.module.css'
import React from 'react';
import ConfirmationSignup from './confirmation'

function ConfirmationComponentSignup({next,preview}) { 

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };
 

    return(
        <Container fluid className={styles.main}>
            <Row className={styles.global_row}>

                <Col></Col>
                <Col  xs={5}  >  
                    <div>
                     <Image fluid src="signup/KEI-without-bg.png" className={styles.picture} alt="Sky Crappers" />
                    </div>
                    <Card > 
                         <ConfirmationSignup 
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

export default ConfirmationComponentSignup