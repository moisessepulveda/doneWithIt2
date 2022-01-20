/*_EXTERNAL DEPENDENCIES_*/
import {StyleSheet} from "react-native";
import {AppForm, AppFormField, SubmitButton} from "../components/forms";
import Screen from "../components/Screen";
import * as yup from "yup";
/*_INTERNAL_DEPENDENCIES_*/
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import colors from "../config/colors";


const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    description: yup.string().label("Description"),
    category: yup.object().required().nullable().label("Category"),
    images: yup.array().min(1).label("Imagenes"),
})

function ListEditScreen() {
    const location = useLocation();
    const items = [
        {
            value: 1,
            label: "ropa",
            backgroundColor: colors.primary,
            icon: "email"
        },
        {
            value: 2,
            label: "zapatos",
            backgroundColor: colors.secondary,
            icon: "lock"
        },
        {
            value: 3,
            label: "ropa usada",
            backgroundColor: colors.dark,
            icon: "apps"
        }
    ]

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                items={items}
                onSubmit={(values) => console.log(location)}
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
                    items={items}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    numberOfColumns={3}
                    keyboardType="default"
                    placeholder="Categoria"
                    PickerItemComponent={CategoryPickerItem}
                    textContentType="text"
                    name="categoria"
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


