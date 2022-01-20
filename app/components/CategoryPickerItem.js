import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import Icon from './icon'


function CategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingVertical: 15,
        alignItems: "center"
    },
    label: {
        alignSelf: "center",
        textTransform: "capitalize"
    }
})


