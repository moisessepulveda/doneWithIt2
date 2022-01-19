import React, {useState} from "react";
import {View, StyleSheet, Image} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import {Formik} from "formik";
import * as yup from 'yup';
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";


const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
})

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}/>

            <Formik initialValues={{email: '', password: ''}}
                    onSubmit={(values)=> console.log(values)}
                    validationSchema={validationSchema}
                    >
                { ({handleChange, handleSubmit, errors,setFieldTouched, touched}) => (
                    <>
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

                        <AppButton title="Login" onPress={()=> handleSubmit}/>
                    </>
                )}
            </Formik>


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


