import {colors} from "../../theme/colors";

export const styles= {
    buttonCotainer: {
        width: "100%",
        height: 46,
        border: "none",
        borderRadius: 23,
        backgroundColor: colors.alert,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
        cursor: 'pointer'
    },
    text: {
        marginLeft: 26,
        fontSize: 16,
        color: colors.primary
    }
}