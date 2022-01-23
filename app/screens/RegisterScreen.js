import React, {useState} from "react";
import {StyleSheet, Image} from "react-native";
import Screen from "../components/Screen";
import usersApi from '../api/users';
import authApi from '../api/auth';
import * as yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from "../components/forms"
import useAuth from "../auth/useAuth";
import ErrorMessage from "../components/forms/ErrorMessage";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
    name: yup.string().required().label("name"),
})

function RegisterScreen() {

    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);

    const auth = useAuth();
    const [error, setError] = useState();


    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("Ha ocurrido un error inesperado");
                console.log(result);
            }
            return;
        }

        const {data: authToken} = await loginApi.request(
            userInfo.email,
            userInfo.password
        )

        auth.logIn(authToken);

    }

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
            <Screen style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}/>
                <AppForm initialValues={{email: '', password: ''}}
                         onSubmit={handleSubmit}
                         validationSchema={validationSchema}>
                    <ErrorMessage error={error} visible={error}/>
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
        </>
    )
}

export default RegisterScreen;

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


