import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';

const MainPage = ({ navigation }: { navigation: any }) => {
    return (
        <ImageBackground source={require('../../assets/peakpx.jpg')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Benvenuto Capo!</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Timer')}>
                        <Text style={styles.buttonText}>Timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Esercizio')}>
                        <Text style={styles.buttonText}>Esercizio</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default MainPage;