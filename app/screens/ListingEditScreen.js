import React from "react";
import {View, StyleSheet, Image} from "react-native";
import {AppForm, AppFormField, SubmitButton} from "../components/forms";
import Screen from "../components/Screen";
import * as yup from "yup";
import AppFormPicker from "../components/forms/AppFormPicker";


const validationSchema = yup.object().shape({
    category: yup.string().required().label("Category"),
})

function ListEditScreen(props) {

    const items = [
        {
            id: 1,
            value: "ropa",
            label: "ropa",
        },
        {
            id: 2,
            value: "zapatos",
            label: "zapatos",
        },
        {
            id: 3,
            value: "ropa usada",
            label: "ropa usada",
        }
    ]

    return(
        <Screen style={styles.container}>

            <AppForm
                initialValues={{category: ''}}
                items={items}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="normal"
                    placeholder="Titulo"
                    textContentType="text"
                    name="Title"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="number"
                    placeholder="Precio"
                    textContentType="number"
                    name="price"
                />


                <AppFormPicker
                    items={items}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="normal"
                    placeholder="Categoria"
                    textContentType="text"
                    name="categoria"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="normal"
                    placeholder="Descripción"
                    textContentType="text"
                    name="description"
                />

                <SubmitButton title="POST"/>

            </AppForm>
        </Screen>
    )
}
export default ListEditScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})


