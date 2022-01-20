import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import {StyleSheet, Button, Image, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";

const Tweets = ({navigation}) => (
    <Screen>
        <Text>tweets</Text>
        <Button title="View twitt"
        onPress={() => navigation.navigate("TweetDetails", {id: "hola"})}/>
    </Screen>
)

const TweetDetails = ({route}) => (
    <Screen>
        <Text>details {route.params.id}</Text>
    </Screen>
)

const Account = ({route}) => (
    <Screen>
        <Text>Account</Text>
    </Screen>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={Tweets} />
        <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
)


const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen  name="Tweets" component={Tweets} options={{title: "mi detalle"}} />
        <Stack.Screen  name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
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
