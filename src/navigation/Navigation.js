import React from 'react';
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome5'
import  FavoriteNavegation from './FavoriteNavegation'
import  PokedexNavegation from './PokedexNavigation'
import  FightNavegation from './FightNavigation'

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            {/* <Tab.Screen name="Favorite" component={FavoriteNavegation} options={{
                tabBarLabel: "FAVORITOS",
                tabBarIcon: ({color, size}) => (<Icon name="heart" color={color} size={size} />)
            }} /> */}

            <Tab.Screen name="Pokedex" component={PokedexNavegation}  options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeBall(),
            }} />

            {/* PELEA */}
            <Tab.Screen name="Fight" component={FightNavegation} options={{
                tabBarLabel: "FIGHT",
                tabBarIcon: ({color, size}) => (<Icon name="gamepad" color={color} size={size} />)
            }} />
        </Tab.Navigator>
        )
}

function renderPokeBall(){
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{ width: 75, height: 75, top: -15 }}
        />
    );
}