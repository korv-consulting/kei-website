import { Container, Row, Col } from "react-bootstrap"
import styles from '@/styles/Home.module.css'

function MiddleBar(){
    return (
        <>
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className="col-md-2"></div>
                    <div className={`d-flex col-md-8`}>
                        <div className={`w-100 ${styles.btn_offers}`}>NOS OFFRES</div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default MiddleBar