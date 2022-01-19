import React from "react";
import {View, StyleSheet} from "react-native";
import AppText from "./AppText";
import Icon from './icon'

function CategoryPickerItem({item, onPress}) {
    return(
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.label}>{item.label}</AppText>
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

    }
})


