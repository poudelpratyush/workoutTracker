import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const CreateProgramButton = () => {
    return(
        <Pressable onPress={() => console.log("Pressed")}
            style={({pressed}) => [
                styles.container,
                (pressed)? styles.buttonPressed : null,
            ]}>
            <Text style = {styles.innerText}>Get Started</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        maxWidth: '85%',
        backgroundColor: 'rgb(118, 236, 94)', 
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
        borderRadius: 15,
    },
    innerText:{
        fontFamily: 'ui-monospace',
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)',
    },
    buttonPressed:{
        opacity: 0.7,
    }
    
});

export default CreateProgramButton;