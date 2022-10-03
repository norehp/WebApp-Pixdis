import React from "react";
import FakeProfileImage from "../../assets/profileImage/FunkoWW.jpg";
import IconEdit from "../../assets/icons/icon-edit.png";
import {styles} from "./styles";

const SidebarProfile = ({goTo, name}) => {
     
    return (
        <div style={styles.profileContainer}>
            <div style={styles.imageContainer}>
                <img style={styles.image} src={FakeProfileImage} alt="Foto de Perfil"/>
                <span style={styles.name}>{name}</span>
            </div>
            <button onClick={goTo} style={styles.buttonContainer}>
                <img src={IconEdit} alt="Icono de editar Perfil"/>
            </button>
        </div>
    )
}
export default SidebarProfile;