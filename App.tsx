import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./Components/Button";
import Timer from "./screens/Timer/Timer";
import MainPage from "./screens/MainPage/MainPage";
import Esercizio from "./screens/Esercizio/Esercizio";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="Timer" component={Timer} />
                <Stack.Screen name="Esercizio" component={Esercizio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function LoginScreen({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleLogin() {
        if (username == "" || password == "") {
            alert("Inserisci username e password");
            return;
        } else if (
            username === "skerdi" ||
            (username === "Skerdi" && password === "velo")
        ) {
            navigation.reset({
                index: 0,
                routes: [{ name: "MainPage" }],
            });
        } else {
            alert("Username o password errati");
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.content}>
                    <Text style={styles.text}>Identificati!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Inserisci il tuo nome"
                        onChangeText={(username) => setUsername(username)}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Inserisci la tua password"
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        secureTextEntry={true}
                    />
                    <Button title="Login" onPress={handleLogin} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },
});
