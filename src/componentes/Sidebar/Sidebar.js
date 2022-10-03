import React from "react";
import {styles} from "./styles";
import {useNavigate} from "react-router-dom";
import SidebarProfile from "../SidebarProfile/SidebarProfile";
import ButtonSecondary from "../ButtonSecondary/buttonSecondary";
import SidebarNavegator from "../SidebarNavegator/SidebarNavegator";
import DashboardIcon from "../../assets/icons/icon-dashboard.png";
import DocumentIcon from "../../assets/icons/icon-document.png";
import SettingsIcon from "../../assets/icons/icon-settings.png";
import LogoutIcon from "../../assets/icons/icon-logout.png";

const Sidebar = () => {

    const navigate = useNavigate ();

    const goToEditProfile = () => {
        navigate ("/editeProfile");
    }

    const goToShare = () => {
        navigate ("/share");
    }

    return (
        <div style={styles.sidebarContainer}>
            <div style={styles.container}>
                <div>
                    <SidebarProfile name={"Rihana"} goTo={goToEditProfile}/>
                    <div style={styles.buttonContainer}>
                        <ButtonSecondary buttonTitle={"Recomendar a un amigo"} onClick={goToShare}/>
                    </div>
                    <div>
                        <SidebarNavegator onClick={() => { }} icon={DashboardIcon} titleRoute={"Panel de tickets"}/>
                    </div>
                    <div>
                        <SidebarNavegator onClick={() => { }} icon={DashboardIcon} titleRoute={"Facturación"}/>
                    </div>
                </div>
                <div>
                    <SidebarNavegator onClick={()=>{}} icon={SettingsIcon} titleRoute={"Ajustes"}/>
                    <SidebarNavegator onClick={()=>{}} icon={SettingsIcon} titleRoute={"Cerrar Sesión"}/>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;