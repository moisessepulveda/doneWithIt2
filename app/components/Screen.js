import React from "react";
import {StyleSheet, Platform, SafeAreaView} from "react-native";


function Screen({children}) {
    return(
       <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    )
}
export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android'?statusbar.currentHeight:0,
        flex:1
    }
})


