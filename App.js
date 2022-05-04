import { View, Text } from 'react-native'
import React from 'react'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import ViewScreen from './components/ViewScreen'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Detail from './components/Detail'


export default function App() {
  const stacked = createNativeStackNavigator()
  const tabs = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <tabs.Navigator 
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff6363"
      }}>
      <tabs.Screen name="home" component={LandingPage}/>
      <tabs.Screen name="signup" component={SignUp}/>
      <tabs.Screen name="view" component={ViewScreen}/>
      <tabs.Screen name="detail" component={Detail}/>

      </tabs.Navigator>
    </NavigationContainer>
    
    
    
  )
}