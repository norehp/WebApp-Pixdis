import React from "react";
import {styles} from "./styles";

const AlertButton = ({buttonTitle, icon, onClick}) => {


    return (
        <button onClick={onClick} style={styles.buttonContainer}>
            <img src={icon} alt={"Icono de añadir ticket"}/>
            <span style={styles.text}>{buttonTitle}</span>
        </button>
    )
}
// falta llamar al icono o ya lo esta llamando otra función???
export default AlertButton;