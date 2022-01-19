import {StatusBar} from 'expo-status-bar';
import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Switch} from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from "./app/components/AppButton";
import Card from './app/components/Card'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from './app/components/icon';
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
    const categories = [
        {label: "Forniture", value: 1},
        {label: "Clothing", value: 2},
        {label: "Cameras", value: 3},
    ]

    const [firstName, setFirstName] = useState('')
    const [isNew, setIsNew] = useState(false);
    const [category, setCategory] = useState(categories[0]);



    return (
        <LoginScreen />
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
