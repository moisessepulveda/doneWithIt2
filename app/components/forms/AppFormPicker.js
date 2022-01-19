import React from "react";
import {View, StyleSheet} from "react-native";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from "formik";

function AppFormPicker({name,items,numberOfColumns, PickerItemComponent, ...otherProps}) {
    const {errors, touched, setFieldValue, values} = useFormikContext();
    return (
        <>
            <AppPicker name={name} {...otherProps}
                        items={items}
                       numberOfColumns={numberOfColumns}
                       selectedItem={values[name]}
                       PickerItemComponent={PickerItemComponent}
                       onSelectItem={(value) => setFieldValue(name, value)}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

export default AppFormPicker

const styles = StyleSheet.create({})


