import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/Signup-component.module.css"
import React, { useState, useEffect } from 'react' 
import Stepper from "components/Stepper"
import StepOneSignup from './step-one' 
import StepTwoSignup from './step-two'
import StepThreeSignup from './step-three'
import StepThreeCompanySignup from './step-three-company'
import StepFourSignup from './step-four'  
import ConfirmationComponentSignup from './confirmation-component' 



function Signup_component() {
    // Defines the first state to start
    const [step, setStep] = useState(1)

    // Memorises the status of the user 
    const [isprofessinal, setIsprofessinal] = useState('')

    // states stapperbar Initialisation
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

    const handleProfessional = () => {
        setIsprofessinal(1)  // if the user chose profile professional

    };
 
    const handleParticular = () => {
        setIsprofessinal(0)  // if the user chose profile particular

    };
 

    const next = (step_arg) => { 


        switch (step_arg) {
            case 1:
                setFilled(33.5)
                setAdded(33.5 + 960)
                setReduced(33.5 - 13.65)
                setActive(2)
                setStep(2)
                colorLineStepper(step_arg)
                bgCicleNumber(step_arg)

                break;
            case 2:
                setFilled(66)
                setAdded(66 + 969 * 2)
                setReduced(66 - 13.64 * 2 + 0.1)
                setActive(3)

                if(isprofessinal == 1){
                    setStep(-3)
                }else{
                    setStep(3)

                }
                colorLineStepper(step_arg)
                bgCicleNumber(step_arg)

                break;
            case 3:
                setFilled(98)
                setAdded(98 + 969 * 3 -30)
                setReduced(98 - 13.64 * 3 + 0.3)
                setActive(4)
                setStep(4)
                colorLineStepper(step_arg)
                bgCicleNumber(step_arg)

                break;
            case 4:
                bgCicleNumber(step_arg)
                setStep(5)
                alert("Bravo!!! , vous avez reuissi à toute les étapes",step)
                break;
            default:
                setFilled(1)
                setAdded(1)
                setActive(1)
                setStep(1)



        }


    };

    const preview = (step_arg) => {

        switch (step_arg) {

            case 2:
                setFilled(1)
                setAdded(1)
                setReduced(1)
                setActive(1)
                setStep(1)
                removeColorLineStepper(step_arg)
                removebgCicleNumber(step_arg)

                break;
            case 3:
                setFilled(33.5)
                setAdded(33.5 + 960)
                setReduced(33.5 - 13.65)
                setActive(2)
                setStep(2)
                removeColorLineStepper(step_arg)
                removebgCicleNumber(step_arg)

                break;
            case 4:
                setFilled(66)
                setAdded(66 + 969 * 2)
                setReduced(66 - 13.64 * 2 + 0.1)
                setActive(3)

                if(isprofessinal == 1){
                    setStep(-3)
                }else{
                    setStep(3)

                }
                removeColorLineStepper(step_arg)
                removebgCicleNumber(step_arg)                

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
                                <section className={`${styles.section}`}>
                                    <StepOneSignup
                                        next={next}
                                        preview={preview} 
                                        handleProfessional={handleProfessional}
                                        handleParticular={handleParticular}
                                    />
                                    <div className={styles.stepper_one}>

                                        <Stepper
                                            filled={filled}
                                            added={added}
                                            active={active}
                                            reduced={reduced}
                                        />
                                    </div>
                                </section>

                        );
                    case 2:
                        return (
                            <section className={`${styles.section}`}>
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
                            </section> 

                        );
                        case 3:
                            return (
                                <section className={`${styles.section}`}>
                                    <StepThreeSignup
                                        next={next}
                                        preview={preview}
                                    />
                                    <div className={styles.stepper_three}>
                                        <Stepper
                                            filled={filled}
                                            added={added}
                                            active={active}
                                            reduced={reduced}
                                        />
                                    </div>
                                </section>
    
                            );
                            case -3:

                                return (
                                    <section className={`${styles.section}`}>
                                        <StepThreeCompanySignup
                                            next={next}
                                            preview={preview}
                                        />
                                        <div className={styles.stepper_three_company}>
                                            <Stepper
                                                filled={filled}
                                                added={added}
                                                active={active}
                                                reduced={reduced}
                                            />
                                        </div>
                                    </section>
        
                                );
                        case 4:
                            return (
                            <section className={`${styles.section}`}>
                                <StepFourSignup
                                    next={next}
                                    preview={preview}
                                />
                                <div className={styles.stepper_four}>
                                    <Stepper
                                        filled={filled}
                                        added={added}
                                        active={active}
                                        reduced={reduced}
                                    />
                                </div>
                            </section>

                        ); 
                        case 5:
                            return (
                            <section className={`${styles.section}`}>
                                <ConfirmationComponentSignup
                                    next={next}
                                    preview={preview}
                                />
                                <div className={styles.stepper_five}>
                                    <Stepper
                                        filled={filled}
                                        added={added}
                                        active={active}
                                        reduced={reduced}
                                    />
                                </div>
                            </section>

                        );
                default:
                        return <></>;
                }
            },)
       

        
            return (
                <section className={`${styles.background}`} >
                    <Container fluid className={styles.main}>
                        {renderContent()}
                    </Container>
                </section>
                )

}
export default Signup_component