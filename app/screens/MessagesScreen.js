import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import ListItem from "../components/ListItem"
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
const messages = [
    {
        id: 1,
        title: 'T1',
        description: "D1",
        image: require('../assets/avatar.png')
    },
    {
        id: 2,
        title: 'T2',
        description: "D2",
        image: require('../assets/avatar2.png')
    },
    {
        id: 3,
        title: 'T3',
        description: "D3",
        image: require('../assets/avatar3.png')
    },
    {
        id: 4,
        title: 'T24',
        description: "D24",
        image: require('../assets/avatar4.png')
    }
]
function MessagesScreen(props) {
    return(
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                ItemSeparatorComponent={()=> ListItemSeparator()}
                renderItem={({item}) =>
                    <ListItem
                        onPress={()=> console.log("pressed", item)}
                        title={item.title}
                        description={item.description}
                        image={item.image} />}
            />
        </Screen>
    )
}

export default MessagesScreen;

const styles = StyleSheet.create({

})
