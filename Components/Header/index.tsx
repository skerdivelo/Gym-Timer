import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StyleProp,
    ViewStyle,
} from "react-native";
import Button from "../Button";
import styles from "./style";

type HeaderProps = {
    title: string;
    buttonLeft?: React.ReactNode;
    buttonRight?: React.ReactNode;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    style?: StyleProp<ViewStyle>;
};

const Header: React.FC<HeaderProps> = ({ title, buttonLeft, buttonRight }) => (
    <SafeAreaView>
        <View style={styles.header}>
            <View style={styles.buttonContainerLeft}>{buttonLeft}</View>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.buttonContainerRight}>{buttonRight}</View>
        </View>
    </SafeAreaView>
);

export default Header;
