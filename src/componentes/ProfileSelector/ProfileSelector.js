import React from "react";
import {styles} from "./styles";

const ProfileSelector = ({listProfiles, onSelectProfile, selectedProfile}) => {

    const Profile= ({profile}) => {

        return(
            <button key={profile.id} onClick= {()=>{onSelectProfile(profile.id)}} id={profile.id} style={(selectedProfile === profile.id)?styles.profileSelected : styles.profile}>
                <img src={profile.icon} alt="Icono de Perfil"/>
            </button>
        )
    }

    return (
        <> 
        {/* Quer significan los mayorque vacios */}
        {listProfiles.map((profile) => {
            return <Profile key={profile.id} profile={profile}/>
        })}
        </>
    )
}

export default ProfileSelector;