import React from "react";
import AddProfileIcon from "../../assets/icons/icon-add-user.png";
import {styles} from "./styles";

const AddProfileButton = ({goTo}) => {

    return(
        <button onClick={goTo} style={styles.buttonContainer}>
            <img src={AddProfileIcon} alt={"Icono añadir perfil"}/>
        </button>
    )
}
export default AddProfileButton