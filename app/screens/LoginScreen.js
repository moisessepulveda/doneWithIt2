import React, {useState} from "react";
import {StyleSheet, Image} from "react-native";
import * as yup from 'yup';

import Screen from "../components/Screen";
import authApi from '../api/auth';

import {AppForm, AppFormField, SubmitButton, ErrorMessage} from "../components/forms"
import useAuth from "../auth/useAuth";

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
})

function LoginScreen() {
    const {logIn} = useAuth();

    const [loginFailed, setLoginFailed] = useState(false);
    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);

        setLoginFailed(false);
        logIn(result.data);
    }
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}/>
            <AppForm initialValues={{email: '', password: ''}}
                     onSubmit={handleSubmit}
                     validationSchema={validationSchema}>

                <ErrorMessage
                    error="Correo o contraseña invalida"
                    visible={loginFailed}/>

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
                <SubmitButton title="Login"/>
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


