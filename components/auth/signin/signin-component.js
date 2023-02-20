import { Button, ButtonGroup,Card, Col, Container, Image, Row } from "react-bootstrap"
import styles from '../../../styles/Signin-Component.module.css'
import React, { useState, useEffect } from 'react';
import SignIn from './sign-in'

function SigninComponent({next,preview}) { 

    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`); 

    };


    return(
    <Container fluid className={`p-0  ${styles.main}`} >
        <section  className={`${styles.section}`}>
            <Row   >

                <Col></Col>
                <Col  md={12} lg={5} className="mb-5" >   
                
                        <Image fluid src="signup/KEI-without-bg.png" className={styles.picture} alt="Sky Crappers" />
                    
                    <Card className="px-2 m-auto" > 
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
        </section>
        
    </Container>
    )
}

export default SigninComponent