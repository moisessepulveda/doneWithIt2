import React from "react";
import {View, StyleSheet, Image} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function DetailListingScreen(props) {
    return(
        <View>
            <Image
                style={styles.image}
                source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Chaqueta a la venta</AppText>
                <AppText style={styles.price}>$100</AppText>
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


