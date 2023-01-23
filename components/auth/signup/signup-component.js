import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/Signup-component.module.css"
import React, { useState, useEffect } from 'react'
import Stepper from "components/Stepper"
import StepOneSignup from './step-one'
import StepTwoSignup from './step-two'


function Signup_component() {
    // Defines the first state to start
    const [step, setStep] = useState(2)

    const [active, setActive] = useState(1)
    const [filled, setFilled] = useState(1) 
    const [added, setAdded] = useState(filled + 0)
    const [reduced, setReduced] = useState(filled - 0)

 

    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {

    }, [])


    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey, onSubmiting...`);

    };
 

    const next = (step) => { 
        switch (step) {
            case 1:
                setFilled(33.5)
                setAdded(33.5 + 960)
                setReduced(33.5 - 13.65)
                setActive(2)
                setStep(2)
                colorLineStepper(step)
                bgCicleNumber(step)

                break;
            case 2:
                setFilled(66)
                setAdded(66 + 969 * 2)
                setReduced(66 - 13.64 * 2 + 0.1)
                setActive(3)
                setStep(3)
                colorLineStepper(step)
                bgCicleNumber(step)

                break;
            case 3:
                setFilled(98)
                setAdded(98 + 969 * 3)
                setReduced(98 - 13.64 * 3 + 0.7)
                setActive(4)
                setStep(4)
                colorLineStepper(step)
                bgCicleNumber(step)

                break;
            case 4:
                bgCicleNumber(step)
                alert("Bravo!!! , vous avez reuissi à toute les étapes")
                break;
            default:
                setFilled(1)
                setAdded(1)
                setActive(1)
                setStep(1)



        }


    };

    const preview = (step) => {
        switch (step) {

            case 2:
                setFilled(1)
                setAdded(1)
                setReduced(1)
                setActive(1)
                setStep(1)
                removeColorLineStepper(step)
                removebgCicleNumber(step)

                break;
            case 3:
                setFilled(33.5)
                setAdded(33.5 + 960)
                setReduced(33.5 - 13.65)
                setActive(2)
                setStep(2)
                removeColorLineStepper(step)
                removebgCicleNumber(step)

                break;
            case 4:
                setFilled(66)
                setAdded(66 + 969 * 2)
                setReduced(66 - 13.64 * 2 + 0.1)
                setActive(3)
                setStep(3)
                removeColorLineStepper(step)
                removebgCicleNumber(step)

                break;
            default:
                setFilled(1)
                setAdded(1)
                setActive(1)
                setStep(1)



        }


    };

    const colorLineStepper = (step) => {
        for (let i = 1; i <= step; i++) {
            let element = document.getElementById(i)
            element.style.border = "2px solid #03DAC5"
            // console.log(element)

        }

    }

    const bgCicleNumber = (step) => {
        for (let i = 4; i <= step + 3; i++) {
            let element = document.getElementById(i)
            element.style.backgroundColor = "#03DAC5"
            // console.log(element)

        }

        if (step + 4 <= 7) {
            document.getElementById(step + 4).style.backgroundColor = "white"
        }
    }

    const removebgCicleNumber = (step) => {
        let element1 = document.getElementById(step + 3)
        element1.style.backgroundColor = "transparent"
        let element2 = document.getElementById(step + 2)
        element2.style.backgroundColor = "white"

    }

    const removeColorLineStepper = (step) => {
        let element = document.getElementById(step - 1)
        element.style.border = "2px solid black"
        colorLineStepper(step - 2)
    }



  
    const renderContent = React.useCallback( () => {
                switch (step) {
                    case 1:
                        return (
                            <>
                                <StepOneSignup
                                    next={next}
                                    preview={preview}
                                />
                                <div className={styles.stepper_one}>

                                    <Stepper
                                        filled={filled}
                                        added={added}
                                        active={active}
                                        reduced={reduced}
                                    />
                                </div>
                            </>

                        );
                    case 2:
                        return (
                            <>
                                <StepTwoSignup
                                    next={next}
                                    preview={preview}
                                />
                                <div className={styles.stepper_two}>
                                    <Stepper
                                        filled={filled}
                                        added={added}
                                        active={active}
                                        reduced={reduced}
                                    />
                                </div>
                            </>

                        );
                    default:
                        return <></>;
                }
            },)
       

        
            return (
                <Container fluid className={styles.main}>
                     {renderContent()}
                 </Container>)

}
export default Signup_component