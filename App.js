import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import {StyleSheet, Button, Image, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AppText from "./app/components/AppText";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {

    return (
        <>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
                <AppNavigator/>
            </NavigationContainer>
        </>
    );
}


/*export default function App() {
    const demo = async () => {
        try {
            await AsyncStorage.setItem("person", JSON.stringify({id: 1}));
            const value = await AsyncStorage.getItem('person');
            const person = JSON.parse(value);
            console.log(person);
        } catch (error) {
            console.log(error);
        }
    }
    demo();
    return null;
}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
