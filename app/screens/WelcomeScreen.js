import React from "react";
import {View, ImageBackground, StyleSheet, Image, Text} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
    return(
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Vende lo que no necesitas</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="login"/>
                <AppButton title="register" color="secondary"/>
            </View>
            <View style={styles.registerButton} />
        </ImageBackground>
    )
}
export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
      padding: 20,
        width: "100%"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        top: 70,
        position: "absolute",
        alignItems: "center"
    },
    tagline:  {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})


