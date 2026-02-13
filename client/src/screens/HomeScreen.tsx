import React from "react";
import {View, ScrollView, StyleSheet} from 'react-native';
import { SafeAreaView} from "react-native-safe-area-context";
import ConsistencyGraph from "../components/HomeScreen/ConsistencyGraph";
import CreateProgramBox from "../components/HomeScreen/CreateProgramBox";
import HPAddAWorkout from "../components/HomeScreen/StartDayOne";
import StartEmptyWorkout from "../components/HomeScreen/StartEmptyWorkout";

const HomeScreen = () => {
    return(
        <SafeAreaView style= {{flex: 1}}>
            <ScrollView contentContainerStyle = {styles.container}>
                <View style = {styles.top}>
                    <ConsistencyGraph/>
                </View>
                <View style = {styles.bottom}>
                    <StartEmptyWorkout/>
                    <CreateProgramBox/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    top:{
        paddingTop: 20,
        alignItems: 'center',
    },
    bottom:{
        width: '100%',
        paddingBottom: 20,
        alignItems: 'center',
        gap: 20,
    }
});


export default HomeScreen;