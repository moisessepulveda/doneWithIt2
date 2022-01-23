import React from "react";
import {View, StyleSheet} from "react-native";
import LottieView from 'lottie-react-native';
import Style from "../config/style";

function ActivityIndicator({visible = false}) {
    if (!visible) return null;
    return (
        <View style={styles.overlay}>
            <LottieView
                autoPlay
                source={require('../assets/animations/loader.json')}/>
        </View>
    )
}

export default ActivityIndicator

const styles = StyleSheet.create({
   overlay: {
       position: "absolute",
       backgroundColor: "white",
       opacity: 0.5,
       height: "100%",
       width: "100%",
       zIndex: 1,
   }
});




