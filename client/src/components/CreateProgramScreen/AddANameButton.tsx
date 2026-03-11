import React from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'

const AddANameButton = ({ onNameChange }: { onNameChange: (name: string) => void}) => {

    return(
        <View style = {styles.container}>
            <Text style = {styles.textOnTop}>What is the name of your program? <Text style= {styles.asterisk}>*</Text></Text>
            <TextInput
             onChangeText={onNameChange}
             style = {styles.inputBox}
             placeholder="Example: Push Pull Legs"
             placeholderTextColor={'#575757'}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
    },
    inputBox:{
        height: 60,
        backgroundColor: 'rgb(52, 52, 52)',
        borderRadius: 15,
        width: '100%',
        maxWidth: '85%',
        padding: 15,
        color: 'white',
        fontFamily: 'ui-monospace',
    },
    textOnTop:{
        color: 'white',
        paddingBottom: 20,
        fontFamily: 'ui-monospace',
        fontWeight: 'bold',
    },
    asterisk:{
        color: 'red',
    }
});

export default AddANameButton;