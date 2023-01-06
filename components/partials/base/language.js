import { Form, Nav, Image, NavDropdown, Navbar } from "react-bootstrap"
import styles from '@/styles/Language.module.css'
import flag from '/public/logo-kei.png'

function Language() {
    return(
        <Nav className={`justify-content-end ${styles.main}`} >
          <Image src="/flags/France.png" width="2.5%" rounded alt="France Flag"/>
          {/* <Nav.Item>
            <Image src="/flags/France.png" width="20%" roundedCircle alt="KEI Logo"/> 
            <Form.Select>
              <option>
                <div style={{ backgroundImage: "url('/logo-kei.png')" }}>Yes</div>
              </option>
            </Form.Select>
          </Nav.Item> */}
          
          {/* <NavDropdown va style={{ backgroundImage: "url('/flags/Spain.png')", width: '2%', backgroundColor: 'transparent' }} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                <Image src="/flags/France.png" width="30%" rounded alt="France Flag"/>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                <Image src="/flags/UK.png" width="30%" rounded alt="UK Flag"/>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                <Image src="/flags/Spain.png" width="30%" rounded alt="Spain Flag"/>
              </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
    )
}

export default Language