import React from "react";
import {View, StyleSheet} from "react-native";
import Constants from 'expo-constants';
import {useNetInfo} from "@react-native-community/netinfo";
import AppText from "./AppText";
import colors from "../config/colors";

function OfflineNotice() {
    const netInfo = useNetInfo();
    if (netInfo.type !== "unknown"
        && netInfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No tienes conexión a internet</AppText>
            </View>
        )
    }
    return null;
}

export default OfflineNotice

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: "absolute",
        top: Constants.statusBarHeight,
        zIndex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.white
    }
})


