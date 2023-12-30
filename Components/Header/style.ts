import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        bottom: 262,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80, // Increase height for a more prominent header
        width: "100%",
        backgroundColor: "#191919" , // Use a shade of blue
        shadowColor: "#000", // Add shadow color (iOS)
        shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS)
        shadowOpacity: 0.2, // Add shadow opacity (iOS)
        zIndex: 1000,
    },

    headerText: {
        color: "white",
        fontSize: 24, // Increase font size for better visibility
        fontWeight: "bold",
    },
    buttonContainerLeft: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 120,
        height: 50,
        backgroundColor: "#000", // Use a shade of blue
        borderRadius: 25, // Make the button slightly rounded
        elevation: 2, // Add elevation for a subtle shadow effect (Android)
        shadowColor: '#000', // Add shadow color (iOS)
        shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS)
        shadowOpacity: 0.2, // Add shadow opacity (iOS)
    },

    buttonContainerRight: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 120,
        height: 50,
        backgroundColor: "#000", // Use a shade of blue
        borderRadius: 25, // Make the button slightly rounded
        elevation: 2, // Add elevation for a subtle shadow effect (Android)
        shadowColor: '#000', // Add shadow color (iOS)
        shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS)
        shadowOpacity: 0.2, // Add shadow opacity (iOS)
    },
});

export default styles;
