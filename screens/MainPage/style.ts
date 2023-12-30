import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#FFD700",
        borderRadius: 10,
        padding: 15,
        margin: 10,
    },
    buttonText: {
        color: "black",
        fontSize: 20,
    },
});
