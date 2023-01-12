import { Container, Nav, Navbar, Form, Button, Image } from "react-bootstrap"
import styles from '@/styles/Header.module.css'
import {useRouter} from "next/router"

function Header() {

    const router = useRouter();
   console.log(router.asPath);

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
                    navbarScroll defaultActiveKey="2"
                >
                    
                    <Nav.Link href="#home" className={router.asPath === "/#home" ? styles.active : styles.menu_item}>ACCUEIL</Nav.Link>
                    <Nav.Link href="#about" className={router.asPath === "/#about" ? styles.active : styles.menu_item}>A PROPOS</Nav.Link>
                    <Nav.Link href="#offers" className={ router.asPath === "/#offers" ? styles.active : styles.menu_item }>OFFRES</Nav.Link>
                    <Nav.Link href="#contact" className={ router.asPath === "/#contact" ? styles.active : styles.menu_item }>CONTACT</Nav.Link>
                   
                </Nav>
                <Form className="d-flex">
                    {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    /> */}
                    <Nav.Link href="/signin" className={router.asPath === "/signin" ? styles.active : styles.menu_item}>
                        <Button className={styles.login_btn} id="btn_login">
                        Connexion
                        </Button>
                    </Nav.Link>
                    <Nav.Link href="/signup" className={router.asPath === "/signup" ? styles.active : styles.menu_item}>
                        <Button className={styles.signup_btn}>
                            Souscrire
                        </Button>
                    </Nav.Link>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header