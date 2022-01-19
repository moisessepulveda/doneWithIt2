import React from "react";
import {View, StyleSheet, Image, TouchableHighlight} from "react-native";
import {Swipeable} from "react-native-gesture-handler";

import AppText from "../AppText";
import colors from "../../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({title, description, image, ImageComponnent, onPress, renderRightActions}) {
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGray}
                onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponnent}
                    {image && <Image source={image}  style={styles.image}/> }
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {description && <AppText style={styles.description} numberOfLines={2}>{description}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />
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
        backgroundColor: "white",
        alignItems: "center"
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    description: {
        color: colors.medium
    }
})


