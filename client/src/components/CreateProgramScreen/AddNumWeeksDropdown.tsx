import React from "react";
import { View, StyleSheet, Text } from "react-native";


const AddNumWeeksDropdown = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textOnTop}>How many weeks is the program? <Text style = {styles.asterick}>*</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'

    },
    textOnTop:{
        color: 'white',
        fontFamily: 'ui-monospace',
        fontWeight: 'bold',
    },
    asterick:{
        color: 'red',
    },
});

export default AddNumWeeksDropdown;