
import styles from '../styles/Splash.module.css'
import { Image } from 'react-bootstrap'

function Logo() {
    return (
    <>      
      <Image src="/logo-kei-splash.png" className={styles.App_logo} loading="lazy" alt='logo'  />
    </> 
   
 
    )
  }
  
  export default Logo
  