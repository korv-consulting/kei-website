import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Signin-Component.module.css'
import style from '../../../styles/Floating-label.module.css'
import React, { useState, useEffect } from 'react';
import SignIn from './sign-in'

function SigninComponent({next,preview}) { 

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };


    return(
    <Container fluid className={styles.main}>
        <Image fluid src="/skyscraper.png" className={styles.background} alt="Sky Crappers" />
        <Row className={styles.global_row}>

            <Col></Col>
            <Col  xs={12} md={5} >   
                <div>
                 <Image fluid src="signup/KEI-without-bg.png" className={styles.picture} alt="Sky Crappers" />
                </div>
                <Card > 
                     <SignIn 
                          next={next}
                          preview={preview}
                     />
                  
                </Card>
            </Col> 
            <Col  className={` ${styles.box_btn}`} > 
                <p>
                        <Button className={styles.btn_welcome_back}>Bon Retour ! </Button>
                        <Image fluid src="signin/icon-awesome-smile-beam.png" className='mx-4' alt="smile" />
                </p>
            </Col>

        </Row>
        
    </Container>
    )
}

export default SigninComponent