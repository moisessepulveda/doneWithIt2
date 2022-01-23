import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect, useContext} from "react";
import {StyleSheet, Button, Image, Text, View} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        if (user) setUser(user);
    }

    if(!isReady) {
        return <AppLoading
            startAsync={restoreUser}
            onFinish={() => setIsReady(true)}
            onError={console.warn}
            />
    }

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <OfflineNotice/>
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator/> : <AuthNavigator/>}
            </NavigationContainer>
        </AuthContext.Provider>
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
