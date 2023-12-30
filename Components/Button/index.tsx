import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleProp,
    ViewStyle,
    KeyboardAvoidingView,
    SafeAreaView,
} from "react-native";
import style from "./style";

type ButtonProps = {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>; // Aggiungi una prop style qui
};

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    style: customStyle,
}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={[style.button, customStyle]}
                onPress={onPress}
            >
                <Text style={style.buttonText}>{title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Button;
