import React from "react";
import {View, StyleSheet} from "react-native";
import {Image} from 'react-native-expo-image-cache';

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function DetailListingScreen({route}) {
    const listing = route.params;
    return(
        <View>
            <Image
                style={styles.image}
                preview={{uri: listing.images[0].thumbnailUrl}}
                uri={listing.images[0].url} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        title="Moises Sepulveda"
                        subtitle="otra cosa"
                        image={require('../assets/avatar.png')} />
                </View>
            </View>
        </View>
    )
}
export default DetailListingScreen

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
       marginVertical: 50
    }
})


