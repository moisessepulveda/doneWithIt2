import React from "react";
import {View, StyleSheet, FlatList} from "react-native";

import Screen from '../components/Screen'
import ListItem from '../components/lists/ListItem'
import Icon from "../components/icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import useAuth from "../auth/useAuth";

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    },
]
function AccountScreen({navigation}) {

    const {user, logOut} = useAuth();


    return(
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image=""
                    title={user.name}
                    description={user.email}
                    image={require('../assets/avatar5.png')}/>
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                          keyExtractor={item => item.title}
                          ItemSeparatorComponent={ListItemSeparator}
                          renderItem={({item})=>
                              <ListItem
                                  title={item.title}
                                    ImageComponnent={
                                    <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                                  }
                                  onPress={() => {navigation.navigate(item.targetScreen)}}
                              />

                          } />
            </View>
            <ListItem
                title="Cerrar Sesión"
                onPress={() => logOut()}
                ImageComponnent={
                    <Icon name="logout"
                          backgroundColor="#ffe66d" />
                }/>
        </Screen>
    )
}
export default AccountScreen

const styles = StyleSheet.create({
    container:{
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.lightGray
    }
})


