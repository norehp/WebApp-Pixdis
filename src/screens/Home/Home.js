import React, {useState} from "react";
import {colors} from "../../theme/colors";
import Layout from "../../componentes/Layout/Layout";
import TabSelector from "../../componentes/TabSelector/TabSelector";

const Home = () => {

    const [tabSelected, setTabSelected] = useState(0);

    const handleTab = (tabSelected) => {
        setTabSelected(tabSelected)
    }

    const listOfTickets = [
        {
            id: 'ticket 1',
            name: 'Logo para Amazon',
            ref: 'ABC123',
            type: 'Logo',
            deliveryDate: '1/10/2022',
            state: 'INPROGRESS'
        },
        {
            id: 'ticket 2',
            name: 'Nueva carta de postres',
            ref: 'ABCDE1234',
            type: 'Ilustracion',
            deliveryDate: '10/10/2022',
            state: 'PAUSED'
        },
        {
            id: 'ticket 3',
            name: 'Nueva carta de postres',
            ref: 'ABCDE1234',
            type: 'Ilustracion',
            deliveryDate: '10/10/2022',
            state: 'FINISHED'
        },
        {
            id: 'ticket 4',
            name: 'Nueva carta de postres',
            ref: 'ABCDE1234',
            type: 'Ilustracion',
            deliveryDate: '10/10/2022',
            state: 'FINISHED'
        },
    ]

    return (
        <Layout>
            <div style={{paddingTop: 60, paddingRight: 80, paddingLeft: 80}}>
                <h1 style={{fontSize: 32, color: colors.textDarkBlue}}>Tus tickets</h1>
                <div style={{backgroundColor: colors.lightGrey, height: 2, width: '100%'}}/>
                <TabSelector
                    handleTab={handleTab}
                    tabSelected={tabSelected}
                    listOfTickets={listOfTickets}/>
            </div>
        </Layout>
    )
}

export default Home;