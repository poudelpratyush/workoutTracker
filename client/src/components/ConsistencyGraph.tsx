import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text} from "react-native";
import {subDays, format} from 'date-fns';

interface Logs{
        id:number;
        active_date:string;
    };

const ConsistencyGraph = () =>{
    const days = Array(140).fill(null);

    const [activeDays, setActiveDays] = useState<string[]>([]);

    useEffect(() => {

        const fetchDates = async () =>{
            try{
                const response = await fetch("http://192.168.1.10:8080/api/activeDays");
                const data:Logs[] = await response.json();

                const newDates = data.map((item) => item.active_date);

                setActiveDays(newDates);
            }
            catch(error){
                console.log("Error:", error);
            }
        };

        fetchDates();
    }, []);

    return(
        <View style = {styles.container}>
            <View style = {styles.grid}>
                {
                    // creating the grid
                    days.map((_, index) =>{

                        // get the date 100 days before and start from 100 days ago

                        const result = subDays(new Date(), 140 - index - 1);
                        // format the result in the way we want it
                        const formattedResult = format(result, 'yyyy-MM-dd')
                        // testing console.log(formattedResult)
                        const isActive = activeDays.includes(formattedResult);

                        return(
                            // changing the box color based on weather we were active that day or not
                            <View key={index}  style = {[styles.boxes, isActive? styles.activeBox: null]}></View>
                        );
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '85%',
        maxWidth: '85%',
        backgroundColor: 'rgb(52, 52, 52)',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
    },
    grid:{
        height: 108,
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'center',
    },
    boxes:{
        height: 12,
        width: 12,
        backgroundColor: 'gray',
        borderRadius: 2,
    },
    activeBox:{
        backgroundColor: '#654ade',
    }
    
});


export default ConsistencyGraph;