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
            <div className={styles.global_row}>

                     <Image fluid src="signup/KEI-without-bg.png" className={styles.picture} alt="Sky Crappers" />
                    <Card > 
                         <ConfirmationSignup 
                              next={next}
                              preview={preview}
                         />
                      
                    </Card>

            </div>

        </Container>
    )
}

export default ConfirmationComponentSignup