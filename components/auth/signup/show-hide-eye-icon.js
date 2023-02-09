
import React from 'react';
import { BiShow, BiHide } from "react-icons/bi";
import styles from '../../../styles/Step-four-form-signup.module.css'


function ShowHideEyeIcon({handleClickPwd, state }) {
    const renderContent = React.useCallback( () => {
        switch (state) {
            case false:
                return (
                     <BiHide onClick={handleClickPwd} className={styles.eye_icon} />

                );
            case true:
                return (
                    <BiShow onClick={handleClickPwd} className={styles.eye_icon} />

                );
                
        default:
                return <></>;
        }
    },)


    return (
            <>
                 {renderContent()}
            </>

    )
}

export default ShowHideEyeIcon