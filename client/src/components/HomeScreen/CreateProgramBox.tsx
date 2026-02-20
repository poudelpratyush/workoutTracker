// when clicked on this icon, it takes me to another page where i can create a workout plan
import React, { use } from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Types/navigation';



const CreateProgramBox = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    return(
        <Pressable onPress={() => navigation.navigate("CreateProgramScreen")}
            style={({pressed}) => [
                styles.container,
                (pressed) ? styles.buttonPressed : null
            ]}>
            <Text style = {styles.innerText}> + Create Program</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(52, 52, 52)',
        width: '100%',
        height: 80,
        maxWidth: '85%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText: {
        fontSize: 15,
        fontFamily: 'ui-monospace',
        fontWeight: 'bold',
        color: 'rgb(226, 223, 210)'
    },
    buttonPressed: {
        opacity: 0.7, 
    }

});

export default CreateProgramBox;

