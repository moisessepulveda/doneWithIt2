import React from "react";
import {View, ImageBackground, StyleSheet, Image} from "react-native";

function WelcomeScreen() {
    return(
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}/>

            <View style={styles.loginButton} />

            <View style={styles.registerButton} />
        </ImageBackground>
    )
}
export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    logo: {
        width: 100,
        height: 100,
        top: 50,
        position: "absolute",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})


