import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Timer = () => {
    const [minutes, setMinutes] = useState<number>(3);
    const [seconds, setSeconds] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval!);
        }
        return () => clearInterval(interval!);
    }, [isActive, seconds]);

    const startTimer = () => {
        if (minutes === 0 && seconds === 0) {
            setMinutes(3);
            setSeconds(0);
        }
        setIsActive(!isActive);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{`${minutes
                .toString()
                .padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}</Text>
            <TouchableOpacity style={styles.button} onPress={startTimer}>
                <Text style={styles.buttonText}>
                    {isActive ? "Pause" : "Start"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Timer;