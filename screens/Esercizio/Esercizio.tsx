import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Modal,
} from "react-native";
import styles from "./style";

interface Exercise {
    name: string;
    instructions: string;
}

const Esercizio = () => {
    const [muscle, setMuscle] = useState("");
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
        null
    );
    const [showInstructions, setShowInstructions] = useState(false);

    const searchExercises = async () => {
        const muscleMap: Record<string, string> = {
            addominali: "abdominals",
            abduzione: "abductors",
            adduzione: "adductors",
            bicipiti: "biceps",
            polpacci: "calves",
            petto: "chest",
            avambracci: "forearms",
            glutei: "glutes",
            femorali: "hamstrings",
            dorsali: "lats",
            "basso schiena": "lower_back",
            "medio schiena": "middle_back",
            collo: "neck",
            quadricipiti: "quadriceps",
            trappole: "traps",
            tricipiti: "triceps",
        };
        const muscleInEnglish = muscleMap[muscle] || muscle;
        const response = await fetch(
            `https://api.api-ninjas.com/v1/exercises?muscle=${muscleInEnglish}`,
            {
                headers: {
                    "X-Api-Key": "3kJoXFULN0PahhK3+mB56A==7v7JX2cGuVHPtTOl",
                },
            }
        );
        const data = await response.json();
        setExercises(data);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Cerca esercizi per muscolo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Inserisci il nome del muscolo"
                    value={muscle}
                    onChangeText={setMuscle}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={searchExercises}
                >
                    <Text style={styles.buttonText}>Cerca</Text>
                </TouchableOpacity>
                <FlatList
                    data={exercises}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => {
                                setSelectedExercise(item);
                                setShowInstructions(true);
                            }}
                        >
                            <Text style={styles.itemText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showInstructions}
                    onRequestClose={() => {
                        setShowInstructions(!showInstructions);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={{
                                    ...styles.openButton,
                                    backgroundColor: "#2196F3",
                                }}
                                onPress={() => {
                                    setShowInstructions(!showInstructions);
                                }}
                            >
                                <Text style={styles.textStyle}>
                                    Nascondi istruzioni
                                </Text>
                            </TouchableOpacity>

                            <ScrollView>
                                <Text style={styles.modalText}>
                                    {selectedExercise?.instructions}
                                </Text>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Esercizio;
