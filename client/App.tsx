import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./src/screens/HomeScreen";

import ConsistencyGraph from "./src/components/HomeScreen/ConsistencyGraph";
import CreateProgramBox from "./src/components/HomeScreen/CreateProgramBox";
import CreateProgramScreen from "./src/screens/CreateProgramScreen";
import AddANameButton from "./src/components/CreateProgram/AddANameButton";
import StartEmptyWorkout from "./src/components/HomeScreen/StartEmptyWorkout";


const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: '#1c1c20',
  },
};


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}