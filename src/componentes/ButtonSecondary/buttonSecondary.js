import React from "react";
import {styles} from "./styles";

const buttonSecondary = ({onClick, buttonTitle}) => {

    return (
        <button onClick={onClick} style={styles.buttonContainer}>
            <span style={styles.text}>{buttonTitle}</span>
        </button>
    )
}

export default buttonSecondary;