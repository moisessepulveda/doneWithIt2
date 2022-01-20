import React from "react";
import {View, StyleSheet} from "react-native";
import LottieView from 'lottie-react-native';
import Style from "../config/style";

function ActivityIndicator({visible = false}) {
    if (!visible) return null;
    return (
        <LottieView
            autoPlay
            source={require('../assets/animations/loader.json')}/>
    )
}

export default ActivityIndicator




