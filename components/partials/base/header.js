import { Container, Nav, Navbar, Form, Button, Image } from "react-bootstrap"
import styles from '@/styles/Header.module.css'

function Header() {

    return(
        <Navbar bg="white" expand="lg" className={`${styles.navbar}`}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image src="/logo-kei.png" alt="KEI Logo" className={styles.logo}/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className={`me-auto my-2 my-lg-0 ${styles.menu}`}
                    navbarScroll
                >
                    
                    <Nav.Link href="#home" id="home" className={`${styles.menu_item} ${styles.active}`}>ACCUEIL</Nav.Link>
                    <Nav.Link href="#about" className={styles.menu_item}>A PROPOS</Nav.Link>
                    <Nav.Link href="#offers" className={styles.menu_item}>OFFRES</Nav.Link>
                    <Nav.Link href="#contact" className={styles.menu_item}>CONTACT</Nav.Link>
                   
                </Nav>
                <Form className="d-flex">
                    {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    /> */}
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