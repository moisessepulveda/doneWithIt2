import React from "react";
import {View, StyleSheet, FlatList} from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listing = [
    {
        id: 1,
        title: "chaqueta para la venta",
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Sillon a la venta",
        price: 100,
        image: require('../assets/couch.jpg')
    }
]
function ListingScreen({ navigation }) {
    return(
        <Screen style={styles.screen}>
           <FlatList data={listing}
                     keyExtractor={listing => listing.id.toString()}
                     renderItem={({item}) =>
                        <Card
                            title={item.title}
                            subtitle={"$"+item.price}
                            onPress={() => {navigation.navigate(routes.LISTING_DETAILS, item)}}
                            image={item.image} />
           } />
        </Screen>
    )
}
export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightGray
    }
})


