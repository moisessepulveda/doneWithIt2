import React from "react";
import {StyleSheet, Platform, SafeAreaView, View} from "react-native";


function Screen({children, style}) {
    return(
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    )
}
export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android'?statusbar.currentHeight:0,
        flex:1
    },
    view: {
        flex: 1
    }
})


