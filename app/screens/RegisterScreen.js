import React from "react";
import {StyleSheet, Image} from "react-native";
import Screen from "../components/Screen";

import * as yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from "../components/forms"

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
    name: yup.string().required().label("name"),
})

function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}/>
            <AppForm initialValues={{email: '', password: ''}}
                     onSubmit={(values) => console.log(values)}
                     validationSchema={validationSchema}>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="normal"
                    placeholder="Ingresa tu nombre"
                    textContentType="text"
                    name="name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                    name="email"

                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    icon="lock"
                    keyboardType="email-address"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <SubmitButton title="Register"/>
            </AppForm>
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 50
    }
})


