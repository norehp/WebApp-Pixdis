import {colors} from "../../theme/colors";

export const styles = {
    sidebarContainer: {
        height:"100vh", 
        backgroundColor: colors.primary,
    },
    container: {
        boxSizing:"border-box",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 60,
        paddingLeft: 40,
        paddingRight: 40,
        height: '100%',
    },
    buttonContainer: {
        width: "100%",
        marginTop: 40
    }
}