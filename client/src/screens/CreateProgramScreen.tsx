import React, { useState, useEffect } from "react";
import {View, StyleSheet, ScrollView} from 'react-native';
import AddANameButton from "../components/CreateProgramScreen/AddANameButton";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNumWeeksDropdown from "../components/CreateProgramScreen/AddNumWeeksDropdown";
import CreateProgramButton from "../components/CreateProgramScreen/CreateProgramButton";

const CreateProgramScreen = () => {

    // states to validate if properly filled
    const [programName, setProgramName] = useState("");
    const [numWeeks, setNumWeeks] = useState(null);

    useEffect(() => {
        console.log("programName: ", programName);
    }, [programName]);


    const isValid = programName.trim() !== "" && numWeeks != null;


    return(
        <SafeAreaView style = {{flex: 1}}>
            <ScrollView
             contentContainerStyle = {styles.container}
             keyboardShouldPersistTaps= "handled">
                <View style = {styles.top}>
                    <AddANameButton onNameChange = {setProgramName}/>
                    <AddNumWeeksDropdown/>
                </View>
                <View style = {styles.bottom}>
                    <CreateProgramButton/>
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
        width: '100%',
        alignItems: 'center',
        paddingTop:20,
        gap: 20, 
    },
    bottom:{
        width: '100%',
        alignItems: 'center',
        paddingBottom: 50,
    }
});
export default CreateProgramScreen;