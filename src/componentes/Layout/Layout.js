import React from "react";
import Sidebar from "../Sidebar/Sidebar.js";
import Header from "../Header/Header";
import {styles} from "./styles.js";

const Layout = ({children}) =>{
    
    return (
        <div style={styles.layoutContainer}>
            <div style={styles.mainContainer}>
                <Sidebar/>
                <div style={styles.container}>
                    <Header/>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout;