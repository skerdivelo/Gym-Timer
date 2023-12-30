import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        marginBottom: 80,
    },

    timer: {
        fontSize: 60,
        textAlign: "center",
        margin: 10,
        color: "#333333",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#841584",
        padding: 24,
        borderRadius: 8,
        marginTop: 20,
        width: 140,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 27,
        fontWeight: "bold",
    },
    buttonPressed: {
        backgroundColor: "red",
    },
    sliderContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    slider: {
        width: 300,
        
        margin: 10,
    },
    label: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
    },
});
