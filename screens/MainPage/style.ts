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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        backgroundColor: "#FFD700",
        borderRadius: 10,
        padding: 15,
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
});