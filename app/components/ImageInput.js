import React, {useEffect} from "react";
import {View, StyleSheet, Image, TouchableWithoutFeedback, Alert} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({imageUri, onChangeImage}) {

    useEffect(()=>{
        requestPermission()
    }, [])

    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync()
        if(!result.granted) { alert("Necesitas otorgar permisos") }
    }

    const handlePress = () => {
        if(!imageUri) selectImage()
        else Alert.alert('Eliminar', '¿Estas seguro que quieres eliminar esta imagen?', [
            {text: "Si", onPress:()=>{onChangeImage(null)}},
            {text: "No"}
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if(!result.cancelled) {
                onChangeImage(result.uri)
            }
        } catch(error) {
            console.log("error leyendo la imagen", error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium}/>}
                {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: '100%',
    }
})


