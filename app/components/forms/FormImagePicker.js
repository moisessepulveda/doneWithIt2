import React from "react";
import {View, StyleSheet} from "react-native";
import ImageInputList from "../ImageInputList";
import {useFormikContext} from "formik";
import {ErrorMessage} from "./index";

function FormImagePicker({name}) {

    const {errors, touched, setFieldValue, values} = useFormikContext();
    const imagesUris = values[name]
    const handleAdd = uri => {
        setFieldValue(name, [...imagesUris, uri])
    }
    const handleRemove = uri => {
        setFieldValue(name, [...imagesUris.filter(imageUri => imageUri !== uri)])
    }

    return(
        <>
            <ImageInputList
                imageUris={imagesUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove} />

            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}
export default FormImagePicker

const styles = StyleSheet.create({
    container:{}
})


