import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const Timer = () => {
    const [minutes, setMinutes] = useState<number>(3);
    const [seconds, setSeconds] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const animationRef = useRef(null);

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

    const [isPressed, setIsPressed] = useState<boolean>(false);
    const resetTimer = () => {
        setIsActive(false);
        setMinutes(3);
        setSeconds(0);
        if (animationRef.current) {
            animationRef.current.rotate();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{`${minutes
                .toString()
                .padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}</Text>
            <Animatable.View 
                style={{ opacity: isActive ? 0 : 1 }}
                transition="opacity"
                duration={500}
            >
                <Text style={styles.label}>Minuti</Text>
                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={59}
                        step={1}
                        value={minutes}
                        onValueChange={setMinutes}
                    />
                </View>
                <Text style={styles.label}>Secondi</Text>
                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={59}
                        step={1}
                        value={seconds}
                        onValueChange={setSeconds}
                    />
                </View>
            </Animatable.View>
            <Animatable.View ref={animationRef}>
                <TouchableOpacity
                    style={[styles.button, isPressed && styles.buttonPressed]}
                    onPress={startTimer}
                    onLongPress={resetTimer}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                >
                    <Text style={styles.buttonText}>
                        {isActive ? "Pause" : "Start"}
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};

export default Timer;
