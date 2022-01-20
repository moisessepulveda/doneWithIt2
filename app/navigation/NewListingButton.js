import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40}/>
            </View>
        </TouchableOpacity>
    )
}

export default NewListingButton

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.lightGray,
        borderWidth: 10,
        borderRadius: 40,
        height: 80,
        justifyContent: "center",
        width: 80,
        bottom: 20
    }
})


