// when clicked on this icon, it takes me to another page where i can create a workout plan

import { View,  StyleSheet, Text} from 'react-native';

const CreateProgramBox = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.innerText}> + Create Program</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(52, 52, 52)',
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
    }
});

export default CreateProgramBox;
