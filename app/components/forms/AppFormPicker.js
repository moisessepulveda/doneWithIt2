import React from "react";
import {View, StyleSheet} from "react-native";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";

function AppFormPicker({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched, setFieldValue, values} = useFormikContext();
    return (
        <>
            <AppPicker name={name} {...otherProps}
                        selectedItem={values[name]}
                       onSelectItem={(value)=>setFieldValue(name, value)} />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

export default AppFormPicker

const styles = StyleSheet.create({})


