import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FightScreen from '../screens/Fight'

const Stack = createStackNavigator();

export default function AccountNavegation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Fight" component={FightScreen} options={{ title: "FIGHT", }} />
    </Stack.Navigator>
  )
}