import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";

const StartEmptyWorkout = () => {
    return (
        <Pressable onPress={() => 
            console.log("Pressed")}
            style = {({pressed}) => [
                styles.container,
                (pressed) ? styles.isPressed: null

            ]}>
            <Text style = {styles.textInside}>Start Empty Workout</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '85%',
        width: '85%',
        height: 80,
        borderRadius: 15,
        backgroundColor: 'rgb(52, 52, 52)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    isPressed: {
        opacity: 0.7,
    },
    textInside: {
        color: 'rgb(226, 223, 210)',
        fontFamily: 'ui-monospace',
        fontSize: 15, 
        fontWeight: 'bold',
    }
});


export default StartEmptyWorkout;