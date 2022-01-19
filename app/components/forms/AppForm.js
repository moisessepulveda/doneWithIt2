import React from "react";
import {View, StyleSheet} from "react-native";
import {Formik} from "formik";

function AppForm({initialValues, onSubmit, validationSchema, children }) {
    return(
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
export default AppForm

const styles = StyleSheet.create({

})


