import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap"
import styles from "@/styles/Signup-component.module.css"
import React, { useState, useEffect } from 'react'
import Stepper from "components/Stepper"
import StepOneSignup from './step-one'

function Signup_component() {

    const [active, setActive] = useState(1)
    const [filled, setFilled] = useState(1) 
    const [added, setAdded] = useState(filled + 0) 


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
                setAdded(33.5+960)
                setActive(2)
                colorLineStepper(step)
                bgCicleNumber(step)

                break;
            case 2:
                setFilled(66)
                setAdded(66+969*2)
                setActive(3)
                colorLineStepper(step)
                bgCicleNumber(step)

                break;
            case 3:
                setFilled(98)
                setAdded(98+969*3)
                setActive(4)
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


        }


    };

    const preview = (step) => {
        switch (step) {

            case 2:
                setFilled(1)
                setAdded(1)
                setActive(1)
                removeColorLineStepper(step)
                removebgCicleNumber(step)

                break;
            case 3:
                setFilled(33.5)
                setAdded(33.5 + 960)
                setActive(2)
                removeColorLineStepper(step)
                removebgCicleNumber(step)

                break;
            case 4:
                setFilled(66)
                setAdded(66 + 969*2)
                setActive(3)
                removeColorLineStepper(step)
                removebgCicleNumber(step)


                break;
            default:
                setFilled(1)
                setAdded(1)
                setActive(1)


        }


    };

    const colorLineStepper = (step) => {
        for(let i=1;i<=step;i++){
            let element = document.getElementById(i)
            element.style.border = "2px solid #03DAC5"
           // console.log(element)

        }

    }

    const bgCicleNumber = (step) => {
        for(let i=4;i<=step+3;i++){
            let element = document.getElementById(i)
            element.style.backgroundColor = "#03DAC5"
           // console.log(element)

        }

        if(step+4<=7){
        document.getElementById(step+4).style.backgroundColor = "white"
        }
    }

    const removebgCicleNumber = (step) => {
       let element1 = document.getElementById(step+3)
       element1.style.backgroundColor = "transparent"
       let element2 = document.getElementById(step+2)
       element2.style.backgroundColor = "white"
    
    }

    const removeColorLineStepper = (step) => {
       let element = document.getElementById(step-1)
       element.style.border = "2px solid black"
        colorLineStepper(step-2)
    }


 
    return (
        <Container fluid className={styles.main}>
            <StepOneSignup 
                next={next}
                preview={preview}
            />
            <Stepper 
                    filled={filled}
                    added={added}
                    active={active}
            />

          
        </Container>
    )
}

export default Signup_component