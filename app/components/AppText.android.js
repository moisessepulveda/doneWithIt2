import React from "react";
import {Text, StyleSheet, Platform} from "react-native";

function AppText({children, style}) {
    return(
        <Text style={[styles.text, style]}>{children}</Text>
    )
}
export default AppText

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontSize: 20,
        fontFamily: "Roboto",
    }
})


