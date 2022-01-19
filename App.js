import {StatusBar} from 'expo-status-bar';
import React, {useState} from "react";
import {StyleSheet} from 'react-native';

import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";


export default function App() {
    return (
        <ListingEditScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
