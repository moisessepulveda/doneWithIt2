import React from "react";
import {View, StyleSheet, TextInput, Platform, StatusBar} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import defaultStyles from "../config/style"

function AppTextInput({icon, width = "100%", ...otherProps}) {
    return(
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium} style={styles.icon}/> }
            <TextInput style={defaultStyles.text} {...otherProps}  />
        </View>
    )
}
export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGray,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
      marginRight: 10,
    },
})


