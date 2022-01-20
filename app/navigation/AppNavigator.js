import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ListEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import Routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name={routes.FEED}
                    options={{
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                        )
                    }}
                    component={FeedNavigator}/>

        <Tab.Screen name={routes.LISTING_EDIT}
                    options={({navigation}) => ({
                        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="plus-circle" color={color} size={size}/>
                        )
                    })}
                    component={ListEditScreen}/>

        <Tab.Screen name={Routes.ACCOUNT}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="account" color={color} size={size}/>
                        )
                    }}
                    component={AccountNavigator}/>
    </Tab.Navigator>
)

export default AppNavigator;
