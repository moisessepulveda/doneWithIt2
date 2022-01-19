import React from "react";
import {View, StyleSheet, Image, TouchableHighlight} from "react-native";
import {Swipeable} from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({title, description, image, onPress, renderRightActions}) {
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGray}
                onPress={onPress}>
                <View style={styles.container}>
                    <Image source={image}  style={styles.image}/>
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.description}>{description}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}
export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500",
    },
    description: {
        color: colors.medium
    }
})


