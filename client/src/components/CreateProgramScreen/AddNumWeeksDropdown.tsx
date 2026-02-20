import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

const weeks = Array.from({length: 12}, (_, index) => ({
    week:  String(index + 1) + " Week",
    id: String(index + 1)
}));


const AddNumWeeksDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    return(
        <View style = {styles.container}>
            <Text style = {styles.textOnTop}>How many weeks is the program? <Text style = {styles.asterick}>*</Text></Text>

            <Dropdown 
                data={weeks}
                labelField={"week"}
                valueField={"id"}
                value={selectedValue}
                onChange={item => setSelectedValue(item.id)}
                placeholder="Select Weeks"
                autoScroll= {false}
                // styles for the dropdown
                style = {styles.dropdownBox}
                placeholderStyle = {styles.placeholder}
                selectedTextStyle = {styles.selectedText}
                containerStyle = {styles.dropdownMenu}
                itemTextStyle = {styles.menuItems}
                activeColor="#444444"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    textOnTop:{
        color: 'white',
        fontFamily: 'ui-monospace',
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    asterick:{
        color: 'red',
    },

    // dropdown styles
    dropdownBox:{
        height: 60,
        width: '100%',
        maxWidth: '85%',
        backgroundColor: 'rgb(52, 52, 52)',
        borderRadius: 15,
        paddingHorizontal: 15,
    },
    placeholder:{
        color: '#575757',
        fontSize: 15,
        fontFamily: 'ui-monospace',
    },
    selectedText:{
        color: 'white',
        fontSize: 15,
        fontFamily: 'ui-monospace',
    },
    dropdownMenu:{
        backgroundColor: 'rgb(52, 52, 52)',
        borderRadius: 8,
        marginTop: 5, 
        borderWidth: 0,
        overflow: 'hidden',
    },
    menuItems:{
        color: 'white',
        fontFamily: 'ui-monospace',
    }
});

export default AddNumWeeksDropdown;