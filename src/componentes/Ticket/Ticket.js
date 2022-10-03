import React from "react";
import {colors} from "../../theme/colors";

const Ticket = ({ticket, number}) => {

    return (
        <div style={{display: "flex", flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <div style={{height: 42, width: 42, borderRadius: 21, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: colors.textDarkBlue, marginRight: 30}}>
                <span style={{color: 'white', fontWeight: "bold"}}>{number + 1}</span>
            </div>
            <div style={{paddingLeft: 76, paddingRight: 46, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 100, borderRadius: 50, border: '1px solid', borderColor: colors.grey}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span style={{fontSize: 18, color: '#383838', fontWeight: "bold"}}>{ticket.name}</span>
                    <span style={{fontSize: 16, color: colors.secondary}}>#{ticket.ref}</span>
                </div>
            <div>
                    <span style={{fontSize: 16, color: '#292929'}}>{ticket.type}</span>
                </div>
                <div>
                    <span style={{fontSize: 16, color: '#292929'}}>{ticket.deliveryDate}</span>
                </div>
                <div>
                    <span>{ticket.state}</span>
                </div>
                <div>
                    <span>###</span>
                </div>
            </div>
        </div>
    )

}

export default Ticket;
