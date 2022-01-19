import React, {useState} from "react";
import {
    View,
    Button,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    Modal
} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/style"
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
                       icon,
                       items,
                       onSelectItem,
                       PickerItemComponent = PickerItem,
                       numberOfColumns = 1,
                       selectedItem,
                       placeholder,
                       width = "100%"
                   }) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    {icon && <MaterialCommunityIcons name={icon}
                                                     size={20}
                                                     color={defaultStyles.colors.medium}
                                                     style={styles.icon}/>}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Cerrar" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        numberOfColumns={numberOfColumns}
                        renderItem={({item}) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item)
                                }}/>
                        )
                        }
                    />
                </Screen>
            </Modal>
        </View>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGray,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
})


