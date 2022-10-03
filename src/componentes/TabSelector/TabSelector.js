import React from "react";
import {colors} from "../../theme/colors";
import Ticket from "../Ticket/Ticket";

const TabSelector = ({listOfTickets, tabSelected, handleTab}) => {

    return(
        <>
            <div style={{display: "flex", flexDirection: "row", margiTop: 24, marginBottom: 26}}>
                <button style={(tabSelected === 0) ? {cursor: "pointer", height: 46, width: 130, border: "none", borderBottom: '2px solid', borderColor: colors.secondary, backgroundColor: "transparent"} : {cursor: "pointer", height: 46, width: 130, border: "none", borderBottom: '2px solid', borderColor: colors.grey, backgroundColor: "transparent"}} onClick={() => {handleTab(0)}}>
                    <span style={(tabSelected === 0) ? {color: colors.textDarkBlue, fontWeight: "bold"} : {color: colors.grey, fontWeight: "bold"}}>Pendiente</span>
                </button>
                
                <button style={(tabSelected === 1) ? {cursor: "pointer", marginLeft: 14, height: 46, width: 130, border: "none", borderBottom: '2px solid', borderColor: colors.secondary, backgroundColor: "transparent"} : {cursor: "pointer", marginLeft: 14, height: 46, width: 130, border: "none", borderBottom: '2px solid', borderColor: colors.grey, backgroundColor: "transparent"}} onClick={() => {handleTab(1)}}>
                    <span style={(tabSelected === 1) ? {color: colors.textDarkBlue, fontWeight: "bold"} : {color: colors.grey, fontWeight: "bold"}}>Terminado</span>
                </button>
            </div>

        {listOfTickets.map((ticket, index) => {
            if (tabSelected === 1 && ticket.state === "FINISHED") {
                return <Ticket number={index} ticket={ticket}/>
            } else if (tabSelected === 0 && ticket.state !== 'FINISHED') {
                return <Ticket number={index} ticket={ticket}/>
            }
            })}
        </>
    )
}
export default TabSelector;