import React from "react";
import {View, StyleSheet, Image} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
function ListItem({title, description, image}) {
    return(
        <View style={styles.container}>
            <Image source={image}  style={styles.image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.description}>{description}</AppText>
            </View>
        </View>
    )
}
export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
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


