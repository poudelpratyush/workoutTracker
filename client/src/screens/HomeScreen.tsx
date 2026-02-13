import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ConsistencyGraph from "../components/HomeScreen/ConsistencyGraph";
import CreateProgramBox from "../components/HomeScreen/CreateProgramBox";
import HPAddAWorkout from "../components/HomeScreen/StartDayOne";
import StartEmptyWorkout from "../components/HomeScreen/StartEmptyWorkout";

const HomeScreen = () => {
    return(
        <SafeAreaView>
            <View style = {styles.container}>
                <View style = {styles.items}>
                    <ConsistencyGraph/>
                    <StartEmptyWorkout/>
                    <CreateProgramBox/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    items:{
    }
});


export default HomeScreen;