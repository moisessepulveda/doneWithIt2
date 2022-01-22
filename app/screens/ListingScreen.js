import React, {useEffect, useState} from "react";
import {Button, StyleSheet, FlatList} from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingScreen({navigation}) {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, [])

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <AppText>No se han podido obtener los datos</AppText>
                <Button title="Reintentar" onPress={() => getListingsApi.request()}/>
            </>}
            <ActivityIndicator visible={getListingsApi.loading}/>
            <FlatList data={getListingsApi.data}
                      keyExtractor={listing => listing.id.toString()}
                      renderItem={({item}) =>
                          <Card
                              title={item.title}
                              subtitle={"$" + item.price}
                              onPress={() => {
                                  navigation.navigate(routes.LISTING_DETAILS, item)
                              }}
                              imageUrl={item.images[0].url}
                              thumbnailUrl={item.images[0].thumbnailUrl}/>
                      }/>
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


