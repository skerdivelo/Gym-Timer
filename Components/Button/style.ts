import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        width: 120,
        height: 50,
        backgroundColor: "#000", // Use a shade of blue
        borderRadius: 25, // Make the button slightly rounded
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2, // Add elevation for a subtle shadow effect (Android)
        shadowColor: '#000', // Add shadow color (iOS)
        shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS)
        shadowOpacity: 0.2, // Add shadow opacity (iOS)
    },
    buttonPressed: {
        backgroundColor: "#2c3e50", // Darken the color when pressed
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold', // Make the text bold for emphasis
    },
});
