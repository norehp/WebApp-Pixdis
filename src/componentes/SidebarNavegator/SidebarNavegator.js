import React from "react";

const SidebarNavigator = ({icon, titleRoute, onClick}) => {

    return (
        <button onClick={onClick} style={{width: "100%", border: "none", backgroundColor: "transparent", cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", height: 46}}>
            <img src={icon} alt="Icono"/>
            <p style={{color:"wite", marginLeft: 50}}>{titleRoute}</p>
        </button>
    )
}

export default SidebarNavigator;