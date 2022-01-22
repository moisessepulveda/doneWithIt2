/*_EXTERNAL DEPENDENCIES_*/
import {StyleSheet} from "react-native";
import {AppForm, AppFormField, SubmitButton} from "../components/forms";
import Screen from "../components/Screen";
import * as yup from "yup";
/*_INTERNAL_DEPENDENCIES_*/
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import colors from "../config/colors";
import {useState} from "react";
import UploadScreen from "./UploadScreen";


const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    description: yup.string().label("Description"),
    category: yup.object().required().nullable().label("Category"),
    images: yup.array().min(1).label("Imagenes"),
})

function ListEditScreen() {
    const location = useLocation();
    const[uploadVisible, setUploadVisible] = useState(false);
    const[progress, setProgress] = useState(0);
    /*const handleTimeOut = (progress) => {
        console.log(progress);
        if(progress>=1) progress=0;
        console.log(progress);
        const timeOut = setInterval(()=> {
            console.log(progress);
            setProgress(progress+=0.1);
            console.log(progress);
            if(progress >= 1) {
                clearTimeout(timeOut);
            }
        }, 200);
    }*/
    const handleSubmit = async (listing, {resetForm}) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingApi.addListing(
            {...listing, location},
            progress => setProgress(progress)
        );
        if(!result.ok) {
            setUploadVisible(false);
            alert("no se pudo guardar el elemento");
            console.log(result.problem);
        }

        resetForm();
    }
    const categories = [
        {
            backgroundColor: "#fc5c65",
            icon: "floor-lamp",
            label: "Furniture",
            value: 1,
        },
        {
            backgroundColor: "#fd9644",
            icon: "car",
            label: "Cars",
            value: 2,
        },
        {
            backgroundColor: "#fed330",
            icon: "camera",
            label: "Cameras",
            value: 3,
        },
        {
            backgroundColor: "#26de81",
            icon: "cards",
            label: "Games",
            value: 4,
        },
        {
            backgroundColor: "#2bcbba",
            icon: "shoe-heel",
            label: "Clothing",
            value: 5,
        },
        {
            backgroundColor: "#45aaf2",
            icon: "basketball",
            label: "Sports",
            value: 6,
        },
        {
            backgroundColor: "#4b7bec",
            icon: "headphones",
            label: "Music",
            value: 7,
        },
        {
            backgroundColor: "#a55eea",
            icon: "book-open-variant",
            label: "Books",
            value: 8,
        },
        {
            backgroundColor: "#778ca3",
            icon: "application",
            label: "Other",
            value: 9,
        },
    ];

    return (
        <Screen style={styles.container}>
            <UploadScreen progress={progress} visible={uploadVisible} onDone={() => setUploadVisible(false)} />
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <FormImagePicker name="images" />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    placeholder="Titulo"
                    textContentType="none"
                    name="title"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="numeric"
                    placeholder="Precio"
                    textContentType="none"
                    name="price"
                />

                <AppFormPicker
                    items={categories}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    numberOfColumns={3}
                    keyboardType="default"
                    placeholder="Categoria"
                    PickerItemComponent={CategoryPickerItem}
                    textContentType="text"
                    name="category"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    placeholder="Descripción"
                    multiline
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


