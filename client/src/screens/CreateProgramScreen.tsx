import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import AddANameButton from "../components/CreateProgramScreen/AddANameButton";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNumWeeksDropdown from "../components/CreateProgramScreen/AddNumWeeksDropdown";

const CreateProgramScreen = () => {
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.addName}>
                <AddANameButton/>
            </View>
            <View style = {styles.addWeeks}>
                <AddNumWeeksDropdown/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    addName:{
        paddingTop: 30,
    },
    addWeeks:{
        paddingTop: 30,
    },
});
export default CreateProgramScreen;