import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer  from './navigation/CustomDrawer'
import { MainLayout } from "./screens";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

function screen1()  {
    return( 
        <View>
            <Text>Screen 1</Text>
        </View>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                  initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="Homeo"
                    component={ CustomDrawer }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App