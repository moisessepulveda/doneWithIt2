import React from "react";
import {FlatList} from "react-native";
import ListItem fr
const messages = [
    {
        id: 1,
        title: 'T1',
        description: "D1",
        image: require('../app/assets/avatar.png')
    },
    {
        id: 2,
        title: 'T2',
        description: "D2",
        image: require('../app/assets/avatar2.png')
    },
    {
        id: 3,
        title: 'T3',
        description: "D3",
        image: require('../app/assets/avatar3.png')
    },
    {
        id: 4,
        title: 'T24',
        description: "D24",
        image: require('../app/assets/avatar4.png')
    }
]
function MessagesScreen(props) {
    return(
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => <ListItem />}
        />
    )
}

export default MessagesScreen;
