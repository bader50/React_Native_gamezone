import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home({navigation}){

    const onPressHandler = ()=>{
        navigation.navigate('ReviewDetails');
    }

    console.log("home");
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textTitle}>Home Screen</Text>
            <Button title='go to reviewDetails' onPress={onPressHandler} />
        </View>
    )
}