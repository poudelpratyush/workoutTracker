import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text} from "react-native";

const StartDayOne = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.workoutView}>
                <Text style = {styles.startButton}>Start Day 1</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(52, 52, 52)',
        maxWidth: '85%', 
        height: 220,
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },

    workoutView: {
        backgroundColor: 'rgb(26, 26, 29)',
        height: 50,
        width: '90%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    startButton: {
        color: 'rgb(226, 223, 210)',
        fontSize: 15,
        fontFamily: 'ui-monospace',
        fontWeight: 'bold',
        
    }

});


export default StartDayOne;