import { Container, Nav, Navbar, Form, Button, Image } from "react-bootstrap"
import styles from '@/styles/Header.module.css'
import { useState } from "react";
// import {useRouter} from "next/router"

function Header() {

    let [isActive, setIsActive] = useState(1);
    //  const router = useRouter();
    //  console.log(router.asPath); 

    return(
        <Navbar bg="white" expand="lg" className={`${styles.navbar}`}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image src="/logo-kei.png" alt="KEI Logo" className={styles.logo}/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                <Nav className={`me-auto my-2 my-lg-0  ${styles.menu}`} navbarScroll defaultActiveKey="2">
                    
                    <Nav.Link href="#home" onClick={() => setIsActive(1)} className={ isActive === 1 ? styles.active : styles.menu_item }> ACCUEIL </Nav.Link>

                    <Nav.Link href="#about" onClick={() => setIsActive(2)} className={ isActive === 2 ? styles.active : styles.menu_item }> A PROPOS </Nav.Link>

                    <Nav.Link href="#offers" onClick={() => setIsActive(3)} className={ isActive === 3? styles.active : styles.menu_item }> OFFRES </Nav.Link>

                    <Nav.Link href="#contact" onClick={() => setIsActive(4)} className={ isActive === 4 ? styles.active : styles.menu_item }> CONTACT </Nav.Link>
                   
                </Nav>
                <Form className="d-flex">
                    <Button className={styles.login_btn} id="btn_login">
                        Connexion
                    </Button>
                    <Button className={styles.signup_btn}>
                        Souscrire
                    </Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header